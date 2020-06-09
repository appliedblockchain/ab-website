# Applied Blockchain Website
* [Introduction](#introduction)
  * [Getting started](#getting-started)
  * [Dependencies & Methodology](#comments)
* [Deployment](#deployment)
* [Page structure](#page-structure)
  * [Section system](#section-system)
  * [Components](#components)
  * [Column system](#column-system)
* [Create page](#create-page)  
* [Add image to carousel](#add-image-to-carousel)
* [Add testimonial to homepage](#add-testimonial-to-homepage)
* [Add project](#add-project)
* [Add job](#add-job)
  * [Content YML structure](#content-yml-structure)
* [Add event](#add-event)
* [Add blog post](#add-blog-post)
  * [Content HTML structure](#content-html-structure)

<!------------------------------------------------------>

## Introduction

### Getting started
#### Install [Jekyll](https://jekyllrb.com/)
```
gem install bundler jekyll
```
#### Run the website in development mode
```
bundle exec jekyll serve
```
> Local URL: [localhost:4000](http://localhost:4000)

### Dependencies & Methodologies

#### SASS & Compass
Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
* [Install Sass](https://sass-lang.com/install)
* [Install Compass](http://compass-style.org/install/)

#### BEM Markdown
Along with SASS, the CSS styles are based on BEM terminology.
* [bem.info](https://en.bem.info/methodology/quick-start/)
* [getbem.com](http://getbem.com/introduction/)


<!------------------------------------------------------>

## Deployment

The deployment process is run throught Netlify.

### Staging environment
| Branch | staging |
| URL    | [beta.appliedblockchain.com](https://beta.appliedblockchain.com/) |

### Production environment
| Branch | master |
| URL    | [appliedblockchain.com](https://appliedblockchain.com/) |

> Even small text changes can have a graphical impact on the look of the website. Carefully check any changes you make on the content.

<!------------------------------------------------------>

## Page structure
Every page is build on the same structure:
* They are divided in [sections](#section-system), representing each part of the page
* The page and section headers are [components](#components), ensuring that they will have the same structure throughout the whole website
* Horizontally, elements are sometimes distributed using a bootstrap like [column system](#column-system)
```html
{% include containers/site/header.html %}

<div class="page" id="ID_OF_PAGE">

    {% include components/page-header.html
        HERE YOU CAN ADD THE VARIABLES
    %}

    <section class="section">

        {% include containers/sections/header.html
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

{% include containers/site/footer.html %}
```

### Section system

#### Section types
Add these classes to customise them:

| Class                 | Description |
| --------------------- | ----------------------- |
| `section--alt`        | Divide left and right padding by two |
| `section--full`       | Fullwidth section |
| `section--overlap`    | Add a negative margin top to the section to make them overlap |

#### Section colors
Change the background color of a section (default is white) using `.section--primary`, `.section--dark` or `.section--grey`.

### Components
The components are located in the `_include` folder. They were created to ensure that every iteration has the same structure, and that it will be easy to edit it. Each of them has a set of attributes.
> if you want one attribute not to appear, simply delete the line

#### Section header
```
{% include containers/sections/header.html
    comment = 'Lorem ipsum'
    title = 'Section title'
    subtitle = 'Section subitle'
    description = 'Lorem ipsum dolor sit amet.'
%}
```

### Column system
If needed, elements can be layed out horizontally using a [bootstrap](https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp) like column system. It as based on a 12 column structure. You can add prefixes to the number to set up the responsive behaviour of each column.
```html
<div class="row">
    <div class="col--lg3 col--md4"></div>
    <div class="col--lg7 col--md8"></div>
    <div class="col--lg2 col--md12"></div>
</div>
```

<!------------------------------------------------------>

## Create page

- Create a .html file at the root of the website, with the name of the new page.
- Copy/paste the following code in the file
```yml
layout: default # do not edit
title: # this will appear as the screen header and the html header in the browser tab
headline: # [optional] overrides the screen header
subtitle: # [optional]
background_color: white # do not edit
```
- Start coding the page content

<!------------------------------------------------------>

## Add project

* In the `_projects` folder, create a new .md file
* Name it with a slugified version of the client name (e.g. Lloyd's register becomes lloyd-s-register.md)
* Copy/paste the code below and fill it accordingly
* [Here is an example](https://appliedblockchain.com/projects/appii/) of how each is displayed

```yml
---
layout: project # do not edit
order: # number, specify the order it will appear on the projects page
case_study: true # add if the project has a standalone page
title: # company name
subtitle: # short project/deliverable description
industry: 
deliverables: 
summary: # longer description of the company/project
link: # [optionnal] external link to company website (or other)
link_title: # [optionnal] # overrides default link title
background_color: white # do not edit

challenge-diagram: 
challenge: 
    - lead: 
    - paragraph: 
    - paragraph: 

delivery:
    - item:
        - paragraph: 
        - paragraph: 

results:
    - paragraph: 
    - paragraph: 
results-icons:
    - image: 
      title: 

testimonial:
    - quote: 
      author: 
      position: 
      company: 
---
```

* Add logo in the `resources/images/carousel/clients_projects` folder
> Png format
> No white space around the logo
> File name should be the same as the .md file

<!------------------------------------------------------>

## Add job

* Open the `jobs.yml` file in `_data` folder
* Copy/paste this code in the section you want it to appear (London or Porto) and fill the content
```yml
  - title: 
    type: 
    role:  #see below for html structure
        ``
    responsabilities:  #see below for html structure
        ``
    required-skills: #see below for html structure
        ``
    additional-skills: #see below for html structure
        ``
```
### Content YML structure
* The content of each tag will be inserted between single quotes. This ensures the HTML to be read correctly by Jekyll.
* Each paragraph in the **role** section will be created by adding the `<br><br>` tag after each paragraph
```yml
    role: 
      'Lorem ipsum dolor sit amet.
      <br><br>Consectetur adipiscing elit.
      <br><br>Curabitur ultricies vitae odio sit amet rhoncus.'
```
* For the **responsabilities**, **required-skills** and **additional-skills** content, each line will be determimed by a `<li>` tag.
```yml
    responsabilities:
        '<li>Lorem ipsum dolor sit amet.</li>
        <li>Consectetur adipiscing elit.</li>
        <li>Curabitur ultricies vitae odio sit amet rhoncus.'</li>
```

<!------------------------------------------------------>

## Add event
* Open the `events.yml` file in `_data` folder
* Copy/paste this code and fill the content
```yml
- name: 
  image: #image file name > use a slugged version of the name
  date: #use this one only if the event is spanned on several days
  date_to: #'YYYY-MM-DD'
  location: #venue, city, country
  directions: #Google maps link
  link: #link to the event website
```
> Use the YYYY-MM-DD format for the date, it will automatically be displayed in the right format on the website
* Add the corresponding image in `resources/images/events`
    * If doesn't work: check file extension (needs to be `.jpg`)
    * File cannot be over 800 px wide and 100 KB
    * If you don't have an image, leave the `image:` tag empty, a default image is set.

<!------------------------------------------------------>

## Add blog post
* Create a new file in the `_posts` folder
* Name the file with a slugged version of the title, preceded by the date of the post
> If the title is `Blockchain as a Database`, it becomes `YYYY-MM-DD-blockchain-as-a-database`
* Copy/paste this code in the file and fill the content
```yml
---
layout: post
title: 
image: #image file name > use a slugged version of the title; remove if no image
category: #blog / press-release / news
dlc: true #add for PRESS RELEASES if there is a press kit 
social: #linkedin / medium
link: #add if an external news or a medium post
headline: 
---
```

<!------------------------------------------------------>

## [LICENSE](https://github.com/appliedblockchain/ab-website/blob/master/LICENSE)