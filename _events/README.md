# Events

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Instructions

- Create a file in the `_events` folder.
- Name the file with a slugged version of the event name, preceded by the event date, omitting small words like `as` or `the`.

> If the event name is `The Future of Blockchain & Crypto: Where do we Go from Here?`, it becomes `YYYY-MM-DD-future-blockchain-crypto`

- Copy/paste the code below and fill the content
- If the events is a webinar, once it has a recording or a video, place the link to the form or video or below the following snippet (see [example]({% event_url 2020-04-23-webinar-zero-knowledge-proofs-business %}))

```yml
---
layout: "resource"
title: ""
subtitle: ""
type: ""
tags: ["", ""]
image: ""
register: ""

# recording: true
# recording_type: ""

speakers:
  - name: ""
    company: ""
    thumbnail: ""
  - name: ""
    company: ""
    thumbnail: ""
  - name: ""
    company: ""
    thumbnail: ""
---

# Write HTML here for the form or the video
```

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Parameters

### General

| Parameter | Values | Description |
| --- | --- | --- |
| `layout` | `webinar` | Do not edit! Defines which layout to use |
| `title` | string | The event name, which appears on the page **and** the HTML title tag (that appears on the browser tabs) |
| `subtitle` | string | Optional. Event description in a few lines |
| `location` | string | Optional. The event location of not virtual |
| `image` | string | Place the image in `assets/images/events` folder and  write the name here, with the file extension |
| `category` | `Webinar`, `Virtual`, `Conference`, etc… | |
| `website` | string | Optional. Website full URL |
| `register` | string | Optional. If different from the wesbite URL |
| `directions` | string | Optional. Google Maps link to the event location |
| `date_to` | string | Optional. If the event spans multiple days. Use `YYYY-MM-DD` format |
| `recording` | boolean | Only for webinars. When set to `true`, adds the event to the webinar page and tcreates a standalone page |
| `recording_type` | `from`, `video` | Sets the styling depending on the recording type |
| `speakers` | node | Adds a list of speakers to the event (for webinars only) |

### `Speakers`

| Value | Description |
| --- | --- |
| `name` | |
| `company` | |
| `thumbnail` | link to the speaker portrait. Add the image to the `assets/images/team/portrait` folder  |

Here is an example

```yml
---
layout: "resource"
title: "The Future of Blockchain & Crypto: Where do we Go from Here?"
subtitle: "Adi Ben-Ari, Samantha Yap and Asher Tan discussed the perspectives on the future of cryptocurrency and blockchain by looking at what the rest of 2021 is likely to have in store, along with the long-term term view and the real-world applications for both cryptocurrency and blockchain."
type: "Webinar"
tags: ["Cryptocurrencies", "Blockchain"]
image: "webinar-future-blockchain.jpg"
register: "https://www.eventbrite.co.uk/e/the-future-of-blockchain-crypto-where-do-we-go-from-here-tickets-156889146661"

recording: true
recording_type: "video"

speakers:
  - name: "Adi Ben-Ari"
    company: "Applied Blockchain"
    thumbnail: "adi.jpg"
  - name: "Samantha Yap"
    company: "YAP Global"
    thumbnail: "samantha-yap.jpg"
  - name: "Asher Tan"
    company: "Coinjar"
    thumbnail: "asher-tan.jpg"
---

<div class='embed-container'>
  <iframe src='https://www.youtube.com/embed/3fCAi0GzhwI' frameborder='0' allowfullscreen></iframe>
</div>
```

<!------------------------------------------------------>
<p>&nbsp;</p>
<!------------------------------------------------------>

## Advice

- The event image should not exceed **600px** in width and **50 KB** in size
- If you don't have an image, leave the `image` tag empty, a default image is set.
