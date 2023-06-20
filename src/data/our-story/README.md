# Our Story Management

## Our Story Page

The data structure for the Our Story page consists of a list of objects, each object represents an year (or date) and it _must_ have the fields `date` and `content`.

`date` is the date of the event, it can be any text value.

`content` is a list of objects, each object represents a paragraph and it _must_ have the fields `title`, `description` and `image`. `link` is optional.

`title` is the title of the paragraph, it can be any text value.

`description` is the description of the paragraph, it can be any text value.

`image` is text value and it _must_ be the name of an image file in the directory `public/our-story/...svg`.

`link` is an object and it _must_ have the fields `url` and `text`.

`url` is the url of the link, it can be any text value.

`text` is the text of the link, it can be any text value. What will be displayed in the button. This is optional. _See more_ is the fallback text.

See example below:

```yml
- date: 2015
  content:
    - title: Start
      description: Adi started the company in 2015, and was soon joined by Francesco, with the vision of helping companies solve real-world problems by developing distributed applications and contributing towards creating a trustless ecosystem.
      image: /our-story/start.svg
- date: 2017
  content:
    - title: Investments
      description: We received investment from Shell, after winning their Blockchain Competition and designing a proof of concept for Shell Trading. The application was productionized and is used on a daily basis by their trading team.
      image: /our-story/shell.svg
      link:
        url: /projects/shell
        text: Read more
```
