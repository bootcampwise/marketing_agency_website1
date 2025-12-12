# Prismic Slice Data Structure Reference

This document shows the exact field structure for each slice in your Prismic repository.

## 🎯 Hero Slice

**Slice ID**: `hero`

### Primary Fields:
- `heading` (Text) - Main hero heading
- `description` (Text) - Hero description text
- `button_text` (Text) - CTA button text
- `hero_image` (Image) - Main hero illustration

### Repeatable Items:
- `logo` (Image) - Client company logos

---

## 🛠️ Services Slice

**Slice ID**: `services`

### Primary Fields:
- `heading` (Text) - Section heading (e.g., "Services")
- `description` (Text) - Section description

### Repeatable Items (Service Cards):
- `title_line_1` (Text) - First line of service title
- `title_line_2` (Text) - Second line of service title
- `service_image` (Image) - Service icon/illustration
- `background_color` (Text) - Card background (e.g., "bg-gray-light", "bg-primary", "bg-dark")
- `text_color` (Text) - Text color (e.g., "text-dark", "text-white")
- `title_background_color` (Text) - Title background (e.g., "bg-primary", "bg-white")

**Example Service Card Data**:
```
title_line_1: "Search engine"
title_line_2: "optimization"
background_color: "bg-gray-light"
text_color: "text-dark"
title_background_color: "bg-primary"
```

---

## 📢 CTA Slice

**Slice ID**: `cta`

### Primary Fields:
- `heading` (Text) - CTA heading
- `description` (Text) - CTA description
- `button_text` (Text) - Button text
- `cta_image` (Image) - CTA illustration

---

## 📊 Case Studies Slice

**Slice ID**: `case_studies`

### Primary Fields:
- `heading` (Text) - Section heading (e.g., "Case Studies")
- `description` (Text) - Section description

### Repeatable Items:
- `case_description` (Text) - Description of each case study

---

## ⚙️ Working Process Slice

**Slice ID**: `working_process`

### Primary Fields:
- `heading` (Text) - Section heading (e.g., "Our Working Process")
- `description` (Text) - Section description

### Repeatable Items (Process Steps):
- `step_number` (Text) - Step number (e.g., "01", "02", "03")
- `step_title` (Text) - Step title
- `step_description` (Text) - Step description

**Example Process Step**:
```
step_number: "01"
step_title: "Consultation"
step_description: "During the initial consultation, we will discuss your business goals..."
```

---

## 👥 Team Slice

**Slice ID**: `team`

### Primary Fields:
- `heading` (Text) - Section heading (e.g., "Team")
- `description` (Text) - Section description
- `show_button` (Boolean) - Whether to show "See all team" button
- `button_text` (Text) - Button text (e.g., "See all team")

### Repeatable Items (Team Members):
- `name` (Text) - Team member name
- `role` (Text) - Team member role/position
- `experience` (Text) - Years of experience or description
- `avatar` (Image) - Team member photo

**Example Team Member**:
```
name: "John Smith"
role: "CEO and Founder"
experience: "10+ years of experience in digital marketing"
avatar: [Upload team member photo]
```

---

## 💬 Testimonials Slice

**Slice ID**: `testimonials`

### Primary Fields:
- `heading` (Text) - Section heading (e.g., "Testimonials")
- `description` (Text) - Section description

### Repeatable Items (Testimonials):
- `quote` (Text) - Testimonial quote
- `author` (Text) - Author name
- `position` (Text) - Author position/company

**Example Testimonial**:
```
quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads..."
author: "John Smith"
position: "Marketing Director at XYZ Corp"
```

---

## 📧 Contact Slice

**Slice ID**: `contact`

### Primary Fields:
- `heading` (Text) - Section heading (e.g., "Contact Us")
- `description` (Text) - Section description
- `contact_image` (Image) - Contact illustration

### Repeatable Items:
None (this slice uses a form component)

---

## 📄 Homepage Custom Type

**Custom Type ID**: `homepage`

### Main Tab:
- `uid` (UID) - Unique identifier (set to "homepage")
- `slices` (Slice Zone) - Contains all the slices above

### SEO & Metadata Tab:
- `meta_title` (Text) - Page title for SEO
- `meta_description` (Text) - Page description for SEO
- `meta_image` (Image) - Social media preview image

---

## 🎨 Color Classes Reference

Use these Tailwind classes for styling:

### Background Colors:
- `bg-gray-light` - Light gray background
- `bg-primary` - Primary brand color (lime green)
- `bg-dark` - Dark background

### Text Colors:
- `text-dark` - Dark text
- `text-white` - White text
- `text-gray-text` - Gray text

---

## ✅ Checklist for Complete Homepage

Make sure your Homepage document in Prismic includes:

- [ ] Hero slice with heading, description, button, and image
- [ ] Hero slice has at least 3-6 client logos
- [ ] Services slice with 6 service cards
- [ ] CTA slice with compelling call-to-action
- [ ] Case Studies slice with 3 case studies
- [ ] Working Process slice with 6 process steps
- [ ] Team slice with 3-6 team members
- [ ] Testimonials slice with 3-5 testimonials
- [ ] Contact slice with contact form
- [ ] SEO metadata filled in

---

## 🔄 How to Verify Data in Prismic

1. Go to https://positivus.prismic.io
2. Open the "Homepage" document
3. For each slice, verify:
   - All required fields are filled
   - Images are uploaded and display correctly
   - Text content is complete and formatted properly
   - Repeatable items have the correct number of entries

4. Click "Save" and then "Publish" when done

---

## 🚀 Testing Locally

After publishing in Prismic:

```bash
# Start the development server
npm run dev
```

Visit http://localhost:3000 to see your homepage with live Prismic data!

The page will automatically fetch the latest published content from Prismic.
