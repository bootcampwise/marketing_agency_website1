# Services Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    SERVICES PAGE                             │
│                  (services_page)                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│ServicesHero  │   │ ServiceCard  │   │ ServicesCta  │
│              │   │              │   │              │
│ - Title      │   │ - Badge      │   │ - Heading    │
│ - Description│   │ - Image      │   │ - Description│
└──────────────┘   │ - Description│   │ - Button     │
                   │ - CTA        │   └──────────────┘
                   │ - Benefits   │
                   │ - BG Color   │
                   │ - Wrapper    │
                   └──────────────┘
                          │
                          │ (Repeatable)
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
    ┌─────┐          ┌─────┐          ┌─────┐
    │ SEO │          │ PPC │    ...   │ ... │
    └─────┘          └─────┘          └─────┘
    (6 services total)
```

## Slice Breakdown

### 1. ServicesHero
```
┌────────────────────────────────────────┐
│           Our Services                 │
│                                        │
│  Comprehensive range of digital        │
│  marketing services...                 │
└────────────────────────────────────────┘
```

### 2. ServiceCard (x6)
```
┌────────────────────────────────────────────────────────┐
│  ┌──────────────┐                    ┌──────────┐    │
│  │ Search Engine│                    │          │    │
│  │ Optimization │                    │  [Image] │    │
│  └──────────────┘                    │          │    │
│                                      └──────────┘    │
│  ○ [Learn More Button]                               │
└────────────────────────────────────────────────────────┘

┌─────────────────────────┬──────────────────────────┐
│ What we offer           │ Benefits                 │
│                         │                          │
│ Description text...     │ ✓ Benefit 1             │
│                         │ ✓ Benefit 2             │
│ [CTA Button]            │ ✓ Benefit 3             │
│                         │ ✓ Benefit 4             │
└─────────────────────────┴──────────────────────────┘
```

### 3. ServicesCta
```
┌────────────────────────────────────────┐
│  Ready to transform your digital       │
│  presence?                             │
│                                        │
│  Contact us today to discuss...        │
│                                        │
│         [Get in touch]                 │
└────────────────────────────────────────┘
```

## Color Variations

Service cards use different background colors:
- **gray** (bg-gray-50) - SEO
- **green** (bg-primary) - PPC, Content Creation
- **dark** (bg-dark) - Social Media, Analytics
- **light** (bg-gray-light) - Email Marketing

Some cards have a wrapper (gray background around the entire section).

## Data Structure in Prismic

```json
{
  "services_page": {
    "uid": "services",
    "meta_title": "Our Services - Positivus",
    "meta_description": "...",
    "meta_image": {...},
    "slices": [
      {
        "slice_type": "services_hero",
        "primary": {
          "title": "Our Services",
          "description": "..."
        }
      },
      {
        "slice_type": "service_card",
        "primary": {
          "badge_text_line1": "Search Engine",
          "badge_text_line2": "Optimization",
          "illustration": {...},
          "what_we_offer": "...",
          "cta_text": "Get SEO Audit",
          "cta_link": "#seo-audit",
          "bg_color": "gray",
          "has_wrapper": false
        },
        "items": [
          {"benefit": "Increased organic traffic"},
          {"benefit": "Higher website rankings"},
          ...
        ]
      },
      // ... 5 more service_card slices
      {
        "slice_type": "services_cta",
        "primary": {
          "heading": "Ready to transform...",
          "description": "...",
          "button_text": "Get in touch",
          "button_link": "/contact"
        }
      }
    ]
  }
}
```
