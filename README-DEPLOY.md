# Sanskar International School Hajipur: website deployment

Primary address: **https://www.sanskarinternationalschool.com**
Second address (redirects to the primary): the school's .in domain

## What's inside
- index.html, about.html, academics.html, why-us.html, facilities.html, admissions.html, faqs.html, contact.html, 404.html
- css/site.css, js/site.js, assets/img/ (logo, photos, icons, social-share image)
- CNAME (www.sanskarinternationalschool.com), robots.txt, sitemap.xml, .nojekyll

Each page already has its own title, description, canonical link, Open Graph tags and
school structured data (the FAQ page also has FAQ markup), all pointing to the .com domain.

## 1. Publish on GitHub Pages
1. Open your website repository. Delete or archive the old HTML files, then upload everything in this folder to the repository root (keep the CNAME file).
2. Settings > Pages: source = your branch, folder = / (root). Custom domain = www.sanskarinternationalschool.com. Tick "Enforce HTTPS" once the certificate is ready.

## 2. Cloudflare DNS for the .com domain
- CNAME  www  ->  <your-github-username>.github.io
- Redirect the bare domain (sanskarinternationalschool.com) to https://www.sanskarinternationalschool.com with a Redirect Rule (301).

## 3. Make the .in domain open the same site
GitHub Pages serves only one custom domain per site, so the second domain should redirect to the primary one.
1. Add the .in domain to Cloudflare (a proxied placeholder DNS record is enough, for example A  @  192.0.2.1 and CNAME www -> @).
2. Rules > Redirect Rules > Create rule:
   - When: Hostname equals the .in domain OR equals www.<the .in domain>
   - Then: Dynamic redirect, expression  concat("https://www.sanskarinternationalschool.com", http.request.uri.path), status 301.
3. Confirm the exact spelling of the .in domain. It has been written as both "sanskarschoolhajipur.in" and "sankskarschoolhajipur.in". If you own both spellings, repeat step 1 and add both hostnames to the rule.

## 4. After going live
- Google Search Console: add https://www.sanskarinternationalschool.com and submit /sitemap.xml.
- Test the social preview of a page URL in WhatsApp or the Facebook Sharing Debugger.

## Editing notes
- Colours are defined at the top of css/site.css (:root variables).
- Phone numbers, email and addresses appear in each page and in the footer; search and replace to update them.
- Replace the photos in assets/img/ with your own (keep the file names, or update the page references).
