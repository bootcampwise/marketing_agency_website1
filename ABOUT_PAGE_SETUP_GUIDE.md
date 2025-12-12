# About Page Setup Guide for Prismic

This guide will help you set up the About page in Prismic CMS. The About page uses a **smart approach** where Team and Services sections are automatically pulled from the homepage, so you don't need to duplicate any content.

## Overview

The About page consists of:
1. **AboutHero** - Hero section with heading, description, button, and client logos (managed in About page)
2. **Team Section** - Automatically fetched from homepage Team slice
3. **Services Section** - Automatically fetched from homepage Services slice

## How It Works

The About page **automatically displays** the Team and Services slices from your homepage. You only need to:
- Create the About page document in Prismic
- Add the AboutHero slice
- The Team and Services sections will appear automatically!

## Step 1: Push Custom Types and Slices to Prismic

1. Make sure Slice Machine is running:
   ```bash
   npm run slicemachine
   ```

2. In Slice Machine (http://localhost:9999):
   - Click on "Push to Prismic" or "Changes detected"
   - Review the changes (new custom type: `about_page` and new slice: `AboutHero`)
   - Click "Push" to sync everything to Prismic

## Step 2: Create the About Page Document

1. Go to your Prismic dashboard
2. Click "Create new" → "About Page"
3. Set the UID to `about` (this is important!)

## Step 3: Add SEO Metadata

Fill in the following fields:
- **Meta Title**: `About Us - Positivus Digital Marketing Agency`
- **Meta Description**: `Learn about our team and the services we offer to help businesses grow and succeed online.`
- **Meta Image**: Upload a social sharing image (optional)

## Step 4: Add the AboutHero Slice

1. Click "+ Add a slice" and select "AboutHero"
2. Fill in the fields:
   - **Heading**: `We Navigate the digital landscape for success`
   - **Description**: `Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.`
   - **Button Text**: `Book a consultation`
   - **Button Link**: `#contact` (or your contact page URL)
   - **Show Client Logos**: Toggle to "Yes"

3. Add client logos (click "+ Add item" for each logo):
   - Upload logo images (Amazon, Dribbble, HubSpot, Notion, Netflix, Zoom)
   - Set appropriate alt text for each logo

## Step 5: Publish

1. Click "Save" to save your changes
2. Click "Publish" to make the page live

**That's it!** The Team and Services sections will automatically appear from the homepage data.

## What You'll See on the About Page

After publishing, your About page will display:

1. **Hero Section** (from AboutHero slice)
   - Your custom heading
   - Description
   - Black "Book a consultation" button
   - Client logos in grayscale

2. **Team Section** (automatically from homepage)
   - All team members from the homepage Team slice
   - Same styling and layout

3. **Services Section** (automatically from homepage)
   - All services from the homepage Services slice
   - Same styling and layout

## Important Notes

### ✅ Advantages of This Approach

- **Single Source of Truth**: Team and Services data only exist in one place (homepage)
- **Automatic Updates**: Changes to team or services on homepage automatically reflect on About page
- **No Duplication**: You don't need to add team members or services twice
- **Easier Maintenance**: Update once, see changes everywhere

### 📝 Managing Content

- **To update team members**: Go to Homepage → Edit Team slice
- **To update services**: Go to Homepage → Edit Services slice
- **To update About hero section**: Go to About Page → Edit AboutHero slice
- **To update client logos**: Go to About Page → Edit AboutHero slice → Modify logo items

### ⚠️ Prerequisites

Make sure your homepage is set up first with:
- Team slice populated with team members
- Services slice populated with services

If the homepage doesn't have these slices, the About page will only show the hero section.

## Verification

After publishing, visit your About page:
- Local: `http://localhost:3000/about`
- Production: `https://yourdomain.com/about`

You should see:
1. ✅ Hero section with your custom content and client logos
2. ✅ Team section with all team members from homepage
3. ✅ Services section with all services from homepage

## Troubleshooting

### Team or Services section not appearing
- **Check**: Make sure the homepage document is published
- **Check**: Verify the homepage has Team and Services slices with data
- **Solution**: Go to homepage and add/publish the Team and Services slices

### Button doesn't have black background
- **Check**: Make sure you've pulled the latest code changes
- **Solution**: The button should automatically have a black background with white text

### Client logos not showing
- **Check**: Make sure you've uploaded logo images in the AboutHero slice
- **Check**: Verify "Show Client Logos" is toggled to "Yes"
- **Solution**: Add logo items in the AboutHero slice

## Technical Details

### How the About Page Works

The About page component:
1. Fetches both the About page and Homepage documents from Prismic
2. Extracts the Team and Services slices from the homepage
3. Combines them with the About page slices
4. Renders everything together using SliceZone

```typescript
// Simplified code structure
const aboutPage = await client.getSingle("about_page");
const homepage = await client.getSingle("homepage");

const teamSlice = homepage.data.slices?.find(s => s.slice_type === "team");
const servicesSlice = homepage.data.slices?.find(s => s.slice_type === "services");

const combinedSlices = [
    ...aboutPage.data.slices,  // AboutHero
    teamSlice,                  // From homepage
    servicesSlice              // From homepage
];
```

This approach ensures you never have to duplicate content!

## Next Steps

Once the About page is set up:
1. ✅ Test the page on different devices
2. ✅ Verify team and services display correctly
3. ✅ Update team or services on homepage and confirm changes appear on About page
4. ✅ Customize the hero section content as needed

Enjoy your streamlined content management! 🎉
