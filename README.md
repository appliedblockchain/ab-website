# Applied Blockchain Website
* [Introduction](#introduction)
* [Page structure](#page-structure)
* [Projects](#projects)



## Introduction
* Jekyll and liquid
* SASS
* BEM



## Page structure
Every page is build on the same structure:
```html
{% include header.html %}

<div class="page">

    {% include components/page-header.html
        background-color=''
        title='Page Title'
        description='Lorem ipsum dolor sit amet.'
    %}

    <section class="section">

        {% include components/section-header.html
            title='Section Title'
            description='Lorem ipsum dolor sit amet.'
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
* They are divided in [sections](#section-system), representing each part of the page;
* the page and section headers are [components](#components), ensuring that they will have the same structure throughout the whole website;
* Horizontally, elements are sometimes distributed using a bootstrap like [column system](#column-system).

### Section system
Each page is divided in sections.
#### Section types
Add these classes to customize the section:
* if two sister sections have the same background color, add `section--alt` to the second one;
```html
<section class="section section--primary">
    <!-- content -->
</section>
<section class="section section--alt section--primary">
    <!-- content -->
</section>
```
* Create a fullwidth section `section--fullwidth`;
* if your section is a block component (e.g. the **investor section** of the [About](http://next.appliedblockchain.com/about/) page `section--block`;
* remove all paddings (e.g. **grid section** of the [Case studies](http://next.appliedblockchain.com/case-studies/) page) `section--nopadding`.
#### Section colors
* Change the background color of a section (default is white) `.section--primary`, `.section--dark` or `.section--grey`.
#### Section alignement
* Left or rifght align the text and content of a section (default is centered aligned) `.section--left` or `.section--class`.

### Components
* Page header
* Section header

### Column system

### Logo and menu icon color on landing
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



## Projects

### Add project
* In the `_projects` folder, duplicate a project;
* Rename the file in lowercase, using the name of the project/client for reference;
* Fill in the tags according to the case study layout (if you don't understand where they are displayed, [here is an example](http://next.appliedblockchain.com/project/cygnetise/))
* Add the company logo in the `resources/images/logos/clients-alt` folder;
> The logo in the about section will link itself automatically, provided the image has the same **title** as the project page
* If there is a quote, add it in `_data/testimonials.yml` under the project's page title, and add the portrait in the `resources/images/testimonials` folder;
```yml
title-of-project:
  - id: name-of-person
    quote: Lorem ipsum dolor sit amet.
    name: Name of Person
    job: Title, Company  
```
> The portrait will link itself automatically, provided the image has the same **id** as the quote

### Edit project
* Explain markdown for content in .md file ('<p>' tag used spacing the paragraphs)
* Logo (path and name)
    * Pay attention to clients and clients-alt folders
    * if doesn't work: check file extension (needs to be jpeg)
    * Logo size 
* Testimonials (take testimonial component and filter by slug [page title])

### Featured projects
To add a project to the **featured** section of the **Case Studies** page, simply add `tag: featured` to the values of the page. It will look like this
```yml
---
layout: project
tag: featured
title: Title of project
subtitle: Lorem ipsum dolor sit amet 
industry: 
technology: 
summary: 
---
```



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



## General queries
* An image diesn't appear
    * Check file extension
