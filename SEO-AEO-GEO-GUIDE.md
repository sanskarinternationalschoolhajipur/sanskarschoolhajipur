# SEO, AEO and GEO guide: Sanskar International School Hajipur

SEO = being found on Google/Bing. AEO = being the direct answer in featured snippets and voice answers. GEO = being quoted correctly by AI assistants (ChatGPT, Gemini, Claude, Perplexity, Copilot, Google AI Overviews).
Nobody can guarantee rankings or AI citations. This package makes the site easy to read, trust and quote, and lists the off-site work that decides the result.

## 1. What is already built into the site
### SEO (search engines)
- Unique title and meta description on every page, one H1 per page, clean headings, descriptive image alt text.
- Canonical URL on every page pointing to https://www.sanskarinternationalschool.com (so the .in domain does not compete with it).
- sitemap.xml (all 9 pages, lastmod dates) and robots.txt (search and AI crawlers allowed).
- Open Graph and Twitter preview tags with a share image (WhatsApp, Facebook, LinkedIn previews).
- hreflang en-IN, geo meta tags (Bihar, Hajipur), robots meta with large snippet and image previews.
- Fast, static pages: self-hosted fonts, compressed images, no heavy libraries. Mobile layout tested.
- Internal links: every page links to all other pages in the header and footer.
### AEO (answer engines)
- FAQ page with FAQPage structured data, 10 short factual answers written to be quoted as-is.
- school-facts.html: a one-paragraph direct answer ("what is Sanskar International School Hajipur") plus a facts table.
- Speakable markup on every page for voice assistants.
- Parent Q&A and question-style headings on Home and Why Us.
### GEO (generative engines)
- Structured data (JSON-LD) as one linked graph: School/EducationalOrganization, WebSite, WebPage types, BreadcrumbList, FAQPage. Includes CBSE affiliation number, founding year, both campus addresses, opening hours, phone numbers, areas served, parent organisation, social profiles.
- llms.txt (short summary and page list) and llms-full.txt (complete facts, FAQs, leadership, academics) for AI tools.
- Consistent name, address and phone (NAP) on every page.
- The facts are stated plainly and repeated consistently, which is what AI systems quote.

## 2. After you upload (do within the first week)
1. Google Search Console: add the property https://www.sanskarinternationalschool.com (Domain property via Cloudflare DNS is easiest). Submit /sitemap.xml. Use URL Inspection > Request indexing for Home, Admissions and Contact.
2. Bing Webmaster Tools: sign in, import from Google Search Console, submit the sitemap. (Bing data feeds ChatGPT search, Copilot and others.)
3. Test structured data: search.google.com/test/rich-results with each page URL. Fix any warning shown.
4. Test social previews: share a page link in WhatsApp; use Facebook Sharing Debugger and LinkedIn Post Inspector if the image looks old.
5. Speed check: pagespeed.web.dev for the Home page (mobile). Aim for green scores; tell me if anything is red and I will fix it.

## 3. Off-site work that matters most (this decides local ranking and AI answers)
- Google Business Profile: create two profiles, one for the Hajipur campus and one for Sandalpur (Patna). Category "CBSE school" or "School". Use the exact name, address, phone and hours from the site. Add photos, post monthly, ask parents for reviews and reply to every review.
- Consistent listings: same name, address and phone on Justdial, Sulekha, Facebook, Instagram, YouTube, LinkedIn, Bing Places, Apple Maps, school directories (Schoolmykids, Shiksha, CollegeDunia-style school listings) and CBSE/UDISE+ profiles. Mismatches confuse both Google and AI tools.
- Link the website from every profile (Instagram bio, YouTube About, LinkedIn page, Facebook page).
- Reviews and mentions: local news, education portals and event coverage that mention "Sanskar International School Hajipur" with the website link. AI assistants weigh third-party mentions heavily.
- Use one spelling everywhere: "Sanskar International School Hajipur".

## 4. Content to add over the next 3 months (strongest GEO/AEO gains)
1. "How to choose a CBSE school in Hajipur" (a checklist article, 800+ words, links to Admissions and Facts pages).
2. "Admission process and documents" page with real dates, age criteria and fee ranges once you are ready to publish them. This is the question parents search most.
3. Events, results and achievements with dates (Annual Day, Earth Day, toppers). Fresh, dated pages show the school is active.
4. A Hindi version of Home, Admissions and FAQs (many local searches are in Hindi or Hinglish: "Hajipur me best school", "CBSE school Hajipur admission"). Tell me and I will build it with hreflang.
5. Teacher and leadership profiles with photos (adds trust signals).
6. Real photos and short videos of classrooms, labs and sports, with captions (the current phone photos limit visual trust).

## 5. Keywords and questions to target
- best CBSE school in Hajipur / CBSE school Hajipur Bihar / English medium school Hajipur
- school admission Hajipur / admission open Hajipur school / Play school to class 12 Hajipur
- CBSE school Sandalpur Patna / CBSE school near Gaurichak (only if the campus there is confirmed)
- school with CCTV and bus facility Hajipur
- Sanskar International School Hajipur fees, admission, contact (brand queries: make sure the site answers each)

## 6. How to test GEO (monthly, takes 10 minutes)
Ask ChatGPT, Gemini, Perplexity and Copilot: "Best CBSE schools in Hajipur", "Tell me about Sanskar International School Hajipur", "Does Sanskar International School Hajipur have a bus facility?", "Admission process at Sanskar International School Hajipur". Note whether the school appears and whether facts are right. If a fact is wrong, fix or add it on facts/FAQ pages, update llms-full.txt, and publish a dated post.

## 7. Keep it accurate (maintenance)
- When fees, dates, phone numbers or classes change: update the page, the footer, school-facts.html, FAQs, llms.txt, llms-full.txt, sitemap lastmod, and your Google Business Profiles on the same day.
- Do not hide text, stuff keywords or copy other schools' content: it harms both search and AI visibility.
- Placeholders to replace with confirmed facts: stream descriptions on Academics, any facility not mentioned on your original site.

## 8. File list
robots.txt, sitemap.xml, llms.txt, llms-full.txt, school-facts.html, faqs.html (FAQ markup), JSON-LD in every page head, CNAME, README-DEPLOY.md, GITHUB-UPDATE-GUIDE.md, this guide.
