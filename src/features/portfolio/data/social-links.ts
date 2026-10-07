import type { SocialProfile } from "@/features/portfolio/types/social-links"

/** Public social profiles for Kiran V B. */
export const SOCIAL = {
  github: {
    title: "GitHub",
    handle: "kiran-vb-7",
    href: "https://github.com/kiran-vb-7",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
