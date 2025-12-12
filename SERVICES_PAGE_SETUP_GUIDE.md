# Services Page Setup Guide

This guide will help you set up the Services Page in Prismic CMS.

## Overview

The Services Page has been migrated to use Prismic CMS with the following structure:
- **Custom Type**: `services_page` (non-repeatable)
- **Slices**: 
  - `services_hero` - Hero section with title and description
  - `service_card` - Individual service cards (repeatable)
  - `services_cta` - Final call-to-action section

## Step 1: Push to Prismic

First, make sure Slice Machine is running and push the new custom types and slices:

```bash
npm run slicemachine
```

In Slice Machine:
1. Click "Push to Prismic" or "Sync changes"
2. Confirm the push of the new custom type and slices

## Step 2: Create Services Page Document

1. Go to your Prismic dashboard
2. Click "Create new" → "Services Page"
3. Set the UID to `services`

## Step 3: Add Content

### SEO & Metadata Tab
Fill in the SEO fields:
- **Meta Title**: `Our Services - Digital Marketing Solutions | Positivus`
- **Meta Description**: `Explore our comprehensive range of digital marketing services including SEO, PPC, Social Media Marketing, Email Marketing, Content Creation, and Analytics.`
- **Meta Image**: Upload a relevant image (1200x630px recommended)

### Main Tab - Add Slices

#### 1. Services Hero Slice
Click "Add a slice" → "ServicesHero"

**Fields:**
- **Title**: `Our Services`
- **Description**: `At Positivus, we offer a comprehensive range of digital marketing services designed to help your business thrive in the online world. Explore our services below to find the perfect solution for your needs.`

#### 2. Service Card Slices (Add 6 times)

**Service 1: SEO**
- **Badge Text Line 1**: `Search Engine`
- **Badge Text Line 2**: `Optimization`
- **Illustration**: Upload `/service-seo.png` or similar
- **What We Offer**: `We optimize your website to rank higher in search engine results pages, driving more organic traffic to your site. Our SEO services include keyword research, on-page optimization, technical SEO, and link building strategies.`
- **CTA Text**: `Get SEO Audit`
- **CTA Link**: `#seo-audit`
- **Background Color**: `gray`
- **Has Background Wrapper**: `false`
- **Benefits** (Add 4 items):
  - `Increased organic traffic`
  - `Higher website rankings`
  - `Better user experience`
  - `Increased brand visibility`

**Service 2: PPC**
- **Badge Text Line 1**: `Pay-per-click`
- **Badge Text Line 2**: `advertising`
- **Illustration**: Upload `/service-ppc.png` or similar
- **What We Offer**: `Our PPC services help you maximize your advertising budget by creating targeted campaigns that reach the right audience at the right time. We manage campaigns across Google Ads, Bing Ads, and social media platforms.`
- **CTA Text**: `Start PPC Campaign`
- **CTA Link**: `#ppc`
- **Background Color**: `green`
- **Has Background Wrapper**: `true`
- **Benefits** (Add 4 items):
  - `Immediate website traffic`
  - `Highly targeted advertising`
  - `Measurable ROI`
  - `Flexible budgeting options`

**Service 3: Social Media Marketing**
- **Badge Text Line 1**: `Social Media`
- **Badge Text Line 2**: `Marketing`
- **Illustration**: Upload `/service-social.png` or similar
- **What We Offer**: `We help you build and engage with your audience across various social media platforms. Our services include content creation, community management, paid social advertising, and performance analytics.`
- **CTA Text**: `Social Media Strategy`
- **CTA Link**: `/services/social-media-marketing`
- **Background Color**: `dark`
- **Has Background Wrapper**: `false`
- **Benefits** (Add 4 items):
  - `Increased brand awareness`
  - `Better customer engagement`
  - `Higher conversion rates`
  - `Audience insights`

**Service 4: Email Marketing**
- **Badge Text Line 1**: `Email`
- **Badge Text Line 2**: `Marketing`
- **Illustration**: Upload `/service-email.png` or similar
- **What We Offer**: `Our email marketing services help you nurture leads and maintain customer relationships through personalized campaigns. We handle everything from strategy development to design, automation, and performance analysis.`
- **CTA Text**: `Start Email Campaign`
- **CTA Link**: `#email`
- **Background Color**: `light`
- **Has Background Wrapper**: `true`
- **Benefits** (Add 4 items):
  - `Direct customer communication`
  - `High ROI`
  - `Personalized messaging`
  - `Automated workflows`

**Service 5: Content Creation**
- **Badge Text Line 1**: `Content`
- **Badge Text Line 2**: `Creation`
- **Illustration**: Upload `/service-content.png` or similar
- **What We Offer**: `We create high-quality, engaging content that resonates with your target audience and helps achieve your business goals. Our content services include blog posts, articles, infographics, videos, and more.`
- **CTA Text**: `Content Strategy`
- **CTA Link**: `#content`
- **Background Color**: `green`
- **Has Background Wrapper**: `false`
- **Benefits** (Add 4 items):
  - `Increased audience engagement`
  - `Increased brand authority`
  - `Better search visibility`
  - `Valuable marketing assets`

**Service 6: Analytics and Tracking**
- **Badge Text Line 1**: `Analytics and`
- **Badge Text Line 2**: `Tracking`
- **Illustration**: Upload `/service-analytics.png` or similar
- **What We Offer**: `We help you make data-driven decisions by setting up comprehensive tracking systems and providing actionable insights. Our services include setting up analytics tools, custom dashboards, conversion tracking, and regular reporting.`
- **CTA Text**: `Analytics Setup`
- **CTA Link**: `#analytics`
- **Background Color**: `dark`
- **Has Background Wrapper**: `true`
- **Benefits** (Add 4 items):
  - `Data-driven decision making`
  - `Performance tracking`
  - `User behavior insights`
  - `ROI measurement`

#### 3. Services CTA Slice
Click "Add a slice" → "ServicesCta"

**Fields:**
- **Heading**: `Ready to transform your digital presence?`
- **Description**: `Contact us today to discuss your digital marketing needs and discover how our services can help your business grow and succeed online.`
- **Button Text**: `Get in touch`
- **Button Link**: `/contact`

## Step 4: Publish

1. Review all content
2. Click "Save"
3. Click "Publish"

## Step 5: Verify

Visit your services page at `/services` to see the content from Prismic.

## Troubleshooting

### Images Not Showing
- Make sure you've uploaded the service illustration images to Prismic
- Check that the image URLs are valid
- Verify the images are published

### Content Not Updating
- Clear your browser cache
- Check that the document is published in Prismic
- Restart your development server

### TypeScript Errors
If you see TypeScript errors about missing types, run:
```bash
npm run slicemachine
```
This will regenerate the Prismic types.

## Notes

- The services page is now fully managed through Prismic
- You can easily add, remove, or reorder services through the Prismic dashboard
- All styling is preserved from the original design
- The page includes proper SEO metadata
