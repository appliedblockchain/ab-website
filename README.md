# Applied Blockchain Website



## Introduction
* Jekyll and liquid
* SASS
* BEM



## Page structure

### Components
* Page header
* Section header

### Section system
The whole website is build around a section system. Each page is divided in sections, which obey several rules (rephrase):
* if two sister sections have the same background color, add the class `section--alt` to the second one. This will narrow the padding between the two of them
```html
<section class="section section--primary">
    <!-- content -->
</section>
<section class="section section--alt section--primary">
    <!-- content -->
</section>
```
* Other rule
* List of types

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
> The logo in the about section will link itself automatically, provided the image has the same name as the project page
* If there is a quote, add it in `_data/testimonials.yml` under the project's page name, and add the portrait in the `resources/images/testimonials` folder;
```yml
name-of-project:
  - id: name-of-person
    quote: Lorem ipsum dolor sit amet.
    name: Name of Person
    job: Title, Company  
```
> The portrait will link itself automatically, provided the image has the same id as the quote

### Edit project
* Explain markdown for content in .md file ('<p>' tag used spacing the paragraphs)
* Logo (path and name)
    * Pay attention to clients and clients-alt folders
    * if doesn't work: check file extension (needs to be jpeg)
    * Logo size 
* Testimonials (take testimonial component and filter by slug [page title])

### Featured projects
To add a project to the **featured** section of the **Case Studies** page, simply add `tag: featured` to the values of the page. It will look like this
```
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
