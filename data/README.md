# Data Directory

This directory contains structured JSON files holding content and configuration data extracted from the original Webflow HTML site. React components read from these files to map list items and populate visual templates, avoiding hardcoding in the codebase.

## Shared/Layout Configurations

| JSON File | Content Summary | Consuming Component |
|---|---|---|
| [`nav.json`](file:///c:/Users/ravik/OneDrive/Desktop/nextjs-ui-template/data/nav.json) | Main navbar branding, links, CTAs, and pages dropdown configuration | `components/Header.tsx` |
| [`footer.json`](file:///c:/Users/ravik/OneDrive/Desktop/nextjs-ui-template/data/footer.json) | Footer branding, link directories, newsletter captions, socials, and copyright notice | `components/Footer.tsx` |

## Page Configurations

| JSON File | Content Summary | Consuming Page/Component |
|---|---|---|
| [`home.json`](file:///c:/Users/ravik/OneDrive/Desktop/nextjs-ui-template/data/home.json) | Hero, About, Approach, Testimonials, Booking static sections content | `app/page.tsx` |
| [`about.json`](file:///c:/Users/ravik/OneDrive/Desktop/nextjs-ui-template/data/about.json) | Values, stats, team members, timeline milestones | `app/about/page.tsx` |
| [`contact.json`](file:///c:/Users/ravik/OneDrive/Desktop/nextjs-ui-template/data/contact.json) | Inquiries channels, office locations, coordinates | `app/contact/page.tsx` |

## CMS Collections

| JSON File | Content Summary | Consuming Route |
|---|---|---|
| [`cms-services.json`](file:///c:/Users/ravik/OneDrive/Desktop/nextjs-ui-template/data/cms-services.json) | 6 interior design disciplines (Residential, Hospitality, Restorations, etc.) with timelines and feature deliverables | `/services`, `/services/[slug]` |
| [`cms-projects.json`](file:///c:/Users/ravik/OneDrive/Desktop/nextjs-ui-template/data/cms-projects.json) | Case study items (Villa Serenoa, Palazzo Nero, Casa Bellini, etc.) with stats, images, and description contents | `/projects`, `/project/[slug]` |
| [`cms-posts.json`](file:///c:/Users/ravik/OneDrive/Desktop/nextjs-ui-template/data/cms-posts.json) | 9 journal essays containing reading times, publish dates, full rich text markup, and author mapping | `/blog`, `/post/[slug]` |
| [`cms-authors.json`](file:///c:/Users/ravik/OneDrive/Desktop/nextjs-ui-template/data/cms-authors.json) | Team bio archives mapping authors to journal articles | `/author/[slug]` |
| [`cms-project-categories.json`](file:///c:/Users/ravik/OneDrive/Desktop/nextjs-ui-template/data/cms-project-categories.json) | Slogans and lists for filtering portfolio case studies | `/project-category/[slug]` |
| [`cms-blog-categories.json`](file:///c:/Users/ravik/OneDrive/Desktop/nextjs-ui-template/data/cms-blog-categories.json) | Slogans and lists for filtering studio journal articles | `/blog-categories/[slug]` |
