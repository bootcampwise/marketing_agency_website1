# Homepage Slices - Quick Reference

## ✅ Created Slices

All 8 homepage slices have been successfully created:

1. **Hero** - Main hero section with heading, description, CTA button, hero image, and client logos
2. **Services** - Services grid with 6 customizable service cards
3. **Cta** - Call-to-action banner with heading, description, button, and image
4. **CaseStudies** - Case studies section with 3-column grid
5. **WorkingProcess** - Accordion-style process steps (6 steps)
6. **Team** - Team members grid with avatars and details (6 members)
7. **Testimonials** - Testimonials carousel with navigation
8. **Contact** - Contact form with decorative illustration

## 📁 File Structure

```
slices/
├── Hero/
│   ├── index.tsx
│   └── model.json
├── Services/
│   ├── index.tsx
│   └── model.json
├── Cta/
│   ├── index.tsx
│   └── model.json
├── CaseStudies/
│   ├── index.tsx
│   └── model.json
├── WorkingProcess/
│   ├── index.tsx
│   └── model.json
├── Team/
│   ├── index.tsx
│   └── model.json
├── Testimonials/
│   ├── index.tsx
│   └── model.json
├── Contact/
│   ├── index.tsx
│   └── model.json
└── index.ts

customtypes/
└── homepage/
    └── index.json
```

## 🚀 Next Steps

1. **Push to Prismic:**
   ```bash
   npm run slicemachine
   ```
   Then click "Push to Prismic" in the Slice Machine UI

2. **Create Homepage Document:**
   - Go to Prismic dashboard
   - Create new "Homepage" document
   - Set UID to `homepage`

3. **Populate Content:**
   - Follow the detailed guide in `HOMEPAGE_PRISMIC_GUIDE.md`
   - Add all 8 slices in order
   - Fill in all content fields

4. **Publish:**
   - Save and publish the homepage document
   - Visit your website to see the live result

## 📖 Documentation

- **Detailed Setup Guide:** `HOMEPAGE_PRISMIC_GUIDE.md`
- **Recovery Guide:** `SLICES_RECOVERY_GUIDE.md`

## 🎨 Slice Features

### Interactive Slices
- **WorkingProcess:** Accordion functionality (client-side)
- **Testimonials:** Carousel with navigation (client-side)

### Customizable Styling
- **Services:** Background colors, text colors, title backgrounds
- **All Slices:** Tailwind CSS classes for easy customization

### Image Support
- **Hero:** Hero image + 6 client logos
- **Services:** 6 service images
- **Cta:** CTA illustration
- **Team:** 6 team member avatars
- **Contact:** Contact illustration

## ⚙️ Configuration

All slices are configured to work with:
- Next.js 14+ (App Router)
- Prismic CMS
- Tailwind CSS
- TypeScript
- Space Grotesk font family

## 🎯 Content Summary

Total content items to populate:
- Hero: 1 heading, 1 description, 1 button, 1 image, 6 logos
- Services: 1 heading, 1 description, 6 service cards
- Cta: 1 heading, 1 description, 1 button, 1 image
- Case Studies: 1 heading, 1 description, 3 case descriptions
- Working Process: 1 heading, 1 description, 6 process steps
- Team: 1 heading, 1 description, 6 team members
- Testimonials: 1 heading, 1 description, 5 testimonials
- Contact: 1 heading, 1 description, 1 image

**Total:** ~50 content fields to populate in Prismic
