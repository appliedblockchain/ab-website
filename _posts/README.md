# Posts

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Instructions

- Create a file in the `_posts` folder.
- Name the file with a slugged version of the title, preceded by the date, omitting small words like `as` or `the`.

> If the post title is `Blockchain as a Database`, it becomes `YYYY-MM-DD-blockchain-database`

- Copy/paste the code below and fill the content
- If the news is internal, use [markdown terminology](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to write the article and it will create the styling automoatically.

```yml
---
layout: "post"
title: "Blockchain as a Database"
lead: "Much has been written about the merits of private blockchains. including articles by Richard Brown of IBM, as well as the founders of Eris."
image: "blockchain-as-a-database"
category: "Blog"
link:
  type: "external"
  source: "medium"
  url: "https://medium.com/@AppBlockchain_/blockchain-as-a-database-6e81f915f207"
---

You can write markdown code here.
```

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Parameters

### General

| Parameter | Values | Description |
| --- | --- | --- |
| `layout` | `post` | Do not edit! Defines which layout to use |
| `title` | string | The post title, which appears on the page **and** the HTML title tag (that appears on the browser tabs) |
| `lead` | string | First paragraph of the post (excerpt on the media page, larger text on the post page |
| `image` | string | Place the image in `assets/images/posts` folder and  write the name here, with the file extension |
| `category` | `News`, `Press release`, `Blog`, `Video` | |
| `link:type` | `external`, `pdf`, `webinar`, `podcast`, `newsletter`, `report` | Optional parameters to override the default link behaviour, button style and content |
| `link:source` | string | Add to add a suffix to the button label (e.g. write `medium` to display `Read on medium` |
| `link:url` | string | The override post URL |

### `link:type`

| Value | Description |
| --- | --- |
| `external` | Adds an icon to the button to notify he will leave the site, and add parameters to the `<a />` tag |
| `pdf` | Links to an internal pdf. Put the file in `assets/pdfs` folder, changes the button label |
| `webinar` | Links to and internal page to view the webinar recording, changes the button label |
| `podcast` | Links to an external page, changes the button label |
| `newsletter` | Links to an external page, changes the button label |
| `report` | Links to an internal page to download a report, changes the button label |

## Advice

- The post image should not exceed **1000px** in width and **75 KB** in size
- If you don't have an image, leave the `image` tag empty, a default image is set.
