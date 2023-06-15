# Projects Content Management

## Study Case Page

In order to have a study case page, you need to have in the yaml file the following fields:

`viewCaseStudyLink` this is the main field, it is used on the project card to link the whole website to the study case page, given this, this is used to pre build the pages on the build time, this is used to validate the page slugs and also to get the data from the yaml file so it MUST to be the same as the file name.

For example:

`shell.yaml` file

```yml
viewCaseStudyLink: '/shell'
```

`category` this field is used to fill a value on the page.

`aorist.yaml` file

```yml
category: 'NFTs'
```

`details` this field is a list of the content of the page. Those content can be text or testimonials.
Each item of this list must have the value `type` each will define how it will be built on screen.

When `type` is text, it will have only the title and the content.
For text type, we _must_ have more 2 fields: `title` and `content`.

See example below:

```yml
details:
  - type: text
    title: any text value
    content:
      - any text value # each paragraph is a new line
      - any text value # each paragraph is a new line
```

When `type` is testimonial, it will have the title, the content and the testimonials.
`testimonials` is a list of testimonials, each testimonial _must_ have the fields `media`, `reviewer` and `content`. `subtitle` is optional.
`media` is an object and _must_ have the fields `type`, `src` and `alt`. `width` and `height` are optional.
`reviewer` is an object and _must_ have the fields `name`, `image` and `position`.
`image` is an object and _must_ have the fields `src` and `alt`. `width` and `height` are optional.

See example below:

```yml
details:
  testimonials:
    - media:
        type: youtube
        src: any text value
        alt: any text value
        width: 576
        height: 398
      reviewer:
        name: any text value
        image:
          src: any text value
          alt: any text value
          width: 80
          height: 80
        position: any text value
      content:
        - any text value
        - any text value
      subtitle: any text value
    - media: # another testimonial
        type: youtube
        src: any text value
        alt: any text value
      reviewer:
        name: any text value
        image:
          src: any text value
          alt: any text value
        position: any text value
      content:
        - any text value
        - any text value
```

See a complete example below:

```yml
viewCaseStudyLink: "/project name" # but this field MUST to be the same of the file name
category: "any text value"

details:
  - type: "text" or "testimonial"
    title: "any text value"
    content:
      - "any text value" # each paragraph is a new line
      - "any text value" # each paragraph is a new line
  - type: testimonial
    testimonials:
      - media:
          type: "youtube"
          src: "any text value" # youtube video id for example what comes after "v=" https://www.youtube.com/watch?v=-IoeyK_oipg, so the id here is "-IoeyK_oipg". If the url is longer for example https://www.youtube.com/watch?v=LJD6TwUaljQ&list=PLFAAXU0gmqD02L9CCvlp8LspkHTpBnoPB, the id is the same "-IoeyK_oipg" because we only need the video id, you can find it on the url after "v=" and before first "&"
          alt: "any text value"
          width: 576 # optional we have a fallback to 576 as in the figma file, but it can be customized
          height: 398 # optional we have a fallback to 398 as in the figma file, but it can be customized
        reviewer:
          name: "any text value"
          image:
            src: "any text value" # image domain must be placed on next.config.js file on the root of this repository
            alt: "any text value"
            width: 80 # optional we have a fallback to 80 as in the figma file, but it can be customized
            height: 80 # optional we have a fallback to 80 as in the figma file, but it can be customized
          position: "any text value"
        content:
          - "any text value" # each paragraph is a new line
          - "any text value" # each paragraph is a new line
        subtitle: "any text value" # Optional
```
