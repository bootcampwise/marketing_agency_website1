# Blog Page Setup Guide for Prismic

This guide will help you set up the blog page in Prismic CMS. The blog system consists of two custom types: **Blog Page** (for the main listing page) and **Blog Post** (for individual articles).

## Overview

The blog integration includes:
1. **Blog Page** - Main blog listing page with search functionality
2. **Blog Post** - Individual blog articles with full content management
3. **Dynamic routing** - Automatic URL generation for each blog post

## What Was Created

### Custom Types
1. **`blog_page`** - Single page type for the main blog listing
2. **`blog_post`** - Repeatable type for individual blog articles

### Pages
1. **`/blogs`** - Main blog listing page
2. **`/blogs/[uid]`** - Individual blog post pages (dynamic)

## Step 1: Push Custom Types to Prismic

1. Make sure Slice Machine is running:
   ```bash
   npm run slicemachine
   ```

2. In Slice Machine (http://localhost:9999):
   - Click on "Push to Prismic" or "Changes detected"
   - Review the changes (new custom types: `blog_page` and `blog_post`)
   - Click "Push" to sync everything to Prismic

## Step 2: Create the Blog Page Document

1. Go to your Prismic dashboard
2. Click "Create new" → "Blog Page"
3. Set the UID to `blogs` (this is important!)

### Fill in the Blog Page Fields

**SEO Metadata:**
- **Meta Title**: `Our Blog - Positivus Digital Marketing`
- **Meta Description**: `Read our latest articles and tutorials on digital marketing`
- **Meta Image**: Upload a social sharing image (optional)

**Page Content:**
- **Page Heading**: `Our Blog`
- **Page Description**: `We use an agile approach to test assumptions and connect with the needs of your audience early and often.`
- **Show Search Bar**: Toggle to "Yes" (if you want the search functionality)

4. Click "Save" and then "Publish"

## Step 3: Create Blog Post Documents

Now create individual blog posts. For each blog post:

1. Click "Create new" → "Blog Post"
2. Fill in all the fields (see below)
3. Publish

### Blog Post Fields

**Basic Information:**
- **UID**: Unique slug for the URL (e.g., `web-security-guardian`)
- **Title**: `Guardian of the Digital Realm: Web Security`
- **Excerpt**: Short description (150-200 characters) for the blog card
- **Author Name**: `Jese Leos`
- **Author Image**: Upload author profile picture
- **Publish Date**: Select the publication date
- **Badge Type**: Choose "Tutorial" or "Article"

**Content:**
- **Featured Image**: Upload the main blog post image
- **Content**: Write your full blog post content using the rich text editor
  - You can add headings, paragraphs, lists, images, links, etc.
  - Use heading levels (H2, H3) for proper structure
  - Add images inline if needed

**SEO Metadata:**
- **Meta Title**: SEO-optimized title (optional, defaults to post title)
- **Meta Description**: SEO description (optional, defaults to excerpt)
- **Meta Image**: Social sharing image (optional, defaults to featured image)

### Example Blog Posts to Create

Based on your original data, create these 5 blog posts:

#### Post 1: Web Security Tutorial
- **UID**: `web-security-guardian`
- **Title**: `Guardian of the Digital Realm: Web Security`
- **Excerpt**: `In today's interconnected world, where data breaches and cyber threats are on the rise, web security has become paramount...`
- **Author**: `Jese Leos`
- **Date**: `January 14, 2024`
- **Badge Type**: `Tutorial`

#### Post 2: Static Website
- **UID**: `building-static-website`
- **Title**: `How to quickly deploy a static website`
- **Excerpt**: `Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools...`
- **Author**: `Jese Leos`
- **Date**: `January 20, 2024`
- **Badge Type**: `Tutorial`

#### Post 3: Astro Project
- **UID**: `first-project-astro`
- **Title**: `Our first project with Astro`
- **Excerpt**: `In the ever-evolving world of mobile technology, Samsung has consistently delivered cutting-edge devices...`
- **Author**: `Bonnie Green`
- **Date**: `January 17, 2025`
- **Badge Type**: `Article`

#### Post 4: Canon Photography
- **UID**: `canva-pro-moments`
- **Title**: `Capturing Life's Moments with Canon Excellence`
- **Excerpt**: `Consider human a growth of masterwork in the food of privelkeding by including their value-based life...`
- **Author**: `Bonnie Green`
- **Date**: `January 15, 2024`
- **Badge Type**: `Article`

#### Post 5: Creative Tablets
- **UID**: `sketch-accessibility-tablets`
- **Title**: `Unleash Creativity With These Cutting-Edge Tablets`
- **Excerpt**: `In the world of digital creativity, tablets have become indispensable tools for artists, designers...`
- **Author**: `Bonnie Green`
- **Date**: `January 14, 2024`
- **Badge Type**: `Article`

## Step 4: Verify the Integration

After creating the blog page and blog posts:

1. **Visit the blog listing page**: `http://localhost:3000/blogs`
   - You should see all your blog posts in a grid
   - Search bar should be visible (if enabled)
   - Posts should be sorted by date (newest first)

2. **Click on a blog post**: 
   - Should navigate to `/blogs/[uid]`
   - Full blog post content should display
   - Author info, date, and badge should show
   - Featured image should appear

## How It Works

### Blog Listing Page (`/blogs`)

The page fetches:
- **Blog Page document** - For page settings (heading, description, search toggle)
- **All Blog Posts** - Sorted by publish date (newest first)

```typescript
const [blogPage, blogPosts] = await Promise.all([
    client.getSingle("blog_page"),
    client.getAllByType("blog_post", {
        orderings: [{ field: "my.blog_post.publish_date", direction: "desc" }]
    })
]);
```

### Individual Blog Post (`/blogs/[uid]`)

The page fetches:
- **Single Blog Post** - Based on the URL slug (uid)

```typescript
const post = await client.getByUID("blog_post", params.uid);
```

## Features

### Blog Listing Page
✅ Dynamic heading and description from Prismic  
✅ Optional search bar  
✅ Grid layout with blog cards  
✅ Automatic sorting by date  
✅ Badge display (Tutorial/Article)  
✅ Author info with profile image  
✅ Excerpt preview  
✅ "Read more" links  

### Individual Blog Post Page
✅ Full rich text content  
✅ Featured image display  
✅ Author info with profile picture  
✅ Publish date  
✅ Badge type indicator  
✅ Back to blog navigation  
✅ SEO metadata  
✅ Responsive design  

## Content Management Tips

### Adding a New Blog Post
1. Go to Prismic dashboard
2. Create new "Blog Post" document
3. Fill in all fields
4. Publish
5. ✅ Automatically appears on `/blogs` page

### Editing a Blog Post
1. Find the blog post in Prismic
2. Click "Edit"
3. Make your changes
4. Save and Publish
5. ✅ Changes appear immediately

### Changing Blog Page Settings
1. Go to "Blog Page" document in Prismic
2. Edit heading, description, or search toggle
3. Save and Publish
4. ✅ Changes appear on `/blogs` page

## Troubleshooting

### Blog page shows error message
- **Check**: Make sure you've created the "Blog Page" document
- **Check**: Verify the UID is set to `blogs`
- **Solution**: Create the document and publish it

### No blog posts showing
- **Check**: Make sure you've created at least one "Blog Post" document
- **Check**: Verify the blog posts are published (not just saved)
- **Solution**: Create and publish blog post documents

### Blog post page shows 404
- **Check**: Verify the blog post UID matches the URL
- **Check**: Make sure the blog post is published
- **Solution**: Check the UID and publish status

### Images not displaying
- **Check**: Make sure images are uploaded in Prismic
- **Check**: Verify image fields are filled
- **Solution**: Upload images to the appropriate fields

## Data Structure

### Blog Page Document
```
blog_page (Single)
├── uid: "blogs"
├── meta_title: "Our Blog - Positivus"
├── meta_description: "Read our latest articles..."
├── meta_image: [Image]
├── heading: "Our Blog"
├── description: "We use an agile approach..."
└── show_search: true
```

### Blog Post Document
```
blog_post (Repeatable)
├── uid: "web-security-guardian"
├── title: "Guardian of the Digital Realm"
├── excerpt: "In today's interconnected world..."
├── author: "Jese Leos"
├── author_image: [Image]
├── publish_date: "2024-01-14"
├── badge_type: "Tutorial"
├── featured_image: [Image]
├── content: [Rich Text]
├── meta_title: "Web Security Guide"
├── meta_description: "Learn about web security..."
└── meta_image: [Image]
```

## Next Steps

Once the blog is set up:
1. ✅ Create all your blog posts in Prismic
2. ✅ Test the blog listing and individual post pages
3. ✅ Customize the styling if needed
4. ✅ Add more blog posts over time
5. ✅ Monitor and update content regularly

## SEO Benefits

The blog integration includes:
- ✅ Automatic meta tags generation
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Clean URLs with slugs
- ✅ Proper heading hierarchy
- ✅ Image alt text support

Enjoy your fully integrated Prismic blog! 🎉
