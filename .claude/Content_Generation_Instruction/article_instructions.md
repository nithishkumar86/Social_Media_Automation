# Article Instructions — Build & Post the Carousel

These instructions run **after** the article content is written using `article_skills.md`. By this point you already have:
- The caption text (headline, AI Meter, pricing, CTA, follow line)
- Slide 0 `[Image Description]`
- Slides 1–5 audience content (40–50 words each)
- Slide 6 = the fixed CTA image (`newcarousal_cta` in Canva)

Now assemble the 7 images and post. Follow these steps in order.

---

## Step 1 — Generate Slide 0 (tool image) with Blotato

Use the Blotato MCP to generate the tool/cover image **from the `[Image Description]`** that Claude Code wrote for slide 0.

- `blotato_create_visual` → pass the slide 0 `[Image Description]` as the prompt
- `blotato_get_visual_status` → poll until status is `done` (wait at least 15s between polls)
- Save the returned image URL → this is **image 0**

---

## Step 2 — Generate Slides 1–5 (5 text images) with Blotato

Generate **5 text images**, one per audience slide. Each image is filled with that slide's content:

- Image 1 ← Slide 1 content (Students)
- Image 2 ← Slide 2 content (Freelancers)
- Image 3 ← Slide 3 content (Working Professionals)
- Image 4 ← Slide 4 content (Business Owners)
- Image 5 ← Slide 5 content (Real Estate Agents)

For each one:
- `blotato_create_visual` → fill the image with that slide's text content
- `blotato_get_visual_status` → poll until `done`
- Save each returned image URL → images 1 through 5

Keep the order exact: slide 1 → image 1, slide 2 → image 2, and so on up to slide 5 → image 5.

---

## Step 3 — Fetch Slide 6 (fixed CTA) from Canva

Use the Canva tool to fetch the fixed CTA template `newcarousal_cta` and use it for slide 6.

- Find the design `newcarousal_cta` (design ID `DAHKMR750RQ`)
- Export it to get the image URL → this is **image 6**
- This slide is always the same. Do not edit or generate anything for it.

---

## Step 4 — Recheck everything before posting

Before posting, verify:
- All 7 images exist in order: image 0 (tool), images 1–5 (audiences), image 6 (CTA)
- Each audience image (1–5) is filled with the correct slide's content, in the right order
- Slide 6 is the fixed `newcarousal_cta` image
- The caption text is ready (headline, AI Meter, pricing, CTA, follow line)
- Every feature/price in the caption came from Tavily — nothing from memory

If anything is wrong or missing, fix it before Step 5.

---

## Step 5 — Post the article with Blotato

Once everything checks out, post the carousel to LinkedIn using the Blotato MCP.

- `blotato_create_post`
- `platform` = linkedin
- `text` = the caption
- `mediaUrls` = the 7 image URLs **in order**: `[image0, image1, image2, image3, image4, image5, image6]`

That's it — the article carousel is posted.

---

## Order summary

```
Slide 0  → Blotato generates tool image from [Image Description]
Slide 1  → Blotato text image filled with Students content
Slide 2  → Blotato text image filled with Freelancers content
Slide 3  → Blotato text image filled with Working Professionals content
Slide 4  → Blotato text image filled with Business Owners content
Slide 5  → Blotato text image filled with Real Estate Agents content
Slide 6  → Canva fixed CTA image (newcarousal_cta)
Recheck  → all 7 images + caption correct
Post     → Blotato posts to LinkedIn as a carousel
```
