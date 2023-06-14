import { Grid } from '@mui/material';
import TestimonialDetails from './TestimonialDetails';
import { IProjectProps } from './[slug]';
import TextDetails from './TextDetails';

const parseRederDetails = {
  text: TextDetails,
  testimonial: TestimonialDetails,
};

function DetailsSection({ project }: IProjectProps) {
  return (
    <Grid container className="study-case-details-container" direction="column">
      {project.details.map((detail) =>
        parseRederDetails[detail.type](detail as any, project),
      )}
    </Grid>
  );
}

export default DetailsSection;
