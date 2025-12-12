# Homepage Prismic Integration Guide

## 🎉 Slices Successfully Recreated!

All homepage slices have been recreated and are ready to use. This guide will help you set up and populate your homepage content in Prismic.

---

## 📋 Step 1: Push Slices and Custom Types to Prismic

1. **Make sure Slice Machine is running:**
   ```bash
   npm run slicemachine
   ```
   This should open Slice Machine at `http://localhost:9999`

2. **In Slice Machine:**
   - Click on "Push to Prismic" or "Sync" button
   - This will upload all your slices and custom types to your Prismic repository

3. **Verify in Prismic Dashboard:**
   - Go to your Prismic dashboard
   - Navigate to "Custom Types"
   - You should see "Homepage" custom type
   - Navigate to "Slices" - you should see all 8 slices

---

## 📝 Step 2: Create Homepage Document

1. **In your Prismic dashboard:**
   - Click on "Documents" in the left sidebar
   - Click "Create new" → Select "Homepage"
   - Set UID to: `homepage`

2. **Fill in SEO & Metadata tab:**
   - **Meta Title:** `Positivus - Digital Marketing Agency`
   - **Meta Description:** `Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.`
   - **Meta Image:** Upload your OG image (optional)

---

## 🎨 Step 3: Add and Configure Slices

Add slices in this order for the best homepage layout:

### 1. Hero Slice

**Primary Fields:**
- **Heading:** `Navigating the digital landscape for success`
- **Description:** `Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.`
- **Button Text:** `Book a consultation`
- **Hero Image:** Upload `/public/hero-illustration.png`

**Items (Client Logos):** Add 6 items:
1. Logo: `/public/logos/amazon-logo.png`
2. Logo: `/public/logos/dribbble-logo.png`
3. Logo: `/public/logos/hubspot-logo.png`
4. Logo: `/public/logos/notion-logo.png`
5. Logo: `/public/logos/netflix-logo.png`
6. Logo: `/public/logos/zoom-logo.png`

---

### 2. Services Slice

**Primary Fields:**
- **Heading:** `Services`
- **Description:** `At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:`

**Items (6 Service Cards):**

**Service 1:**
- Title Line 1: `Search engine`
- Title Line 2: `optimization`
- Service Image: Upload `/public/service-seo.png`
- Background Color: `bg-gray-light`
- Text Color: `text-dark`
- Title Background Color: `bg-primary`

**Service 2:**
- Title Line 1: `Pay-per-click`
- Title Line 2: `advertising`
- Service Image: Upload `/public/service-ppc.png`
- Background Color: `bg-primary`
- Text Color: `text-dark`
- Title Background Color: `bg-white`

**Service 3:**
- Title Line 1: `Social Media`
- Title Line 2: `Marketing`
- Service Image: Upload `/public/service-social.png`
- Background Color: `bg-dark`
- Text Color: `text-white`
- Title Background Color: `bg-white`

**Service 4:**
- Title Line 1: `Email`
- Title Line 2: `Marketing`
- Service Image: Upload `/public/service-email.png`
- Background Color: `bg-gray-light`
- Text Color: `text-dark`
- Title Background Color: `bg-primary`

**Service 5:**
- Title Line 1: `Content`
- Title Line 2: `Creation`
- Service Image: Upload `/public/service-content.png`
- Background Color: `bg-primary`
- Text Color: `text-dark`
- Title Background Color: `bg-white`

**Service 6:**
- Title Line 1: `Analytics and`
- Title Line 2: `Tracking`
- Service Image: Upload `/public/service-analytics.png`
- Background Color: `bg-dark`
- Text Color: `text-white`
- Title Background Color: `bg-primary`

---

### 3. CTA Slice

**Primary Fields:**
- **Heading:** `Let's make things happen`
- **Description:** `Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.`
- **Button Text:** `Get your free proposal`
- **CTA Image:** Upload `/public/cta-illustration.png`

---

### 4. Case Studies Slice

**Primary Fields:**
- **Heading:** `Case Studies`
- **Description:** `Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies`

**Items (3 Case Studies):**

**Case Study 1:**
- Case Description: `For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.`

**Case Study 2:**
- Case Description: `For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.`

**Case Study 3:**
- Case Description: `For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.`

---

### 5. Working Process Slice

**Primary Fields:**
- **Heading:** `Our Working Process`
- **Description:** `Step-by-Step Guide to Achieving Your Business Goals`

**Items (6 Process Steps):**

