import { StoryContent, TOurStory } from '@/utils/types';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

function ImageContent({ content }: { content: StoryContent }) {
  return (
    <Grid container>
      <Grid item xs={12} className="our-story-timeline-image">
        <Image src={content.image!} alt={content.title} fill={true} />
      </Grid>
    </Grid>
  );
}

interface ITextContentProps {
  content: StoryContent;
  right?: boolean;
}

function TextContent({ content, right }: ITextContentProps) {
  return (
    <Grid container className="our-story-timeline-text-container">
      <Grid item xs={12}>
        <Typography variant="h5" className="our-story-timeline-base-text-title">
          {content.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body1"
          className={
            right
              ? 'our-story-timeline-base-text-description'
              : 'our-story-timeline-base-text-description-right'
          }
        >
          {content.description}
        </Typography>
      </Grid>
      {content.link && (
        <Grid item className="our-story-timeline-button">
          <Typography
            variant="button"
            component="a"
            href={content.link.url}
            className="our-story-timeline-base-text-link"
          >
            {content.link.text || 'See More'}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

interface IContent {
  right?: boolean;
  content?: StoryContent;
  empty?: boolean;
}

function Content({ right, content, empty = false }: IContent) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        id="find-me"
        className={'our-story-timeline-text-container-opposite'}
      >
        {!empty && right
          ? content && <TextContent content={content} />
          : content && <ImageContent content={content} />}
      </TimelineOppositeContent>
      <TimelineSeparator>
        {!empty && (
          <TimelineDot className="our-story-timeline-separator-content" />
        )}
        <TimelineConnector className="our-story-timeline-connector" />
      </TimelineSeparator>
      <TimelineContent>
        {!empty && right
          ? content && <ImageContent content={content} />
          : content && <TextContent content={content} />}
      </TimelineContent>
    </TimelineItem>
  );
}

interface ISeparatorProps {
  date: number;
  index: number;
}

function Separator({ date }: ISeparatorProps) {
  return (
    <TimelineItem>
      <TimelineOppositeContent></TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot className="our-story-timeline-separator">
          <Grid>
            <Typography
              variant="h5"
              className="our-story-timeline-base-text-year"
            >
              {date}
            </Typography>
          </Grid>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent></TimelineContent>
    </TimelineItem>
  );
}

interface ITimelineComponentProps {
  story: TOurStory[];
}

function TimelineComponent({ story }: ITimelineComponentProps) {
  let right = false;
  return (
    <Timeline className="our-story-timeline-main-container">
      {story.map((storyItem, index) => {
        return (
          <Grid key={uuid()}>
            <Separator key={uuid()} date={storyItem.date} index={index} />
            {index !== 0 && <Content empty={true} />}
            {storyItem.content.map((content, index) => {
              right = !right;
              return <Content key={uuid()} right={right} content={content} />;
            })}
            {index === story.length - 1 && <Content empty={true} />}
            {index === story.length - 1 && <Content empty={true} />}
          </Grid>
        );
      })}
    </Timeline>
  );
}

export default TimelineComponent;
