# Connecting to Existing Prismic Repository "positivus"

## ✅ Configuration Updated

Your project is now configured to connect to your existing **"positivus"** Prismic repository.

## 📋 Steps to Pull Slices and Sync Data

### Step 1: Access Slice Machine
Slice Machine is now running at: **http://localhost:9999**

Open this URL in your browser to access the Slice Machine interface.

### Step 2: Login to Prismic
1. In Slice Machine, click on **"Login"** or **"Sign in to Prismic"**
2. Use your Prismic account credentials
3. Make sure you're connected to the **"positivus"** repository

### Step 3: Pull Existing Slices from Prismic

Since you already have slices in your Prismic repository, you have two options:

#### Option A: Pull Slices from Prismic (Recommended)
This will download the slice definitions from your Prismic repository to your local project:

1. In Slice Machine, look for a **"Pull from Prismic"** or **"Sync"** button
2. Click it to pull all existing slices from your "positivus" repository
3. This will update your local `slices/` directory with the definitions from Prismic

#### Option B: Push Local Slices to Prismic
If you want to use the slices we've created locally:

1. In Slice Machine, click **"Push to Prismic"**
2. This will sync your local slice definitions to the Prismic repository
3. ⚠️ **Warning**: This may overwrite existing slices in Prismic if they have the same names

### Step 4: Verify Slice Sync

After pulling or pushing, verify that all slices are visible in Slice Machine:
- Hero
- Services
- CTA
- Case Studies
- Working Process
- Team
- Testimonials
- Contact

### Step 5: Create/Update Homepage Document

1. Go to your Prismic dashboard: https://positivus.prismic.io
2. Navigate to **Documents**
3. Look for a **"Homepage"** document
   - If it exists: Open it and verify the slices are populated with data
   - If it doesn't exist: Create a new **"Homepage"** document

### Step 6: Add Slices to Homepage

In the Homepage document:
1. Click **"Add a slice"**
2. Add slices in this order for a complete homepage:
   - Hero
   - Services
   - CTA
   - Case Studies
   - Working Process
   - Team
   - Testimonials
   - Contact

3. Fill in the content for each slice (or verify existing content)
4. Click **"Save"** and then **"Publish"**

### Step 7: Test the Homepage

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000 in your browser
3. You should now see your homepage with data from Prismic!

## 🔧 Troubleshooting

### If slices don't appear in Slice Machine:
1. Make sure you're logged in to the correct Prismic account
2. Verify the repository name is "positivus" in `slicemachine.config.json`
3. Try restarting Slice Machine (Ctrl+C and run `npm run slicemachine` again)

### If the homepage shows "No documents were returned":
1. Make sure you've created a "Homepage" document in Prismic
2. Ensure the document is **published** (not just saved as a draft)
3. Check that the custom type is named exactly "homepage" (lowercase)

### If there's a mismatch between local and Prismic slices:
1. Compare the slice models in Slice Machine with what's in Prismic
2. You may need to pull from Prismic to sync the definitions
3. Or push to Prismic if your local definitions are more up-to-date

## 📊 Current Slice Definitions

Your local project has these slices defined:

1. **Hero** - Main hero section with heading, description, CTA, and client logos
2. **Services** - Service cards with customizable colors and images
3. **CTA** - Call-to-action section with image
4. **Case Studies** - Showcase of case studies
5. **Working Process** - Accordion-style process steps
6. **Team** - Team member cards with avatars
7. **Testimonials** - Client testimonials carousel
8. **Contact** - Contact form section

## 🎯 Next Steps

After syncing with Prismic:
1. Verify all data is displaying correctly on the homepage
2. Update any content as needed in Prismic
3. The homepage will automatically fetch fresh data from Prismic on each page load (in development) or build (in production)

## 📝 Important Notes

- The repository name has been changed from "positivmarketing-agency" to "positivus"
- All TypeScript types have been generated for type safety
- The build is now successful with no errors
- The homepage is configured to fetch data from the "homepage" custom type in Prismic
