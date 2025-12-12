# ✅ Homepage Prismic Integration Checklist

## Status: Slices Created ✅

All homepage slices have been successfully recreated! Follow this checklist to complete the integration.

---

## 📋 Step-by-Step Checklist

### ✅ Phase 1: Slices Created (DONE)
- [x] Created 8 homepage slices
- [x] Created slice components (index.tsx)
- [x] Created slice models (model.json)
- [x] Created slices index file
- [x] Created homepage custom type
- [x] Updated homepage page.tsx

### 🔄 Phase 2: Push to Prismic (DO THIS NOW)

**Option A: Using Slice Machine (Recommended)**
1. [ ] Open terminal and run:
   ```bash
   npm run slicemachine
   ```
2. [ ] Wait for Slice Machine to open at `http://localhost:9999`
3. [ ] Click "Push to Prismic" or "Sync" button
4. [ ] Verify all slices appear in Slice Machine

**Option B: Using CLI**
1. [ ] Run in terminal:
   ```bash
   npx @slicemachine/init
   ```

### 📝 Phase 3: Create Homepage in Prismic

1. [ ] Go to your Prismic dashboard: https://positivmarketing-agency.prismic.io
2. [ ] Navigate to "Documents"
3. [ ] Click "Create new" → Select "Homepage"
4. [ ] Set UID to: `homepage`
5. [ ] Fill in SEO metadata:
   - [ ] Meta Title
   - [ ] Meta Description
   - [ ] Meta Image (optional)

### 🎨 Phase 4: Add Slices (Follow HOMEPAGE_PRISMIC_GUIDE.md)

Add slices in this order:

1. [ ] **Hero Slice**
   - [ ] Fill heading, description, button text
   - [ ] Upload hero image
   - [ ] Add 6 client logos

2. [ ] **Services Slice**
   - [ ] Fill heading and description
   - [ ] Add 6 service cards with images and colors

3. [ ] **CTA Slice**
   - [ ] Fill heading, description, button text
   - [ ] Upload CTA image

4. [ ] **Case Studies Slice**
   - [ ] Fill heading and description
   - [ ] Add 3 case study descriptions

5. [ ] **Working Process Slice**
   - [ ] Fill heading and description
   - [ ] Add 6 process steps

6. [ ] **Team Slice**
   - [ ] Fill heading and description
   - [ ] Add 6 team members with avatars

7. [ ] **Testimonials Slice**
   - [ ] Fill heading and description
   - [ ] Add 5 testimonials

8. [ ] **Contact Slice**
   - [ ] Fill heading and description
   - [ ] Upload contact image

### 🚀 Phase 5: Publish and Test

1. [ ] Save all changes in Prismic
2. [ ] Click "Publish" button
3. [ ] Visit your website: http://localhost:3000
4. [ ] Verify all slices display correctly
5. [ ] Test interactive features:
   - [ ] Working Process accordion
   - [ ] Testimonials carousel
   - [ ] Contact form displays

### 🔍 Phase 6: Verification

1. [ ] Check that all images load correctly
2. [ ] Verify all text content displays
3. [ ] Test responsive design on mobile
4. [ ] Check that colors match design
5. [ ] Verify fonts are correct (Space Grotesk)

---

## 📚 Reference Documents

- **Detailed Setup Guide:** `HOMEPAGE_PRISMIC_GUIDE.md`
- **Quick Reference:** `HOMEPAGE_SLICES_SUMMARY.md`
- **Recovery Guide:** `SLICES_RECOVERY_GUIDE.md`

---

## 🆘 Troubleshooting

### Slices not appearing in Slice Machine?
```bash
# Restart Slice Machine
# Press Ctrl+C to stop, then run:
npm run slicemachine
```

### Homepage shows error?
- Make sure you created the "Homepage" document in Prismic
- Verify UID is exactly `homepage`
- Check that document is published

### Images not loading?
- Upload images directly to Prismic
- Don't reference local file paths
- Use Prismic's media library

### Build errors?
```bash
# Clear Next.js cache and rebuild
rm -rf .next
npm run dev
```

---

## 🎯 Current Status

**What's Done:**
- ✅ All 8 slices created
- ✅ Homepage custom type created
- ✅ Page.tsx updated to fetch from Prismic
- ✅ Error handling added
- ✅ Documentation created

**What's Next:**
1. Push slices to Prismic
2. Create homepage document
3. Populate content
4. Publish and test

---

## 💡 Tips

- **Use the guide:** `HOMEPAGE_PRISMIC_GUIDE.md` has exact content for each field
- **Copy-paste:** You can copy content directly from the guide
- **Save often:** Save your work in Prismic frequently
- **Preview:** Use Prismic's preview feature to see changes before publishing

---

## ✨ You're Almost There!

Just follow the checklist above and your homepage will be fully integrated with Prismic CMS! 🎉
