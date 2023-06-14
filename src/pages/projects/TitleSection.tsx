import { Grid, Typography } from '@mui/material';
import { IProjectProps } from './[slug]';
import clsx from 'clsx';
import Image from 'next/image';

function TitleSection({ project }: IProjectProps) {
  return (
    <Grid className={clsx('title-section')}>
      <Grid item xs={12} marginBottom="24px">
        <Image
          src={project.logo.src}
          alt={project.logo.alt}
          width={240}
          height={70}
        />
      </Grid>
      <Grid container>
        <Grid item xs={8}>
          <Grid item xs={12}>
            <Typography className="study-case-title" variant="h6">
              {project.title} case study
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="study-case-subtitle" variant="h4">
              {project.subtitle}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid>
            <Typography
              className="study-case-industry-category"
              variant="body1"
            >
              Industry
            </Typography>
          </Grid>
          <Grid>
            <Typography
              className={clsx(
                'study-case-industry-category',
                'study-case-industry-category-details',
              )}
              variant="body1"
            >
              {project.industry}
            </Typography>
          </Grid>
          <Grid sx={{ marginTop: '24px' }}>
            <Typography
              className="study-case-industry-category"
              variant="body1"
            >
              Category
            </Typography>
          </Grid>
          <Grid>
            <Typography
              className={clsx(
                'study-case-industry-category',
                'study-case-industry-category-details',
              )}
              variant="body1"
            >
              {project.category}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TitleSection;
