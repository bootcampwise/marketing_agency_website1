# Social Media Marketing Page - Prismic Setup Guide

## ✅ What Was Created

### Custom Type
- **`customtypes/service_detail_page/index.json`** - Repeatable custom type for service detail pages

### Slices Created
1. **`ServiceDetailHero`** - Hero section with title, description, button, image
2. **`PhilosophyBanner`** - Green bar + dark philosophy section with dot patterns
3. **`ServiceIcons`** - Icon grid for services (Strategy, Creative, Media, Tech)
4. **`ServiceCategory`** - Repeatable section for Strategy/Creative/Media/Tech details
5. **`PartnerBanner`** - Partner promotion banner
6. **`CaseStudiesGrid`** - Case studies carousel

### Updated Files
- **`slices/index.ts`** - Added all new slices to registry
- **`app/services/social-media-marketing/page.tsx`** - Converted to use SliceZone

## 🚀 Setup Instructions

### Step 1: Push to Prismic

1. **Run Slice Machine**:
   ```bash
   npm run slicemachine
   ```

2. **Push to Prismic**:
   - Open Slice Machine (http://localhost:9999)
   - Click "Push to Prismic"
   - This will sync the custom type and all 6 slices

### Step 2: Create the Social Media Marketing Page

1. **Go to Prismic Dashboard**
2. **Create New** → **Service Detail Page**
3. **Set UID**: `social-media-marketing`

### Step 3: Add Slices and Content

Add slices in this order:

#### 1. ServiceDetailHero
- **Title**: "Top Line Growth Through Enhanced Digital Presence"
- **Description**: "Technology makes us fast. Empathy makes us human. Global reach makes us unstoppable."
- **Button Text**: "Let's connect"
- **Button Link**: "/contact"
- **Hero Image**: Upload hero illustration

#### 2. PhilosophyBanner
- **Heading**: "Tech **+** Human Empathy **=** Creativity" (use bold for + and =)
- **Description**: "We leverage our deep understanding of human behavior and technology to find solutions to recurring challenges by breaking the mold. Delivering creative content and interactive platforms powered by best-in-class technology and design principles."
- **Navigation Items** (add 3 items):
  - Item 1: "SERVICES"
  - Item 2: "CASE STUDIES"
  - Item 3: "CLIENTS"

#### 3. ServiceIcons
- **Section Title**: "Digital marketing services"
- **Icons** (add 4 items):
  - Item 1: Upload Strategy icon, Label: "Strategy"
  - Item 2: Upload Creative icon, Label: "Creative"
  - Item 3: Upload Media icon, Label: "Media"
  - Item 4: Upload Tech icon, Label: "Tech"

#### 4. ServiceCategory (Strategy)
- **Category Title**: "Strategy"
- **Description**: "We design and develop meaningful strategies, campaigns, content, and tech builds – delivering engaging people-first experiences."
- **Category Image**: Upload strategy image
- **Features** (add 8 items):
  - "Business consulting"
  - "Consumer research"
  - "Persona development"
  - "Content strategy"
  - "Digital strategy"
  - "Listening"
  - "Trendspotting"
  - "Audits"

#### 5. ServiceCategory (Creative)
- **Category Title**: "Creative"
- **Description**: "Understanding consumer behavior is key to creative breakthroughs. We leverage our global network of strategists, technologists, and creatives to deliver content your consumers will love."
- **Category Image**: Upload creative image
- **Features** (add 14 items):
  - "Concept development"
  - "Brand identity"
  - "Copywriting"
  - "Graphic design"
  - "Motion design"
  - "UI/UX"
  - "Websites"
  - "Content creation"
  - "Production studio"
  - "Photography"
  - "Video production"
  - "Video editing"
  - "Radio"
  - "Podcasting"

#### 6. PartnerBanner
- **Message Line 1**: "For social media marketing"
- **Message Line 2**: "connect with our partner"
- **Partner Name**: "LiKEable"
- **Partner Link**: "https://likeable.com" (or your partner URL)

#### 7. ServiceCategory (Media)
- **Category Title**: "Media"
- **Description**: "Successful media planning, buying, and analytics rely on an in-depth understanding of how consumers spend their time. We meet them where they are and know what holds their attention in an increasingly distracted world."
- **Category Image**: Upload media image
- **Features** (add 14 items - same as Creative)

#### 8. ServiceCategory (Tech)
- **Category Title**: "Tech"
- **Description**: "Trying to figure out ChatGPT, artificial intelligence, machine learning, or another advanced technology? With data scientists, user experience developers, and architects across the globe, we've got your back."
- **Category Image**: Upload tech image
- **Features** (add 11 items):
  - "Business intelligence"
  - "App development"
  - "Web development"
  - "Software development"
  - "Product development"
  - "Project management"
  - "CMS implementation"
  - "Headless CMS"
  - "Data modeling"
  - "DevOps"
  - "Quality assurance"

#### 9. CaseStudiesGrid
- **Section Title**: "Digital marketing case studies"
- **Case Studies** (add 3 items):
  - **Item 1**:
    - Title: "McDermott Will & Emery"
    - Category: "LEGAL"
    - Background Color: "dark"
    - Image: (optional)
  - **Item 2**:
    - Title: "NYU"
    - Category: "EDUCATION"
    - Background Color: "purple"
    - Image: (optional)
  - **Item 3**:
    - Title: "MTA"
    - Category: "TRANSPORTATION"
    - Background Color: "gray"
    - Image: (optional)

#### 10. Cta (Reuse existing slice)
- **Heading**: "Meaningful **work.** Outstanding **results.**" (use bold)
- **Description**: "Award-winning digital development company, providing businesses with product design, development, and technology audit and assessment services."
- **Button Text**: "Let's connect"
- **Button Link**: "/contact"

### Step 4: Publish

- Click "Save"
- Click "Publish"

### Step 5: View Your Page

Visit: `/services/social-media-marketing`

## 🎨 Design Features

✅ **Hero Section** - Large title, description, CTA button, illustration
✅ **Philosophy Banner** - Green navigation bar + dark philosophy content
✅ **Service Icons** - Clean icon grid with labels
✅ **Service Categories** - Repeatable sections with green title bars
✅ **Partner Banner** - Dark promotional banner with decorative dots
✅ **Case Studies** - Grid layout with colored backgrounds
✅ **CTA Section** - Final call-to-action

## 📝 Content Tips

### Images
- **Hero Image**: 500x500px, PNG with transparency
- **Service Icons**: 48x48px, PNG
- **Category Images**: 600x400px, JPG/PNG
- **Case Study Images**: 600x400px (optional)

### Text Formatting
- Use **bold** in rich text fields by wrapping text with `**text**`
- Keep titles concise and impactful
- Use bullet points for feature lists

## 🔄 Reusing for Other Services

This same structure can be used for:
- SEO Services
- PPC Advertising
- Email Marketing
- Content Creation

Just create a new "Service Detail Page" document with a different UID!

## ✨ Benefits

✅ **No Code Changes** - Update content through Prismic
✅ **Consistent Design** - All service pages use same structure
✅ **Easy Management** - Add/remove/reorder sections
✅ **SEO Optimized** - Proper meta tags and structure
✅ **Flexible** - Customize each service page independently

---

**Your social media marketing page is now fully Prismic-powered!** 🎉
