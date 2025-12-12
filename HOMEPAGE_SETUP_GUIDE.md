# Complete Guide: Push Slices to Prismic and Add Homepage Data

## ✅ All Slices Created Successfully!

Your project now has all 8 slices ready:
1. ✅ Hero
2. ✅ Services  
3. ✅ Cta
4. ✅ CaseStudies
5. ✅ WorkingProcess
6. ✅ Team
7. ✅ Testimonials
8. ✅ Contact

## 📤 Step 1: Push Slices to Prismic

### Option A: Using Slice Machine UI (Recommended)

1. **Open Slice Machine** (should already be running at http://localhost:9999)
   
2. **Click "Review changes"** button (you should see changes detected)

3. **Review the slices** that will be pushed:
   - Hero
   - Services
   - Cta
   - CaseStudies
   - WorkingProcess
   - Team
   - Testimonials
   - Contact
   - Homepage custom type

4. **Click "Push to Prismic"** to sync all slices to your "positivus" repository

5. **Wait for confirmation** that the push was successful

### Option B: Using Command Line

If Slice Machine UI doesn't work, you can push using the command line:

```bash
npx @slicemachine/cli push
```

## 📝 Step 2: Create Homepage Document in Prismic

1. **Go to your Prismic dashboard**: https://positivus.prismic.io

2. **Click "Documents"** in the left sidebar

3. **Click "Create new"** button

4. **Select "Homepage"** from the list of document types

5. **Fill in SEO & Metadata** (optional but recommended):
   - Meta Title: "Positivus - Digital Marketing Agency"
   - Meta Description: "Our digital marketing agency helps businesses grow..."
   - Meta Image: Upload a social media preview image

## 🎨 Step 3: Add Slices to Homepage

Click **"Add a slice"** and add slices in this order:

### 1. Hero Slice
**Primary Fields:**
- Heading: "Navigating the digital landscape for success"
- Description: "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation."
- Button Text: "Book a consultation"
- Hero Image: Upload your hero illustration

**Repeatable Items (Client Logos):**
- Add 5-6 client company logos

---

### 2. Services Slice
**Primary Fields:**
- Heading: "Services"
- Description: "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"

**Repeatable Items (6 Service Cards):**

**Card 1:**
- Title Line 1: "Search engine"
- Title Line 2: "optimization"
- Service Image: Upload SEO icon
- Background Color: `bg-gray-light`
- Text Color: `text-dark`
- Title Background Color: `bg-primary`

**Card 2:**
- Title Line 1: "Pay-per-click"
- Title Line 2: "advertising"
- Service Image: Upload PPC icon
- Background Color: `bg-primary`
- Text Color: `text-dark`
- Title Background Color: `bg-white`

**Card 3:**
- Title Line 1: "Social Media"
- Title Line 2: "Marketing"
- Service Image: Upload social media icon
- Background Color: `bg-dark`
- Text Color: `text-white`
- Title Background Color: `bg-white`

**Card 4:**
- Title Line 1: "Email"
- Title Line 2: "Marketing"
- Service Image: Upload email icon
- Background Color: `bg-gray-light`
- Text Color: `text-dark`
- Title Background Color: `bg-primary`

**Card 5:**
- Title Line 1: "Content"
- Title Line 2: "Creation"
- Service Image: Upload content icon
- Background Color: `bg-primary`
- Text Color: `text-dark`
- Title Background Color: `bg-white`

**Card 6:**
- Title Line 1: "Analytics and"
- Title Line 2: "Tracking"
- Service Image: Upload analytics icon
- Background Color: `bg-dark`
- Text Color: `text-white`
- Title Background Color: `bg-primary`

---

### 3. CTA Slice
**Primary Fields:**
- Heading: "Let's make things happen"
- Description: "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
- Button Text: "Get your free proposal"
- CTA Image: Upload illustration

---

### 4. CaseStudies Slice
**Primary Fields:**
- Heading: "Case Studies"
- Description: "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"

**Repeatable Items (3 Case Studies):**

**Case 1:**
- Case Description: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."

**Case 2:**
- Case Description: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."

**Case 3:**
- Case Description: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."

---

### 5. WorkingProcess Slice
**Primary Fields:**
- Heading: "Our Working Process"
- Description: "Step-by-Step Guide to Achieving Your Business Goals"

**Repeatable Items (6 Process Steps):**

**Step 1:**
- Step Number: "01"
- Step Title: "Consultation"
- Step Description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."

**Step 2:**
- Step Number: "02"
- Step Title: "Research and Strategy Development"
- Step Description: "We conduct thorough research and develop a comprehensive strategy that aligns with your business goals and target audience."

**Step 3:**
- Step Number: "03"
- Step Title: "Implementation"
- Step Description: "Our team implements the strategy using the latest tools and techniques to ensure maximum effectiveness."

**Step 4:**
- Step Number: "04"
- Step Title: "Monitoring and Optimization"
- Step Description: "We continuously monitor campaign performance and make data-driven optimizations to improve results."

**Step 5:**
- Step Number: "05"
- Step Title: "Reporting and Communication"
- Step Description: "Regular reports and open communication keep you informed about campaign progress and results."

**Step 6:**
- Step Number: "06"
- Step Title: "Continual Improvement"
- Step Description: "We analyze results and refine strategies to ensure ongoing success and growth for your business."

---

### 6. Team Slice
**Primary Fields:**
- Heading: "Team"
- Description: "Meet the skilled and experienced team behind our successful digital marketing strategies"
- Show Button: Yes
- Button Text: "See all team"

**Repeatable Items (3-6 Team Members):**

**Member 1:**
- Name: "John Smith"
- Role: "CEO and Founder"
- Experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
- Avatar: Upload team member photo

**Member 2:**
- Name: "Jane Doe"
- Role: "Director of Operations"
- Experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
- Avatar: Upload team member photo

**Member 3:**
- Name: "Michael Brown"
- Role: "Senior SEO Specialist"
- Experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
- Avatar: Upload team member photo

*(Add more team members as needed)*

---

### 7. Testimonials Slice
**Primary Fields:**
- Heading: "Testimonials"
- Description: "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"

**Repeatable Items (3-5 Testimonials):**

**Testimonial 1:**
- Quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
- Author: "John Smith"
- Position: "Marketing Director at XYZ Corp"

**Testimonial 2:**
- Quote: "Positivus helped us completely transform our digital marketing strategy. Their expertise in SEO and content marketing has driven remarkable results for our business."
- Author: "Emily Johnson"
- Position: "CEO at ABC Company"

**Testimonial 3:**
- Quote: "The team at Positivus is incredibly knowledgeable and always goes above and beyond to ensure our campaigns are successful. Highly recommended!"
- Author: "Michael Davis"
- Position: "Founder at StartupXYZ"

---

### 8. Contact Slice
**Primary Fields:**
- Heading: "Contact Us"
- Description: "Connect with Us: Let's Discuss Your Digital Marketing Needs"
- Contact Image: Upload contact illustration

---

## 💾 Step 4: Save and Publish

1. **Click "Save"** to save your changes as a draft
2. **Review all slices** to ensure data is correct
3. **Click "Publish"** to make the homepage live

## 🚀 Step 5: View Your Homepage

1. **Start the development server** (if not already running):
   ```bash
   npm run dev
   ```

2. **Open your browser** and go to: http://localhost:3000

3. **You should see your homepage** with all data from Prismic!

## 🔧 Troubleshooting

### If you see "Homepage Not Found in Prismic":
- Make sure you've published the homepage document (not just saved as draft)
- Verify the document type is named "homepage" (lowercase)
- Check that you're connected to the correct Prismic repository ("positivus")

### If slices don't appear in Slice Machine:
- Restart Slice Machine: Stop it (Ctrl+C) and run `npm run slicemachine` again
- Make sure you're logged in to your Prismic account
- Verify the repository name in `slicemachine.config.json` is "positivus"

### If images don't display:
- Make sure you've uploaded images in Prismic
- Check that image fields are not empty
- Verify image URLs are accessible

## 📊 Project Status

✅ **All 8 slices created**
✅ **Homepage custom type configured**
✅ **Project connected to "positivus" repository**
✅ **TypeScript types generated**
✅ **Homepage configured to fetch from Prismic**

## 🎯 Next Steps

After completing the above steps:
1. Your homepage will display dynamic content from Prismic
2. You can edit content anytime in Prismic dashboard
3. Changes will reflect immediately in development mode
4. For production, rebuild the site to see updates

---

**Need help?** Check the `SLICE_DATA_STRUCTURE.md` file for detailed field structures.
