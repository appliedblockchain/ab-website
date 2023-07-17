import { TResource } from '@/utils/types';
import { ArrowForward } from '@mui/icons-material';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { v4 } from 'uuid';

interface ResourceProps {
  resource: TResource;
}

const getActionVariant = (variant: string) => {
  switch (variant) {
    case 'button':
      return 'contained';
    default:
      return 'text';
  }
};

function Resource({ resource }: ResourceProps) {
  return (
    <Card
      sx={{ maxWidth: 379, maxHeight: 565 }}
      id="find-me"
      className="resource-cards__card"
    >
      <CardMedia
        component="img"
        height="212.438"
        // style={{ objectFit: 'cover' }}
        image={resource.cover}
      />
      <CardContent>
        <Chip
          color="primary"
          size="small"
          className="resource-cards__chip"
          label={resource.date.toString()}
        />
        <Typography
          gutterBottom
          variant="subtitle2"
          className="resource-cards__card__text-title"
        >
          {resource.title}
        </Typography>
        <Typography
          variant="overline"
          className="resource-cards__card__text-subtitle"
        >
          {resource.description}
        </Typography>
      </CardContent>
      <CardActions>
        {resource.links.map((link) => (
          <Button
            variant={getActionVariant(link.type)}
            key={v4()}
            className={
              link.type === 'link'
                ? 'resource-cards__card__button__link'
                : 'resource-cards__card__button'
            }
          >
            <Link href={link.url} target="_blank">
              {link.text}
              {link.type === 'link' && (
                <ArrowForward sx={{ height: 16, width: 16 }} />
              )}
            </Link>
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}

export default Resource;
