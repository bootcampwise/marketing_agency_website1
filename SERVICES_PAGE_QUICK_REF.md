# Services Page - Quick Reference

## 🚀 Quick Start

1. **Run Slice Machine**
   ```bash
   npm run slicemachine
   ```

2. **Push to Prismic** (in Slice Machine UI)

3. **Create Document** in Prismic Dashboard
   - Type: "Services Page"
   - UID: `services`

4. **Add Content** (see SERVICES_PAGE_SETUP_GUIDE.md)

5. **Publish**

## 📁 Files Created

### Custom Types
- `customtypes/services_page/index.json`

### Slices
- `slices/ServicesHero/model.json` + `index.tsx`
- `slices/ServiceCard/model.json` + `index.tsx`
- `slices/ServicesCta/model.json` + `index.tsx`

### Updated
- `slices/index.ts` (added new slices)
- `app/services/page.tsx` (now uses Prismic)

### Documentation
- `SERVICES_PAGE_SETUP_GUIDE.md` - Full setup instructions
- `SERVICES_PAGE_MIGRATION_SUMMARY.md` - What was done
- `SERVICES_PAGE_STRUCTURE.md` - Visual structure

## 🎨 Slice Types

| Slice | Purpose | Repeatable |
|-------|---------|------------|
| `services_hero` | Hero section with title & description | No |
| `service_card` | Individual service details | Yes (add 6) |
| `services_cta` | Final call-to-action | No |

## 🎯 Service Card Fields

- **badge_text_line1** - First line of badge
- **badge_text_line2** - Second line of badge
- **illustration** - Service image
- **what_we_offer** - Description text
- **cta_text** - Button text
- **cta_link** - Button URL
- **bg_color** - gray | green | dark | light
- **has_wrapper** - true/false
- **benefits** - Array of benefit items

## 🎨 Color Scheme

| Service | BG Color | Wrapper |
|---------|----------|---------|
| SEO | gray | No |
| PPC | green | Yes |
| Social Media | dark | No |
| Email | light | Yes |
| Content | green | No |
| Analytics | dark | Yes |

## ✅ Checklist

- [ ] Run Slice Machine
- [ ] Push to Prismic
- [ ] Create Services Page document
- [ ] Add ServicesHero slice
- [ ] Add 6 ServiceCard slices
- [ ] Add ServicesCta slice
- [ ] Upload all service images
- [ ] Fill in SEO metadata
- [ ] Publish document
- [ ] Test at `/services`

## 🔗 Related Files

- Original page: `app/services/page.tsx` (now uses Prismic)
- Homepage example: `app/page.tsx`
- Homepage guide: `HOMEPAGE_SETUP_GUIDE.md`

## 💡 Tips

- Copy content from the original hardcoded page
- Use the same images from `/public` folder
- Test locally before publishing
- Update metadata for SEO

## 🐛 Troubleshooting

**Yellow warning box?**
→ Document not created/published in Prismic

**TypeScript errors?**
→ Run Slice Machine to regenerate types

**Images not showing?**
→ Upload to Prismic Media Library

**Content not updating?**
→ Clear cache, restart dev server
