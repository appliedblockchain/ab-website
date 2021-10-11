# Applied Blockchain Website
- [Introduction](#introduction)
  - [Getting started](#getting-started)
  - [Dependencies & Methodology](#comments)
- [Deployment](#deployment)
- [Page structure](#page-structure)
  - [Section system](#section-system)
  - [Components](#components)
  - [Grid system](#grid-system)
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

Jekyll is a Ruby Gem that can be installed on most systems.
[installation manual](https://jekyllrb.com/docs/installation/)

#### Run the website in development mode

```
jekyll serve
```
> Local URL: [localhost:4000](http://localhost:4000)

### Dependencies & Methodologies

#### SASS

Styling is powered with Sass, a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
Style files are located in the assets/_sass folder. You don't need to run any additional command to compile, it does it automatically with `jekyll serve`
- [Install Sass](https://sass-lang.com/install)

#### BEM Markdown

Along with SASS, the CSS styles are based on BEM terminology.
- [bem.info](https://en.bem.info/methodology/quick-start/)
- [getbem.com](http://getbem.com/introduction/)

### Plugins

the plugins used can be found in the `Gemfile` file, under `group :jekyll_plugins do` (except from Compress who is used as a layout). If any, you can change the plugins settings in `_config.yml`.

#### Autoprefixer

This plugin provides simple autoprefixer support for Jekyll.
[Documentation](https://github.com/vwochnik/jekyll-autoprefixer)

#### Cofeescript

Used for the built-in support of Sass.
[Documentation](https://jekyllrb.com/docs/assets/)

#### Compress

A Jekyll layout that compresses HTML.
[Documentation](http://jch.penibelst.de/)

#### Jekyll Inline SVG

SVG optimizer and inliner for jekyll.
[Documentation](https://github.com/sdumetz/jekyll-inline-svg)

### Jekyll menus

A robust, simple-to-use menu plugin for Jekyll that allows for infinitely nested menus.

[Documentation](https://github.com/forestryio/jekyll-menus)

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Deployment

The deployment process is run throught Netlify.

| Environment | Branch | URL |
| --- | --- | --- |
| Staging | staging | [beta.appliedblockchain.com](https://beta.appliedblockchain.com/) |
| Production | master | [appliedblockchain.com](https://appliedblockchain.com/) |

> Even small text changes can have a graphical impact on the look of the website. Carefully check any changes you make on staging.

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Page structure

- You only need to concern yourself with the content of the page. The page header and footer are built-in, ensuring their consistency throughout the whole website.
- Elements are layed out using a [grid system](#grid-system).

### Sections

Each page is divided in sections (usually differenciated by background colours). They should all have this structure:

```html
<section class="section">
  <div class="section__container">
    {% include components/sectionHeader.html
      label = "Use case"
      title = "Applied Blockchain"
      subtitle = "We build applications with added trust and data privacy"
    %}
    <div class="section__content">
      <!-- add your code -->
    </div>
  </div>
</section>
<!-- repeat if needed -->
```

#### Section header

The `sectionHeader` is a built-in component, to ensure styling consistency. Here are its properties.

| Prop | Value | Description |
| --- | --- |
| `label` | `string` | |
| `title` | `string` | |
| `subtitle` | `string` | |
| `size` | `sm`, `md` | `md` is the default value, use `sm` for subheaders |

#### Variants

Add the following classes to the section elements to use each variant.

| Class | Description |
| --- | --- |
| `section--fullWidth` | Fullwidth section |

#### Background colors

Add the following classes to change a section's background color (by default is white).

| Class | Description |
| --- | --- |
| `section--primary` | Blue (primary color) background |
| `section--grey` | light grey background |

### Components

The components are located in the `_include` folder. They were created to ensure that every iteration has the same structure, and that it will be easy to edit it. Each of them has a set of attributes.

> if you want an attribute not to appear, delete the line

### Grid system

The website uses a css grid system, based on a twelve column structure. You can add breakpoint prefixes to the column number for responsive behaviour of each column.

| Class | Description |
| --- | --- |
| `grid__wrapper` | The parent component |
| `grid__spacing--X` | X can be a value between 1 and 12. It defines the vertical and horizontal spacing between children |
| `grid__item` | The child component. Children can be both **items** and **wrappers** |
| `grid__item--X` | X can be a value between 1 and 12. It defines the width of the child element |

```html
<div class="grid__wrapper grid__spacing--2">
  <div class="grid__item grid__item--xl6">
  <div class="grid__item grid__item--lg3 grid__item--md4"></div>
  <div class="grid__item grid__item--lg7 grid__item--md8"></div>
  <div class="grid__item grid__item--lg2 grid__item--md12"></div>
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
title: # this will appear as the page header and the html header in the browser tab
headline: # [optional] overrides the page header
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
summary: # longer description of the company/project
link: # [optionnal] external link to company website (or other)
link_title: # [optionnal] # overrides default link title
background_color: white # do not change

deliverables: 

challenge-diagram: 
challenge: 
  - lead: 
  - paragraph: 
  - paragraph: 
  # etc.

delivery:
  - item:
    - paragraph: 
    - paragraph: 
    # etc.
  - item:
    - paragraph: 
    # etc.

results:
  - paragraph: 
  - paragraph: 
  # etc.
results-icons:
  - image: 
    title: 
  - image: 
    title: 
  # etc.

testimonial:
  - quote: 
    author: 
    position: 
    company: 
---
```
- [Here is an example](https://appliedblockchain.com/projects/appii/) of how each is displayed.
- Add logo in the `assets/images/carousel/clients_color` folder.
> Png format. No white space around the logo. File name should be the same as the .md file

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
    # etc.
  required-skills:
    - li: ''
    - li: ''
    # etc.
  additional-skills:
    - li: ''
    - li: ''
    # etc.
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
- Add the corresponding image in `assets/images/events`.
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
- If the news is internal, use [markdown terminology](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to write the article and it will create the styling automoatically.

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

---

### [LICENSE](https://github.com/appliedblockchain/ab-website/blob/master/LICENSE)