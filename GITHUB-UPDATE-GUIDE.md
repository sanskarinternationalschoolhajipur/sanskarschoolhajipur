# How to update the website on GitHub

Your site is served by GitHub Pages (with Cloudflare in front). These steps replace the old site with the new one.
Folder you will upload: the contents of `sanskar-website.zip` (after extracting). Do NOT upload the "standalone" zip.

## Before you start (2 minutes)
1. Extract `sanskar-website.zip` (right-click > Extract All). You should see: index.html, about.html, ... school-facts.html, css/, js/, assets/, robots.txt, sitemap.xml, llms.txt, llms-full.txt, CNAME.
2. Open your repository on github.com. Safety copy: click the branch dropdown, type `backup-old-site`, choose "Create branch". Switch back to your main branch afterwards.

## Method A: upload in the browser (no software needed)
1. Open the repository, main branch.
2. Delete the old files: open each old .html / css / js / images file or folder > the "..." menu > Delete file > Commit. (If the old site has many files, use Method B, it is faster.)
3. Click "Add file" > "Upload files".
4. Drag everything from the extracted folder into the page: all the .html files, the css, js and assets folders, robots.txt, sitemap.xml, llms.txt, llms-full.txt and CNAME. Drag the folders themselves so the structure is kept. Wait until every file shows as uploaded.
5. Commit message: "New website design". Choose "Commit directly to the main branch". Click "Commit changes".
6. Go to the repository's Actions tab, wait for the "pages build and deployment" run to turn green (1 to 3 minutes).

## Method B: GitHub Desktop or Git (best for future updates)
1. Install GitHub Desktop, sign in, choose File > Clone repository > your school repository.
2. Open the cloned folder on your computer. Delete the old site files (keep the .git folder and any files you still need).
3. Copy everything from the extracted folder into this folder.
4. Back in GitHub Desktop you will see all changes. Write "New website design" as the summary, click "Commit to main", then "Push origin".
Command line equivalent: `git add -A && git commit -m "New website design" && git push`

## After the upload
1. Settings > Pages: Custom domain must show www.sanskarinternationalschool.com and "Enforce HTTPS" must be ticked.
2. Cloudflare: Caching > Configuration > Purge Everything, so visitors do not see the old pages.
3. Open https://www.sanskarinternationalschool.com in a private window and press Ctrl+F5. Check: the curtain transition on page change, all 8 menu pages, the photos, the Admissions form, the phone layout.
4. Open https://www.sanskarinternationalschool.com/robots.txt, /sitemap.xml, /llms.txt: each should show text, not a 404.
5. Second domain (the .in address): follow README-DEPLOY.md section 3 to redirect it to the .com site.
6. Submit the sitemap in Google Search Console and Bing Webmaster Tools (see SEO-AEO-GEO-GUIDE.md).

## If something looks wrong
- Page has no styling or photos: the css, js or assets folder was not uploaded next to the pages. Upload the missing folder.
- Old design still shows: purge Cloudflare cache, then hard refresh (Ctrl+F5). GitHub Pages can take up to 10 minutes.
- Custom domain disappears after an upload: the CNAME file was deleted. Re-add it (it must contain only www.sanskarinternationalschool.com).
- To go back: switch to the `backup-old-site` branch in Settings > Pages (Branch), or revert the commit from the Commits page.

## Updating later
- Change text: edit the .html file (pencil icon on GitHub), commit. Keep names and numbers consistent across pages and in the footer.
- Replace a photo: upload a new file with the same name into assets/img/.
- After any content change, update the date in sitemap.xml (lastmod) and in llms-full.txt (Last updated).
