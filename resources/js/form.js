$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// FORM
// —————————————————————————————————————————————————————————————————
// CHANGE STYLE ON FOCUS
// CUSTOM SELECT
// CUSTOM FILE UPLOAD
// —————————————————————————————————————————————————————————————————



// —————————————————————————————————————————————————————————————————
// CHANGE STYLE ON FOCUS
// —————————————————————————————————————————————————————————————————

$(".form__input").focus(function() {
	$(this).closest(".form__group").addClass('focused');
});
$(".form__input").focusout(function() {
	$(this).closest(".form__group").removeClass('focused');
});



// —————————————————————————————————————————————————————————————————
// CUSTOM SELECT
// —————————————————————————————————————————————————————————————————

$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hide'); 
    $this.wrap('<div class="form__select"></div>');
    $this.after('<div class="form__input"></div>');

    var $styledSelect = $this.next('div.form__input');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'form__dropdown'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.form__input.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.form__dropdown').hide();
        });
        $(this).toggleClass('active').next('ul.form__dropdown').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

// prevent page scroll when hovering dropdown
$('.form__dropdown').bind('mousewheel DOMMouseScroll', function(e) {
    var scrollTo = null;

    if (e.type == 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);
    }
    else if (e.type == 'DOMMouseScroll') {
        scrollTo = 40 * e.originalEvent.detail;
    }

    if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
    }
});



// —————————————————————————————————————————————————————————————————
// CUSTOM FILE UPLOAD
// —————————————————————————————————————————————————————————————————

;(function($) {

	// Browser supports HTML5 multiple file?
	var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
		isIE = /msie/i.test( navigator.userAgent );

	$.fn.customFile = function() {

		return this.each(function() {

		var $file = $(this).addClass('hide'), // the original file input
			$wrap = $('<div class="form__file clear">'),
			$input = $('<input type="text" class="form__input" />'),
			// Button that will be used in non-IE browsers
			$button = $('<button type="button" class="form__input form__button">Select a File</button>'),
			// Hack for IE
			$label = $('<label class="form__input form__label" for="'+ $file[0].id +'">Select a File</label>');

		// Hide by shifting to the left so we
		// can still trigger events
		$file.css({
			position: 'absolute',
			left: '-9999px'
		});

		$wrap.insertAfter( $file )
			.append( $file, $input, ( isIE ? $label : $button ) );

		// Prevent focus
		$file.attr('tabIndex', -1);
		$button.attr('tabIndex', -1);

		$button.click(function () {
			$file.focus().click(); // Open dialog
		});

		$file.change(function() {

			var files = [], fileArr, filename;

			// If multiple is supported then extract
			// all filenames from the file array
			if ( multipleSupport ) {
			fileArr = $file[0].files;
			for ( var i = 0, len = fileArr.length; i < len; i++ ) {
				files.push( fileArr[i].name );
			}
			filename = files.join(', ');

			// If not supported then just take the value
			// and remove the path to just show the filename
			} else {
			filename = $file.val().split('\\').pop();
			}

			$input.val( filename ) // Set the value
			.attr('title', filename) // Show filename in title tootlip
			.focus(); // Regain focus

		});

		$input.on({
			blur: function() { $file.trigger('blur'); },
			keydown: function( e ) {
			if ( e.which === 13 ) { // Enter
				if ( !isIE ) { $file.trigger('click'); }
			} else if ( e.which === 8 || e.which === 46 ) { // Backspace & Del
				// On some browsers the value is read-only
				// with this trick we remove the old input and add
				// a clean clone with all the original events attached
				$file.replaceWith( $file = $file.clone( true ) );
				$file.trigger('change');
				$input.val('');
			} else if ( e.which === 9 ){ // TAB
				return;
			} else { // All other keys
				return false;
			}
			}
		});

		});

	};

	// Old browser fallback
	if ( !multipleSupport ) {
		$( document ).on('change', 'input.customfile', function() {

		var $this = $(this),
			// Create a unique ID so we
			// can attach the label to the input
			uniqId = 'customfile_'+ (new Date()).getTime(),
			$wrap = $this.parent(),

			// Filter empty input
			$inputs = $wrap.siblings().find('.file-upload-input')
				.filter(function(){ return !this.value }),

			$file = $('<input type="file" id="'+ uniqId +'" name="'+ $this.attr('name') +'"/>');

		// 1ms timeout so it runs after all other events
		// that modify the value have triggered
		setTimeout(function() {
			// Add a new input
			if ( $this.val() ) {
			// Check for empty fields to prevent
			// creating new inputs when changing files
			if ( !$inputs.length ) {
				$wrap.after( $file );
				$file.customFile();
			}
			// Remove and reorganize inputs
			} else {
			$inputs.parent().remove();
			// Move the input so it's always last on the list
			$wrap.appendTo( $wrap.parent() );
			$wrap.find('input').focus();
			}
		}, 1);

		});
	}

	}(jQuery));

	$('input[type=file]').customFile();



// —————————————————————————————————————————————————————————————————

});