declare module '@mui/material/styles' {
  interface Palette {
    brand: {
      facebook: string;
      github: string;
      linkedin: string;
      medium: string;
      twitter: string;
    };
  }

  interface PaletteOptions {
    brand?: {
      facebook: string;
      github: string;
      linkedin: string;
      medium: string;
      twitter: string;
    };
  }

  interface TypographyVariants {
    caption2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    caption2?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption2: true;
  }
}

export {};
