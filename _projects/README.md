# Projects

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Instructions

- Create a file in the `_projects` folder.
- Name the file with a slugged version of the client name title.

> If the client name is `LLoyd's Register`, it becomes `lloyd-s-register`

- Copy/paste the code below and fill the content
- Add the logo in the `assets/images/logos/clients/` folder, using the same name as the project `.md` file.

> png format with white space around the logo (use the existing logos as template)


```yml
---
layout: "case-study"
menu:
  footer_customers:
    disabled: true
order:
case_study: true
title: ""
subtitle: ""
image: "appii.jpg"
industries: [""]
  - name: ""
  # repeat if needed…
summary: ""
link: 
  label: ""
  url: ""

deliverables: ""

challenge: 
  title: ""
  content: |-
    This will be interpreted as markdown content. Don't forget to correctly indent everytime you go to a new line.

    Like this.

delivery:
  diagram: ""
  title: ""
  content: |-
    This will be interpreted as markdown content. Don't forget to correctly indent everytime you go to a new line.

    Like this.

results:
  title: ""
  content: |-
    This will be interpreted as markdown content. Don't forget to correctly indent everytime you go to a new line.

    Like this.
  icons:
    - image: ""
      title: ""
      body: ""
    - image: ""
      title: ""
      body: ""
    # repeat if needed

testimonial:
  - quote: ""
    author: ""
    position: ""
    image: ""
---
```

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Parameters

### General

| Parameter | Values | Description |
| --- | --- | --- |
| `layout` | `case-study` | Do not edit! Defines which layout to use if the project has a case study page |
| `menus` | `node` | Required. If the projects has a case study, use `menu: "footer_customers"`. If not use the snippet below. |
| `order` | number | Specify the order it will appear on the case-studies page |
| `case_study` | boolean | Set to true to create a standalone page and add the project to the case studies page |
| `title` | string | Company name |
| `subtitle` | string | Short project/deliverable description |
| `image` | string | Place the image in `assets/images/backgrounds` folder and write the name here, with the file extension |
| `industries` | node | List of industries |
| `summary` | string | Longer description of the company/project |
| `link.label` | string | Replace the default link label of the external link |
| `link.url` | string | (optionnal) External link to company website (or other) |
| `link.color` | string | Defines to button color |
| `deliverables` | string | |

```yml
menu:
  footer_customers:
    disabled: true
```

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Advice

- The project banner image should not exceed **1000px** in width and **75 KB** in size
- If you don't have an image, leave the `image` tag empty, a default image is set.
