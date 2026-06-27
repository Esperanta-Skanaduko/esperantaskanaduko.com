/**
 * Project contributors data.
 *
 * Add a new entry to the CONTRIBUTORS array to appear in the About page
 * Contributors section.  Entries are rendered in the order they appear here —
 * put the most impactful or longest-standing contributors first.
 *
 * Fields:
 *   id          — Unique slug used as a React key.
 *   name        — Display name.
 *   role        — Short role / title string (plain text, not an i18n key,
 *                 because contributor roles tend to be project-specific and
 *                 don't need translation).
 *   avatar      — Optional URL to an avatar image (GitHub avatar, etc.).
 *                 Falls back to an emoji placeholder when absent.
 *   avatarEmoji — Emoji used when `avatar` is absent. Defaults to '🌱'.
 *   github      — Optional GitHub username (used to build the profile URL).
 *   website     — Optional personal/portfolio website URL.
 *   joined      — ISO 8601 date string (YYYY-MM-DD) indicating when the
 *                 contributor joined the project.
 */

export interface Contributor {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  avatarEmoji?: string;
  github?: string;
  website?: string;
  joined: string;
}

export const CONTRIBUTORS: Contributor[] = [
  {
    id: 'victor-williams',
    name: 'Victor Williams',
    role: 'Founder & Developer',
    avatarEmoji: '🌱',
    github: 'Vaporjawn',
    joined: '2023-01-01',
  },
];
