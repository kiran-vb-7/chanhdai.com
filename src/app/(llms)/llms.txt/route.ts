import { SITE_INFO } from "@/config/site"
import { getBlogPosts, getComponentDocs } from "@/features/doc/data/documents"

const allComponents = getComponentDocs()
const allPosts = getBlogPosts()

const content = `# Kiran V B

> Personal portfolio of Kiran V B — founder, strategist, finance professional, policy researcher, and product builder working across intelligence systems, AI, finance, economics, and decision-making.

- [About](${SITE_INFO.url}/about.md): Background, current work, public links, and profile information.
- [Experience](${SITE_INFO.url}/experience.md): Consulting, legislative research, banking risk, and finance experience.
- [Education](${SITE_INFO.url}/education.md): MBA at IIM Sirmaur and B.Com. at Loyola College Chennai.
- [Projects](${SITE_INFO.url}/projects.md): LiOS Terminal and selected finance/valuation work.
- [Recognition](${SITE_INFO.url}/recognition.md): Verified awards and recognition.
- [Components](${SITE_INFO.url}/components.md): Upstream registry components retained from the open-source site architecture.
- [Blocks](${SITE_INFO.url}/blocks.md): Upstream registry blocks retained from the open-source site architecture.
- [Craft](${SITE_INFO.url}/craft.md): Interface and interaction demos retained from the upstream open-source project.
- [Research & Writing](${SITE_INFO.url}/blog.md): Publications and writing by Kiran V B.
- [Bookmarks](${SITE_INFO.url}/bookmarks.md): Personal reading and reference bookmarks when published.

## Components

${allComponents.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/components/${item.slug}.md): ${item.metadata.description}`).join("\n")}

## Research & Writing

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.md): ${item.metadata.description}`).join("\n")}
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
