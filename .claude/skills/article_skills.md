---
name: article-skills
description: "Writes the daily Mon-Fri AI Digital Tamizha tool article, delivered as a LinkedIn carousel plus caption. Use when the user asks for today's AIDT article, the daily tool article, the company-website tool post, the AI Digital Tamizha carousel, or says 'today's tool is X', 'write the AIDT article on Y'. Each article profiles ONE AI tool across five audiences — students, freelancers, working professionals, business owners, real estate agents. Output is a text caption (headline hook, AI Meter, pricing, CTA, follow line) plus a 7-slide carousel: slide 0 tool image description, slides 1-5 the five audiences at 40-50 words each, slide 6 the fixed CTA image. ALWAYS uses Tavily first to verify current features and pricing — never trusts model training-cutoff knowledge for specs or prices. The tool has no age restriction; usefulness is what matters. English only."
---

# AI Digital Tamizha — Daily Tool Article (Carousel + Caption)

Daily content for the AI Digital Tamizha company page. Cadence: **Mon-Fri, one tool per day.** Delivered as a **LinkedIn carousel + caption** (posted via Blotato).

The tool is already chosen and dedup-checked before this skill runs (CLAUDE.md handles the 30-day tracker). This skill receives the green-lit tool and creates the content.

---

## When to use

- "Write today's AIDT article"
- "Today's tool is [X]"
- "AI Digital Tamizha carousel on [tool]"
- "Daily tool post"

---

## Workflow

1. **Tavily-first research.** Before writing anything, use the Tavily tool to verify the tool's **current features and pricing**. Model training knowledge is stale — features change, prices change weekly/monthly. Never write a price or feature from memory. 5–8 Tavily searches:
   - `[tool] features 2026`
   - `[tool] pricing India rupees`
   - `[tool] latest update`
   - `[tool] for students / freelancers / business`
   - `[tool] use cases`
2. **Lock the facts.** Every feature and price must come from a Tavily result. If a number can't be verified, leave it out.
3. **Write the caption** (full article-style text).
4. **Write the 7 carousel slides** (slides 1–5 = 40–50 words each).
5. **Write slide 0 image description** based on the tool.
6. **Slide 6 = fixed CTA image** (`newcarousal_cta` in Canva — same every time, nothing written).

---

## Output format

### Part 1 — Caption (text)

```
[HEADLINE LINE 1 — bold claim]. [LINE 2 — big stat]. [LINE 3 — provocative question]?

[Opening hook — 3–4 short lines: who has it, what it does, the India angle]. 👇

📊  AI METER
⚡  Performance      XX%
🎯  Accuracy          XX%  ([short reason])
🟢  Ease of Use      XX%  ([short reason])
✦   Verdict             [ALL-CAPS ONE-LINE VERDICT]

💰  [Pricing — Free / paid tiers in Rs., from Tavily]

[Closing — 2–3 lines on why this tool matters]

💬  [Engagement question]? 👇

Follow AI Digital Tamizha. [N] days and counting.

```

Caption rules:
- Headline = 3 sentences (claim + stat + question)
- AI Meter always has Performance / Accuracy / Ease of Use + ALL-CAPS verdict
- Pricing always in Rs., always from Tavily
- Every stat traceable to a Tavily result

### Part 2 — Carousel (7 slides)

```
SLIDE 0 — Tool image
[Image Description]

SLIDE 1 — Students
[40–50 words: how students use this tool efficiently. 1 punchy line + 2 short use cases.]

SLIDE 2 — Freelancers
[40–50 words: how freelancers use this tool.]

SLIDE 3 — Working Professionals
[40–50 words: how professionals use this tool.]

SLIDE 4 — Business Owners
[40–50 words: how business owners use this tool.]

SLIDE 5 — Real Estate Agents
[40–50 words: how agents use this tool.]

SLIDE 6 — Fixed CTA slide
[Image]
```

Carousel rules:
- **Slides 1–5: 40–50 words each.** Carousel text must be short and scannable — never long paragraphs.
- Each audience slide = 1 punchy opening line + 2 concrete use cases for that audience.
- All 5 audiences in fixed order: Students → Freelancers → Working Professionals → Business Owners → Real Estate Agents.
- Slide 0 `[Image Description]` is written by Claude Code based on the tool it chose — never predefined.
- Slide 6 is the **fixed CTA slide** (`newcarousal_cta` in Canva). It is always the same image. Claude Code writes **nothing** for it — no description, no text. Just place the fixed CTA image as `[Image]`.

---

## Audience framing

- **Students** → assignments, notes, study, projects, presentations
- **Freelancers** → client work, proposals, outreach, hours saved
- **Working professionals** → reports, meetings, recurring tasks, time reclaimed
- **Business owners** → ROI, team productivity, automation, scale
- **Real estate agents** → leads, follow-ups, listings, buyer calls (Tamil Nadu context welcome)

---

## Critical rules

- **Tavily first, always** — features and pricing come from live search, never from model memory. Specs and prices change; stale data makes the post wrong and useless.
- **Slides 1–5 capped at 40–50 words.** No long content in the carousel.
- **Slide 0 `[Image Description]` is written by Claude Code based on the tool it chose** — never predefined, varies every tool.
- **Slide 6 is the fixed CTA image** (`newcarousal_cta` in Canva). Claude Code writes nothing for it — same image every time, just `[Image]`.
- **Content must be accurate and useful for everyone** — every audience slide must give real, correct, genuinely useful ways that audience can use the tool. No filler, no vague claims.
- **No date restriction on the tool** — it can be new or a year old. Usefulness for the audience is the only filter.
- English only.

---

## Forbidden
- ❌ Never use Any Emoji in the post content 
- ❌ Writing features or pricing from model memory instead of Tavily
- ❌ Slides 1–5 longer than 50 words
- ❌ Predefined or empty `[Image Description]` on slide 0
- ❌ Fewer than 5 audience slides, or wrong order
- ❌ Made-up stats, prices, or features
- ❌ Tanglish — English only

---

## Checklist

- [ ] Tavily used first; all features and prices verified from search
- [ ] Caption has headline (3 lines) + AI Meter + pricing (Rs.) + CTA + follow line
- [ ] Slide 0 has an `[Image Description]` written by the Model based on the choosen tool 
- [ ] Slides 1–5 each cover one audience, 40–50 words, correct order
- [ ] Slide 6 is the fixed CTA image (nothing written by Claude Code)
- [ ] Every stat/price traceable to a Tavily result
- [ ] English only

---

## Reference example
The Microsoft Copilot article is the style reference — headline hook, AI Meter (94/95/93 + verdict), five audience blocks, Rs. pricing tiers, "Follow AI Digital Tamizha. [N] days and counting." For the carousel, the audience blocks are condensed to 40–50 words per slide. Match its tone and density, shortened for slides
