# Applied Blockchain Website
[Introduction](#introduction)

[Page structure](#page-structure)

[Add project](#add-project)

[Add job](#add-job)

[Add event](#add-event)

[Add blog post](#add-blog-post)



***
### Introduction

#### Getting started
* Install [Jekyll](https://jekyllrb.com/)
```
gem install bundler jekyll
jekyll new my-awesome-site
cd my-awesome-site
```
* Run the website in development mode
```
bundle exec jekyll serve
```
> Local URL: [localhost:4000](http://localhost:4000)
> Test URL: [next.appliedblockchain.com](https://next.appliedblockchain.com/)

#### Comments
Along with SASS, this project is based on the BEM markdown. To learn more about BEM:
* [bem.info](https://en.bem.info/methodology/quick-start/)
* [getbem.com](http://getbem.com/introduction/)



***
### Page structure
Every page is build on the same structure:
* They are divided in [sections](#section-system), representing each part of the page
* The page and section headers are [components](#components), ensuring that they will have the same structure throughout the whole website
* Horizontally, elements are sometimes distributed using a bootstrap like [column system](#column-system)
```html
{% include header.html %}

<div class="page" id="ID_OF_PAGE">

    {% include components/page-header.html
        HERE YOU CAN ADD THE VARIABLES
    %}

    <section class="section">

        {% include components/section-header.html
            HERE YOU CAN ADD THE VARIABLES
        %}

        <div class="section__content">
            <div class="row">
                <div class="col--4"></div>
                <div class="col--8"></div>
            </div>
        </div>

    </section>
    <!-- repeat section if needed -->

</div>

{% include footer.html %}
```

#### Section system

##### Section types
Add these classes to customise them:

| Class                   | Description |
| ----------------------- | ----------------------- |
| `section--col`          | divide by two the left and right padding of the section |
| `section--alt`          | Remove the top padding of a section; used when too sisters section have the same background color |
| `section--fullwidth`    | Fullwidth section |
| `section--nopadding`    | Remove all paddings (e.g. **grid section** of the [Projects](https://appliedblockchain.com/case-studies/) page) |
| `section--margin-minus` | Add a negative margin top to the section to make them overlap (e.g. **why us section** of the [Homepage](https://appliedblockchain.com/)) |

##### Section colors
Change the background color of a section (default is white) using `.section--primary`, `.section--dark` or `.section--grey`.

##### Section alignement
Left or rifght align the text and content of a section (default is centered aligned) using `.section--left` or `.section--right`.

#### Components
The components are located in the `_data` folder. They were created to ensure that every iteration has the same structure, and that it will be easy to edit it. Each of them has a set of attributes.
> if you want one attribute not to appear, simply delete the line.

##### Page header
```
{% include components/page-header.html
        background-color=''
        title='Page Title'
        description='Lorem ipsum dolor sit amet.'
        comment=''
%}
```
The page header is used once on a page, at the very beginning.

###### Background imnage in page header
* Add image in `resources/images/background` folder
* Same name as page, jpg format
* Add `background-image=''` to component
* Set `background-color=''` for gradient color

##### Section header
```
{% include components/section-header.html
    comment='Lorem ipsum'
    title='Section Title'
    description='Lorem ipsum dolor sit amet.'
%}
```

#### Column system
If needed, elements can be layed out horizontally using a [bootstrap](https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp) like column system. It as based on a 12 column structure. You can add prefixes to the number to set up the responsive behaviour of each column.
```html
<div class="row">
    <div class="col--lg3 col--md4"></div>
    <div class="col--lg7 col--md8"></div>
    <div class="col--lg2 col--md12"></div>
</div>
```
> See the `resources/sass/partials/_structure.html`for reference.



***
### Add project

* In the `_projects` folder, create a new file, named after the client
* Copy this code in the file
```yml
---
layout: project
tag: 

title: 
subtitle: 
industry: 
deliverables: 

summary:

challenge: 

delivery: 

results: 

results-content: 

results-comment: 

testimonial-id: 
testimonial-quote: 
testimonial-name: 
testimonial-job: 
---
```
* Fill in the tags according layout (if you don't understand where they are displayed, [here is an example](https://appliedblockchain.com/projects/cygnetise/))
* Add the company logo in the `resources/images/logos/clients` folder;
> The logo in the about section will link itself automatically, provided the image has the same **title** as the project page

##### Additionnal comments
* Add `tag: featured` to the project to feature it
* Add `tag: grid` to the project to place it on the last line
* If the logo doesn't appear, check the file extension.
* The logo needs to be 800x400px



<!-- ## FAQ -->



***
### Add job

* Open the `jobs.yml` file in `_data` folder
* Copy/paste this code in the section you want it to appear (London or Porto) and fill the content
```yml
  - title: 
    type: 
    role: 
    required-skills: 
    additional-skills:
```



***
### Add event
* Open the `events.yml` file in `_data` folder
* Copy/paste this code and fill the content
```yml
- name: 
  image: #image file name > use a slugged version of the name
  date-from: #use this one only if the event is spanned on several days
  date: #'YYYY-MM-DD'
  location: #venue, city, country
  directions: #Google maps link
  link: #link to the event website
```
> Use the YYYY-MM-DD format for the date, it will automatically be displayed in the right format on the website
* Add the corresponding image in `resources/images/events`
    * If doesn't work: check file extension (needs to be jpeg)
    * File cannot be over 1000 px wide and 100 KB
    * If you don't have an image, leave the `image:` tag empty, a default image is set.



***
### Add blog post
* Create a new file in the `_posts` folder
* Name the file with a slugged version of the title, preceded by the date of the post
> If the title is `Blockchain as a Database`, it becomes `YYYY-MM-DD-blockchain-as-a-database`
* Copy/paste this code in the file and fill the content
```yml
---
layout: post
title: 
image: #image file name > use a slugged version of the title
category: #blog / press-release / news
link: #add if an external news or a medium post
headline: 
---
# HTML CONTENT OF THE POST (only for local posts; not for external news or medium posts)
```
> the corresponding category for **any** Medium post is `blog`
> the corresponding category for **any** external news post is `news`
* Add the corresponding image in `resources/images/posts`
    * If doesn't work: check file extension (needs to be jpeg)
    * File cannot be over 1000 px wide and 100 KB
    * If you don't have an image, leave the `image:` tag empty, a default image is set.

#### Post content html structure
```html
<p class="post__title">This a title</p>

<p class="post__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a lacus tristique enim consequat fringilla. Donec ultrices vitae nisl sit amet blandit.<a href="http://www.multichain.com/" target="_blank">Duis dignissim rutrum sollicitudin</a>.</p>
<p class="post__content">Aliquam volutpat diam diam, in eleifend urna posuere sit amet. Integer vitae augue a felis tempor commodo pulvinar quis sapien. Phasellus scelerisque lacus eu neque rhoncus, vel hendrerit urna eleifend.</p>

<p class="post__title">This is another title</p>

<p class="post__subtitle">This is a subtitle</p>
<p class="post__content">Vestibulum posuere ac justo eu interdum. Nunc ex lacus, feugiat a ultrices in, efficitur et mauris. Maecenas eu ex eu mauris venenatis tempus in quis lacus.</p>
<p class="post__quote">This is a quote</p>
```
> For every new paragraph, open a new `<p>` tag with the `post__content` class

![Blog structure](resources/images/github/post.jpg)



<!-- ## General queries

#### Logo and menu icon color on landing
If the `page-header.html` of a page is set to `background='primary'` or `background='dark'`, the logo and menu icon colors change.
To do so, go to `_layouts/header.html` and add the page title to the condition in the class selector.
```html
<div class="header__bar">
    <div class="header__logo {% if page.title == 'Name of the page'  or page.title == 'Name of other page' %}alt{% endif %}">
        {% include components/logo-header.html %}
    </div>
    <a class="header__button button button--menu {% if page.title == 'Name of the page'  or page.title == 'Name of other page' %}alt{% endif %}">
        <span class="button__inner"></span>
    </a>
</div>
```
* If set to `background='primary'`, both the **logo and menu icon** change.
* If set to `background='dark'`, only the **menu icon** changes.

* An image diesn't appear
    * Check file extension

#### Logo carousels
* image size, difference between regular and alt version -->