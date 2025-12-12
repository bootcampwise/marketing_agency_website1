# 🔧 Image Loading Troubleshooting Guide

## Current Status

✅ **Next.js Config Updated** - Configured to allow all HTTPS images  
✅ **Services Slice Updated** - Added `unoptimized` prop to bypass image optimization  
✅ **Dev Server Restarted** - Running at http://localhost:3000  
✅ **Debugging Added** - Console logs will show image URLs

## Steps to Fix Image Loading

### 1. Check Browser Console

Open your browser's developer console (F12) and look for:
- **Console logs** showing "Service Image URL: ..." - This confirms images exist in data
- **Network errors** - Red errors indicating failed image requests
- **404 errors** - Images not found at the URL

### 2. Verify Image URLs in Prismic

The image URLs from Prismic should look like:
- `https://images.prismic.io/...`
- `https://positivus.cdn.prismic.io/...`

If you see these URLs in the console, the images are being fetched from Prismic correctly.

### 3. Common Issues & Solutions

#### Issue: Images show placeholder "No Image"
**Solution**: The `service_image` field is empty in Prismic
- Go to Prismic dashboard
- Edit the Homepage document
- In Services slice, upload images for each service card

#### Issue: Images fail to load (broken image icon)
**Solution**: Next.js image optimization issue
- ✅ Already fixed with `unoptimized` prop
- Restart browser and clear cache (Ctrl+Shift+R)

#### Issue: CORS or network errors
**Solution**: Prismic CDN blocking
- Check if you're behind a firewall/VPN
- Try accessing image URL directly in browser
- Verify Prismic repository is public

### 4. Manual Image URL Test

1. Open browser console (F12)
2. Look for logged image URLs
3. Copy one URL
4. Paste it directly in browser address bar
5. If image loads → Next.js config issue
6. If image doesn't load → Prismic/network issue

### 5. Alternative: Use Regular img Tag (Temporary)

If Next.js Image component still doesn't work, you can temporarily use regular img tags:

Replace in `slices/Services/index.tsx`:
```tsx
<Image
    src={service.service_image.url}
    alt={service.service_image.alt || "Service icon"}
    width={165}
    height={129}
    className="object-contain w-[165px] h-[129px]"
    unoptimized
/>
```

With:
```tsx
<img
    src={service.service_image.url}
    alt={service.service_image.alt || "Service icon"}
    className="object-contain w-[165px] h-[129px]"
/>
```

### 6. Check Prismic Image Fields

In your Prismic dashboard, verify:
1. Images are **uploaded** (not just linked)
2. Images are in the **correct field** (`service_image`)
3. Document is **published** (not just saved as draft)

### 7. Hard Refresh

Sometimes browser cache causes issues:
- **Windows/Linux**: Ctrl + Shift + R
- **Mac**: Cmd + Shift + R
- Or clear browser cache completely

## Current Configuration

### next.config.js
```javascript
images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',  // Allows ALL HTTPS domains
        },
    ],
}
```

### Services Slice
- ✅ Using `unoptimized` prop
- ✅ Console logging image URLs
- ✅ Proper fallback for missing images

## What to Check Right Now

1. **Open http://localhost:3000**
2. **Open browser console (F12)**
3. **Look for**:
   - "Service Image URL: ..." logs
   - Any red error messages
   - Network tab showing image requests

4. **If you see image URLs in console**:
   - Copy one URL
   - Open it in a new tab
   - If it loads → Next.js issue (already fixed)
   - If it doesn't load → Prismic/upload issue

5. **If you see "No Image" placeholders**:
   - Images aren't uploaded in Prismic
   - Go to Prismic and add images

## Expected Behavior

✅ **Working**: Images load and display in service cards  
✅ **Console**: Shows image URLs being fetched  
✅ **Network**: Shows successful image requests (200 status)

## Still Not Working?

If images still don't show after all these steps:

1. **Share the console output** - Copy any error messages
2. **Share an image URL** - From the console logs
3. **Check Prismic** - Verify images are actually uploaded

The most common issue is that images aren't uploaded in Prismic yet. Make sure to:
- Upload images in Prismic dashboard
- Publish the document
- Hard refresh the browser

---

**Next Steps**: Open http://localhost:3000, check the console, and let me know what you see!
