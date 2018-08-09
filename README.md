# ab-website

## Page structure
### Components
* Page header
* Section header
### Column system

## FAQ

## Jobs
### Add a job
### Edit a job
* explain list system

## Blog posts
* file name convention
* file name = url link in file
* image (path and name)
    * if doesn't work: check file extension (needs to be jpeg)
    * default image (explanation)
### Add a blog post
### Edit a blog post

## Events
### Add an events
### Edit an events
* image (path and name)
    * if doesn't work: check file extension (needs to be jpeg)
    * default image (explanation)

## Projects
### Add project
### Edit project
* Explain markdown for content in .md file ('<p>' tag used spacing the paragraphs)
* Logo (path and name)
    * Pay attention to clients and clients-alt folders
    * if doesn't work: check file extension (needs to be jpeg)
    * Logo size 
* Testimonials (take testimonial component and filter by slug [page title])

## General queries
* An image diesn't appear
    * Check file extension

### Logo color on landing

If the landing section of a page is set to `background='primary'` or `'background='dark'`, the logo and menu icon colors change.

To do so, go to `header.html` and add the page title to the condition in the class selector.
```
<div class="header__bar">
    <div class="header__logo {% if page.title == 'Name of the page'  or page.title == 'Name of other page' %}alt{% endif %}">
        {% include components/logo-header.html %}
    </div>
    <a class="header__button button button--menu {% if page.title == 'Name of the page'  or page.title == 'Name of other page' %}alt{% endif %}">
        <span class="button__inner"></span>
    </a>
</div>
```