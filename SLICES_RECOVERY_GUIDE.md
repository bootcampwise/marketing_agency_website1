# URGENT: Slices Recovery Guide

## ⚠️ Situation
The `slices/` directory was accidentally deleted. Most slices were not committed to git, so they cannot be automatically restored.

## 🔄 Recovery Options

### Option 1: Restore from Slice Machine (RECOMMENDED)
If you have Slice Machine running and the slices are defined in Prismic:

1. **Stop the current processes:**
   ```bash
   # Press Ctrl+C on both terminals running:
   # - npm run slicemachine
   # - npm run dev
   ```

2. **Pull slices from Prismic:**
   ```bash
   npx @slicemachine/init
   ```
   
   Or if that doesn't work:
   ```bash
   npm run slicemachine
   ```
   Then in the Slice Machine UI, click "Pull from Prismic" or "Sync"

### Option 2: Restore from a Backup
If you have a backup of your project:
1. Copy the entire `slices/` folder from your backup
2. Paste it into the project root

### Option 3: Manual Recreation (Last Resort)
If Options 1 and 2 don't work, you'll need to manually recreate the slices.

---

## 📋 List of Slices That Should Exist

Based on our conversation, your project should have these slices:

### Homepage Slices:
1. **Hero** - Hero section with heading, description, CTA, and image
2. **Services** - Services grid with cards
3. **CaseStudies** - Case studies section
4. **Testimonials** - Testimonials carousel (✅ Already restored)
5. **Contact** - Contact form section
6. **Cta** - Call-to-action section
7. **Team** - Team members section
8. **WorkingProcess** - Working process steps

### Blog Slices:
9. **BlogHero** - Blog page hero with search
10. **BlogPosts** - Blog posts grid
11. **BlogDetailHeader** - Blog detail page header
12. **BlogDetailContent** - Blog detail page content

### Services Slices:
13. **ServicesHero** - Services page hero
14. **ServiceDetail** - Individual service detail cards
15. **ServiceHero** - Service detail page hero
16. **ServiceIcons** - Service icons section
17. **ServiceCategory** - Service category section
18. **PhilosophyBanner** - Philosophy banner
19. **PartnerBanner** - Partner banner
20. **CaseStudiesGrid** - Case studies grid with pagination

### Pricing Slices:
21. **PricingHero** - Pricing page hero
22. **PricingCards** - Pricing cards section

### About Slices:
23. **AboutHero** - About page hero
24. **AboutContent** - About page content

---

## 🚨 IMMEDIATE ACTION REQUIRED

### Step 1: Check Slice Machine
1. Open Slice Machine: `http://localhost:9999` (if running)
2. Check if slices are listed there
3. If yes, click "Push to filesystem" or "Sync"

### Step 2: Check Prismic Dashboard
1. Go to your Prismic dashboard
2. Navigate to "Custom Types"
3. Check if your slices are defined there
4. If yes, you can regenerate them

### Step 3: Contact Me
If the above steps don't work, I can help you recreate the slices manually. I have the code for several slices from our conversation:
- ✅ Testimonials (already restored)
- ✅ Hero (I have the code)
- ✅ Services (I have the code)
- ✅ Contact (I have the code)
- ✅ CaseStudies (I have the code)
- ✅ BlogHero (I have the code)
- ✅ BlogPosts (I have the code)

---

## 📝 What I Can Restore Immediately

I can recreate these slices from our conversation history:
1. Hero
2. Services  
3. CaseStudies
4. Contact
5. Testimonials (✅ Done)
6. BlogHero
7. BlogPosts
8. BlogCard component

**Would you like me to recreate these slices now?**

---

## ⚡ Prevention for Future

1. **Commit to Git regularly:**
   ```bash
   git add .
   git commit -m "Save slices"
   git push
   ```

2. **Create a backup:**
   ```bash
   # Copy entire project to a backup location
   xcopy /E /I /Y "." "../marketing_agency_backup"
   ```

3. **Use Prismic Slice Machine** - Always sync your slices with Prismic

---

## 🆘 Need Help?

Tell me which option you want to try:
1. Try to restore from Slice Machine
2. Restore from a backup
3. Have me recreate the slices manually

I'm ready to help you recover your slices!
