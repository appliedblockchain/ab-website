import { TextDetails } from '@/utils/types';
import { Grid, Typography } from '@mui/material';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
function TextDetails(detail: TextDetails) {
  return (
    <Grid item className={clsx('study-case-details-text')} key={uuidv4()}>
      <Grid>
        <Typography
          variant="h4"
          className={clsx(
            'study-case-details-text-base',
            'study-case-details-content-margin-bottom',
          )}
        >
          {detail.title}
        </Typography>
        {detail.content.map((paragraph, index) => (
          <Typography
            key={index}
            variant="subtitle1"
            className={clsx(
              'study-case-details-text-content',
              'study-case-details-text-base',
              index !== detail.content.length - 1 &&
                'study-case-details-content-margin-bottom',
            )}
          >
            {paragraph}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
}

export default TextDetails;
