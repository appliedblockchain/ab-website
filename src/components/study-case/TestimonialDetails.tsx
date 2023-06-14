import YoutubeVideo from '@/components/YoutubeVideo';
import { Project, TestimonialDetails } from '@/utils/types';
import { Grid, Typography } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

function TestimonialDetails(detail: TestimonialDetails, project: Project) {
  return (
    <Grid
      container
      className={clsx('study-case-details-testimonial')}
      key={uuidv4()}
    >
      <Grid container direction={'column'}>
        <Typography
          variant="h4"
          className={clsx(
            'study-case-details-text-base',
            'study-case-details-testimonial-title',
          )}
        >
          Testimonials
        </Typography>
        {detail.testimonials.map((testimonial, index) => (
          <Grid container direction={'column'} key={index}>
            {testimonial.subtitle && (
              <Typography
                variant="h4"
                className={clsx(
                  'study-case-details-text-base',
                  'study-case-details-text-content',
                  'study-case-details-testimonial-subtitle',
                )}
              >
                {testimonial.subtitle}
              </Typography>
            )}
            <Grid
              container
              className="study-case-details-testimonial-container"
              spacing={6}
            >
              <Grid container direction={'column'} item xs={6}>
                <Grid
                  container
                  className="study-case-details-testimonial-reviewer"
                >
                  {testimonial.reviewer.image && (
                    <Image
                      className="study-case-details-testimonial-reviewer-image"
                      src={testimonial.reviewer.image.src}
                      alt={testimonial.reviewer.image.alt}
                      width={testimonial.reviewer.image.width || 80}
                      height={testimonial.reviewer.image.height || 80}
                    />
                  )}
                  <Grid>
                    <Typography
                      variant="h6"
                      className={clsx(
                        'study-case-details-text-base',
                        'study-case-details-testimonial-reviewer-name',
                      )}
                    >
                      {testimonial.reviewer.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className="study-case-details-text-base-reviewer-position"
                    >
                      {testimonial.reviewer.position} at{' '}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction={'column'}
                    className="study-case-details-testimonial-reviewer-content"
                  >
                    {testimonial.content.map((paragraph, index) => (
                      <Typography
                        key={index}
                        variant="subtitle1"
                        className={clsx(
                          'study-case-details-text-base-reviewer-content',
                          index !== testimonial.content.length - 1 &&
                            'study-case-details-content-margin-bottom',
                        )}
                      >
                        {paragraph}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
                <Grid></Grid>
              </Grid>

              <Grid container direction={'column'} item xs={6}>
                <YoutubeVideo media={testimonial.media} />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default TestimonialDetails;
