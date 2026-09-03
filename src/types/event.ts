export interface EventTheme {
  paper: string;
  paperDark: string;
  ink: string;
  inkMuted: string;
  accent: string;
  accentLight: string;
  accentDark: string;
}

export interface EventLocation {
  label: string;
  name: string;
  address: string;
  time: string;
  mapQuery: string;
}

export interface EventConfig {
  slug: string;
  typeLabel: string;
  eyebrow: string;
  title: string;
  monogram: string;
  dateISO: string;
  dateLabel: string;
  tagline: string;
  theme: EventTheme;
  locations: EventLocation[];
  dressCode?: { title: string; description: string };
  gallery: { caption: string }[];
  rsvpDeadline: string;
  giftsMessage?: string;
  musicNote?: string;
  cardPreview: {
    line1: string;
    line2: string;
    line3: string;
  };
}
