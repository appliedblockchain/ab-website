# Applied Blockchain Website
- [Introduction](#introduction)
  - [Getting started](#getting-started)
  - [Dependencies & Methodology](#comments)
- [Deployment](#deployment)
- [Page structure](#page-structure)
  - [Section system](#section-system)
  - [Components](#components)
  - [Column system](#column-system)
- [Create page](#create-page)  
- [Create project](#create-project)
- [Create job](#create-job)
- [Create event](#create-event)
- [Create blog post](#create-blog-post)

<!------------------------------------------------------>
<p>&nbsp;</p>
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
- [Install Sass](https://sass-lang.com/install)
- [Install Compass](http://compass-style.org/install/)

#### BEM Markdown

Along with SASS, the CSS styles are based on BEM terminology.
- [bem.info](https://en.bem.info/methodology/quick-start/)
- [getbem.com](http://getbem.com/introduction/)


<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Deployment

The deployment process is run throught Netlify.

| Environment | Branch | URL |
| --- | --- | --- |
| Staging | staging | [beta.appliedblockchain.com](https://beta.appliedblockchain.com/) |
| Production | master | [appliedblockchain.com](https://appliedblockchain.com/) |

> Even small text changes can have a graphical impact on the look of the website. Carefully check any changes you make on the content.

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Page structure

- You only need to concern yourself woth the content of the page, the page header and footer are built in the layout, ensuring their consistency throughout the whole website.
- Each page is divided in sections (usually differenciated by background colours).
- Elements are layed out using a bootstrap like [column system](#column-system).
```html
<section class="section">
    {% include containers/sections/header.html
        title = ''
        subtitle = ''
        body = ''
    %}
    <div class="section__content">
        <!-- add your code -->
    </div>
</section>
<!-- repeat section if needed -->
```

### Section system

#### Section types

| Class | Description |
| --- | --- |
| `section--alt` | Divide left and right padding by two |
| `section--full` | Fullwidth section |
| `section--overlap` | Add a negative margin top to the section to make them overlap |

#### Section colors

Change the background color of a section (default is white) using `section--primary`, `section--dark` or `section--grey`.

### Components

The components are located in the `_include` folder. They were created to ensure that every iteration has the same structure, and that it will be easy to edit it. Each of them has a set of attributes.
> if you want one attribute not to appear, delete the line

#### Section header

```html
{% include containers/sections/header.html
    comment = 'Lorem ipsum'
    title = 'Section title'
    subtitle = 'Section subitle'
    description = 'Lorem ipsum dolor sit amet.'
%}
```

### Column system

The website uses a [bootstrap](https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp) like column system. It as based on a twelve column structure. You can add prefixes to the number to set up the responsive behaviour of each column.
```html
<div class="row">
    <div class="col--lg3 col--md4"></div>
    <div class="col--lg7 col--md8"></div>
    <div class="col--lg2 col--md12"></div>
</div>
```

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Create page

- Create a .html file at the root of the website, with the name of the new page.
- Copy/paste the following code in the file.
```yml
---
layout: default # do not change
title: # this will appear as the screen header and the html header in the browser tab
headline: # [optional] overrides the screen header
subtitle: # [optional]
background_color: white # do not change
---
```
- Start coding your HTML content below this snippet.

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Create project

- In the `_projects` folder, create a new .md file.
- Name it with a slugified version of the client name (e.g. Lloyd's register becomes `lloyd-s-register.md`).
- Copy/paste the code below and fill it accordingly.
```yml
---
layout: project # do not change
order: # number, specify the order it will appear on the projects page
case_study: true # add if the project has a standalone page
title: # company name
subtitle: # short project/deliverable description
industry: 
deliverables: 
summary: # longer description of the company/project
link: # [optionnal] external link to company website (or other)
link_title: # [optionnal] # overrides default link title
background_color: white # do not change

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
- [Here is an example](https://appliedblockchain.com/projects/appii/) of how each is displayed.
- Add logo in the `resources/images/carousel/clients_projects` folder.
> Png format
> No white space around the logo
> File name should be the same as the .md file

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Create job

- Open the `jobs.yml` file in `_data` folder.
- Copy/paste this code in the section you want it to appear (London or Porto) and fill the content.
```yml
  - title: 
    type: 
    responsabilities:
      - li: ''
      - li: ''
      # etc…
    required-skills:
      - li: ''
      - li: ''
      # etc…
    additional-skills:
      - li: ''
      - li: ''
      # etc…
```
- The content of each tag must be inside single quotes. This ensures the HTML to be read correctly by Jekyll.
- Each new line is set by a `- li:` tag.

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Create event

- Open the `events.yml` file in `_data` folder.
- Copy/paste this code and fill the content.
```yml
- name: 
  image:  #image file name > use a slugify version of the name
  date: YYYY-MM-DD
  date_to: # use if the event is longer than a day
  location: # [if relevant] venue, city, country
  directions: # [if relevant] Google Maps link
  link: # link to the event website
```
> Use the YYYY-MM-DD format for the date, it will automatically be displayed in the right format on the website
- Add the corresponding image in `resources/images/events`.
  - If doesn't work: check file extension (needs to be `.jpg`).
  - File cannot be over 800 px wide and 100 KB.
  - If you don't have an image, leave the `image:` tag empty, a default image is set.

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Create blog post

- Create a new file in the `_posts` folder.
- Name the file with a slugged version of the title, preceded by the date of the post.
> If the title is `Blockchain as a Database`, it becomes `YYYY-MM-DD-blockchain-as-a-database`
- Copy/paste this code in the file and fill the content
```yml
---
layout: post
title: 
image: # image file name > use a slugify version of the title, remove if no image
category: # blog / press-release / news / videos
dlc: true # add for PRESS RELEASES if there is a press kit 
social: # linkedin / medium
link: # if news is external
headline: # introduction text
---
```
- If the news is internal, use [markdown terminology](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to write the article and it will display automatically.

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

---

## [LICENSE](https://github.com/appliedblockchain/ab-website/blob/master/LICENSE)