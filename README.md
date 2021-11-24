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
- [Create post](#create-post)
- [Create project](#create-project)
- [Create event](#create-event)
- [Add search to page](#add-search-to-page)

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

#### Jekyll menus

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

### Page front matter

The front matter are the lines found at the top of each page between the `---` lines. Here are all the options used to customise the layout and information of a page

```yml
---
layout: "default"
title: "Home"
headline: "Optionnal override for page title"
subtitle: "Optionnal short sentence describing the page in more depth"
background_image: example.jpg
banner_image: example2.jpg
banner_color: "primary"
links:
  - label: "Back to homepage"
    url: "index"
    title: "Go to homepage"
menus:
  header:
    weight: 6
---
```

| Parameter | Values | Description |
| --- | --- | --- |
| `layout` | `default`, `index`, `post`, `project`, `webinar` | |
| `title` | string | The page title. Used for the title on the page **and** the HTML title tag (that appears on the browser tabs) |
| `headline` | string | Optionnal. Add if you want the title on the page to be different from the HTML title tag |
| `subtitle` | string | Optionnal. Short sentence describing the page in more depth |
| `background_image` | string | Add a background image to **the entire page**. Put the image in `assets/images/background` |
| `banner_image` | string | Add a background image to **the page header page** |
| `banner_color` | `primary`, `dark`, `white`, `grey` | Change the page header background (or gradient) color. The default value is primary |
| `links` | | Adds buttons in the page header |
| `tabs` | string | Add automatic tabs to the page header. The value indicates the file containing the tabs values in the _data folder (see [blog](https://appliedblockchain.com/blog) for example) |
| `menus` | | Set which menus the page appears in. See [Jekyll menus](#jekyll-menus) for more information |

### Sections

Each page is divided in sections (usually differenciated by background colours). They should all have this structure:

```html
<div class="section">
  <div class="section__container">
    {% include components/section-header.html
      label = "Use case"
      title = "Applied Blockchain"
      subtitle = "We build applications with added trust and data privacy"
    %}
    <div class="section__content">
      <!-- add your code -->
    </div>
  </div>
</div>
<!-- repeat if needed -->
```

#### Variants

Add the following classes to the section elements to use each variant.

| Class | Description |
| --- | --- |
| `section--fullWidth` | removes padding left and right |
| `section--maxWidth` | sets max-width: 600px for `section__header` and `section__content` |
| `section--tabs` | variant used for pages with tabs in the section header (e.g [blog](https://appliedblockchain.com/blog)) |

#### Background color

Add the following classes to change a section's background color (by default is white).

| Class | Description |
| --- | --- |
| `section--primary` | Blue (primary color) background |
| `section--grey` | light grey background |

#### Section header

The `section-header` is a built-in component, to ensure styling consistency. Here are its properties.

| Prop | Value | Description |
| --- | --- | --- |
| `class` | string | Add more class to the component to change the styling |
| `size` | `sm`, `md` | `md` is the default value, use `sm` for subheaders |
| `label` | string | |
| `title` | string | |
| `subtitle` | string | |
| `body` | string | |
| `link_type` | `external` | Use that value to for an external link (adds an icon to the button and bypass jekyll link validation |
| `link_label` | string | Button label |
| `link_collection` | `_posts_`, `_reports`, `_webinars`, `_events`, | Use if you want to link to an item in a collection (i.e. a blog post, a report, etc. ). Reference the folder name of the collection |
| `link_url` | string | Sets the URL. if not an external link. it needs to be the page file name without the file extension |
| `link_title` | string | For SEO |
| `link_color` | `primary`, `secondary`, `white`, `black`, `grey`, `success`, `info`, `warning`, `error`, `facebook`, `github`, `linkedin`, `medium`, `twitter` | Sets the button color |

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

### Instructions

- Create a .html file at the root of the website, with the name of the new page.
- Copy/paste the following code in the file.

```yml
---
layout: "default"
title: ""
subtitle: ""
# banner_image: ""
# banner_color: ""
# links: 
#   - label: ""
#     url: ""
#     title: ""
#     color: ""
menus: 

# side_content: ""
---
```

- Start coding your HTML content below this snippet.

### Parameters

| Parameter | Values | Description |
| --- | --- | --- |
| `layout` | `default` | Do not edit! Defines which layout to use |
| `title` | string | The page title, which appears on the page **and** the HTML title tag (that appears on the browser tabs) |
| `headline` | string | Optionnal. Overrides the page title displayed on the page if you want a different one than the HTML page title |
| `subtitle` | string | Short introductory text |
| `banner_image` | string | Place the image in `assets/images/background` folder and  write the name here, with the file extension |
| `banner_color` | `white`, `grey`, `primary`, `primary-light`, `primary-dark`, `secondary`, `dark` | Overrides the page header background color |
| `links` | node | Add buttons below the subtitle |
| `link.label` | string | |
| `link.url` | string | Link URL. Can only be internal for now, write the page file name without the extension |
| `link.title` | string | Link title for SEO |
| `link.color` | `primary`, `secondary`, `white`, `black`, `grey`, `success`, `info`, `warning`, `error`, `facebook`, `github`, `linkedin`, `medium`, `twitter` | Sets the button color |
| `menus` | node | Sets which menus to add the page to. See [Jekyll menus](#jekyll-menus) for more info |
| `side_content` | string | If the page header has some overlapping content on the side, create a component in the `_includes` folder and refereence it here |

Here is an example

```yml
---
layout: "default"
title: "Webinars"
subtitle: "Here is a list of our past webinars, fugit rem nostrum veniam eum qui doloribus. Ut est quo voluptates. Deleniti eum aut non placeat rerum."
banner_image: "webinar.jpg"
links: 
  - label: "Check our upcoming events"
    url: "events"
    title: "Go to events page"
    color: "white"
menus: 
  resources:
    weight: 1
  footer_resources:
    weight: 1

side_content: "components/cards/webinar.html"
---
```

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Create project

[Instructions](https://github.com/appliedblockchain/ab-website/tree/master/_projects/README.md)

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Create event

[Instructions](https://github.com/appliedblockchain/ab-website/tree/master/_events/README.md)

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Create post

[Instructions](https://github.com/appliedblockchain/ab-website/tree/master/_posts/README.md)

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Add search to page

> Check out the search [plugin documentation](https://github.com/christian-fei/Simple-Jekyll-Search) for more information and troubleshooting

- Create a file in the `_search` folder.
- Name the file with the typ of items you will search on.

> If you are searching for blog posts, name it `posts.json`

- Adapt the code to loop on the corresponding collection (you can use `webinars.json` as reference), adding the necessary objects.
- Add the search snippet to the page you are adding the search to, using the json file slug as the variant variable.

```html
{% include components/sections/search.html 
  variant = "your-file-name"
%}
```

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

---

### [LICENSE](https://github.com/appliedblockchain/ab-website/blob/master/LICENSE)