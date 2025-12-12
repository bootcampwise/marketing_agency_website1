# Solution: Fix BlogPostContent Slice with Image Fields

## Problem
Slice Machine shows "No changes to review" because it thinks the slice in Prismic matches your local version, but you're seeing extra image fields in Prismic.

## Root Cause
The slice was likely created or modified directly in Prismic, or there's a version mismatch that Slice Machine isn't detecting.

## Solution: Force Update the Slice

### Option 1: Delete and Recreate in Prismic (Recommended)

1. **Go to Prismic Dashboard**
2. **Navigate to**: Settings → Custom Types
3. **Find "Blog Post"** custom type
4. **Click to edit it**
5. **In the Slice Zone**, find "BlogPostContent" slice
6. **Remove it** from the allowed slices
7. **Save the custom type**
8. **Now go back to Slice Machine** and push again
9. The slice should now appear as a new change to push

### Option 2: Manually Edit in Prismic

1. **Go to Prismic Dashboard**
2. **Settings → Custom Types → Blog Post**
3. **Click the BlogPostContent slice** in the slice zone
4. **Manually remove the extra image fields**
5. **Keep only these fields**:
   - Section Number (Text)
   - Section Title (Text)
   - Section Content (Rich Text)
6. **Save**

### Option 3: Force Slice Machine to Detect Changes

1. **Stop Slice Machine** if it's running
2. **Delete the slice from Prismic** (Settings → Custom Types → Blog Post → Remove BlogPostContent from slice zone)
3. **Restart Slice Machine**:
   ```bash
   npm run slicemachine
   ```
4. **It should now detect BlogPostContent as a new slice**
5. **Push to Prismic**

### Option 4: Rename the Slice (Quick Fix)

If the above doesn't work, we can rename the slice:

1. **Rename the slice locally**:
   - Change `slices/BlogPostContent` folder to `slices/BlogContent`
   - Update `model.json` inside:
     - Change `"id": "blog_post_content"` to `"id": "blog_content"`
     - Change `"name": "BlogPostContent"` to `"BlogContent"`
   
2. **Update `slices/index.ts`**:
   - Change `blog_post_content: dynamic(() => import("./BlogPostContent"))` 
   - To: `blog_content: dynamic(() => import("./BlogContent"))`

3. **Update custom type** `customtypes/blog_post/index.json`:
   - Change `"blog_post_content"` to `"blog_content"`

4. **Restart Slice Machine** and push - it will see this as a new slice

## Recommended Approach

**I recommend Option 1** - it's the cleanest:

### Step-by-Step:

1. Open Prismic Dashboard
2. Go to **Settings** (gear icon)
3. Click **Custom Types**
4. Find and click **Blog Post**
5. In the JSON editor or visual editor, find the slice zone
6. **Remove BlogPostContent** from the choices
7. **Save**
8. Go back to **Slice Machine**
9. Now it should show BlogPostContent as a change to push
10. **Push to Prismic**
11. Go back to Prismic and **add BlogPostContent back** to the Blog Post custom type's slice zone

## After Fixing

Once the slice is properly synced, you should see only these fields in each BlogPostContent section:

- ✅ Section Number
- ✅ Section Title  
- ✅ Section Content (rich text)
- ❌ NO image fields

## Need Help?

If none of these work, let me know and I can:
1. Create a completely new slice with a different name
2. Or provide a script to force the sync
