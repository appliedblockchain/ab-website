import {
  GrowSection,
  WhatClientsSaySection,
  WhatWeHaveBeenDoingSection,
  WhatMakesUsDifferentSection,
  OurVisionAndValuesSection,
  StayInTouchSection,
} from '@/components/HomePage';
import { IndexLayout } from '@/components/IndexLayout';
import { Grid } from '@mui/material';

export default function HomePage() {
  return (
    <IndexLayout>
      <Grid container>
        <GrowSection />
        <WhatClientsSaySection />
        <WhatWeHaveBeenDoingSection />
        <WhatMakesUsDifferentSection />
        <OurVisionAndValuesSection />
        <StayInTouchSection />
      </Grid>
    </IndexLayout>
  );
}
