import { Media } from '@/utils/types';
import { Grid } from '@mui/material';
import clsx from 'clsx';

interface IYoutubeVideo {
  media: Media;
}

function YoutubeVideo({ media }: IYoutubeVideo) {
  return (
    <Grid container className={clsx('study-case-details-youtube-video')}>
      <iframe
        id="ytplayer"
        width={media.width || 576}
        height={media.height || 398}
        src={'http://www.youtube.com/embed/' + encodeURIComponent(media.src)}
        allowFullScreen
        title={media.alt}
      ></iframe>
    </Grid>
  );
}

export default YoutubeVideo;