**Step 1:**
- Step Number: `01`
- Step Title: `Consultation`
- Step Description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`

**Step 2:**
- Step Number: `02`
- Step Title: `Research and Strategy Development`
- Step Description: `We conduct thorough research and develop a comprehensive strategy.`

**Step 3:**
- Step Number: `03`
- Step Title: `Implementation`
- Step Description: `Our team implements the marketing strategies across all channels.`

**Step 4:**
- Step Number: `04`
- Step Title: `Monitoring and Optimization`
- Step Description: `We continuously monitor campaign performance and optimize for better results.`

**Step 5:**
- Step Number: `05`
- Step Title: `Reporting and Communication`
- Step Description: `Regular reports and updates keep you informed of progress and results.`

**Step 6:**
- Step Number: `06`
- Step Title: `Continual Improvement`
- Step Description: `We refine strategies based on data and feedback for ongoing success.`

---

### 6. Team Slice

**Primary Fields:**
- **Heading:** `Team`
- **Description:** `Meet the skilled and experienced team behind our successful digital marketing strategies`
- **Show Button:** `Yes`
- **Button Text:** `See all team`

**Items (6 Team Members):**

**Team Member 1:**
- Name: `John Smith`
- Role: `CEO and Founder`
- Experience: `10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy`
- Avatar: Upload `/public/team-1.png`

**Team Member 2:**
- Name: `Jane Doe`
- Role: `Director of Operations`
- Experience: `7+ years of experience in project management and team leadership. Strong organizational and communication skills`
- Avatar: Upload `/public/team-2.png`

**Team Member 3:**
- Name: `Michael Brown`
- Role: `Senior SEO Specialist`
- Experience: `5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization`
- Avatar: Upload `/public/team-3.png`

**Team Member 4:**
- Name: `Emily Johnson`
- Role: `PPC Manager`
- Experience: `3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis`
- Avatar: Upload `/public/team-4.png`

**Team Member 5:**
- Name: `Brian Williams`
- Role: `Social Media Specialist`
- Experience: `4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement`
- Avatar: Upload `/public/team-5.png`

**Team Member 6:**
- Name: `Sarah Kim`
- Role: `Content Creator`
- Experience: `2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries`
- Avatar: Upload `/public/team-6.png`

---

### 7. Testimonials Slice

**Primary Fields:**
- **Heading:** `Testimonials`
- **Description:** `Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services`

**Items (5 Testimonials):**

**Testimonial 1:**
- Quote: `We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.`
- Author: `John Smith`
- Position: `Marketing Director at XYZ Corp`

**Testimonial 2:**
- Quote: `Positivus has been instrumental in transforming our digital presence. Their SEO strategies helped us rank on the first page for our most important keywords, resulting in a 300% increase in organic traffic. The team's expertise and dedication are unmatched.`
- Author: `Emily Rodriguez`
- Position: `CEO at TechStart Solutions`

**Testimonial 3:**
- Quote: `The social media campaigns created by Positivus exceeded all our expectations. We saw a 150% increase in engagement and our brand awareness has never been stronger. Their creative approach and data-driven strategies make them stand out from the competition.`
- Author: `Michael Chen`
- Position: `Brand Manager at StyleHub`

**Testimonial 4:**
- Quote: `Working with Positivus on our PPC campaigns has been a game-changer. They optimized our ad spend and increased our conversion rate by 85%. The ROI we're seeing is incredible, and their transparent reporting keeps us informed every step of the way.`
- Author: `Sarah Thompson`
- Position: `Marketing Lead at GrowthCo`

**Testimonial 5:**
- Quote: `The content marketing strategy developed by Positivus has positioned us as thought leaders in our industry. Their team creates compelling, SEO-optimized content that resonates with our audience. We've seen a 200% increase in qualified leads since partnering with them.`
- Author: `David Park`
- Position: `VP of Marketing at InnovateTech`

---

### 8. Contact Slice

**Primary Fields:**
- **Heading:** `Contact Us`
- **Description:** `Connect with Us: Let's Discuss Your Digital Marketing Needs`
- **Contact Image:** Upload `/public/contact-illustration.png`

---

## ✅ Step 4: Publish and Test

1. **Save your changes** in Prismic
2. **Click "Publish"** to make the homepage live
3. **Visit your website** to see the Prismic-powered homepage
4. **Verify** that all slices are displaying correctly

---

## 🎨 Customization Tips

- **Colors:** The slices use Tailwind CSS classes like `bg-primary`, `bg-dark`, `bg-gray-light`. Make sure these are defined in your `tailwind.config.ts`
- **Images:** All images should be in the `/public` directory
- **Fonts:** The design uses "Space Grotesk" font family

---

## 🐛 Troubleshooting

**If slices don't appear in Slice Machine:**
1. Restart Slice Machine: Stop and run `npm run slicemachine` again
2. Check that all `model.json` files are valid JSON
3. Check the console for any errors

**If the homepage shows an error:**
1. Make sure you've created and published the "Homepage" document in Prismic
2. Check that the UID is exactly `homepage`
3. Verify your Prismic repository name in `.env`

**If images don't load:**
1. Make sure all images exist in the `/public` directory
2. Upload images directly to Prismic instead of referencing local files
3. Check image paths and file names

---

## 📚 Next Steps

After setting up the homepage, you can:
1. Create additional pages (About, Services, Blog, etc.)
2. Customize slice designs
3. Add more slices for different content types
4. Set up preview mode for content editing

---

## 🎉 You're Done!

Your homepage is now fully integrated with Prismic CMS. You can manage all content through the Prismic dashboard without touching code!
