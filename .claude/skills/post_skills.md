---
name: post-skills
description: "Writes the daily Mon-Fri personal LinkedIn hook post for NithishKumar. Use when the user asks for today's LinkedIn post, the daily hook, the personal page post, or the viral AI hook. Each post is a 7-line punchy hook of 100 to 150 words covering yesterday's single most viral AI story — tool, model, funding, or research. Always fetches today's date from Google Calendar, then uses Tavily to research the previous day's biggest AI news. English only. No hashtags. No emojis other than the closing down-arrow. Ends with an [Image Description] block that Claude Code writes itself based on the actual subject of the post."
---

# Personal LinkedIn Hook — Daily Post

For NithishKumar M's personal LinkedIn page. Posting cadence: **Mon-Fri, one viral AI story per day**.

---

## When to use

- "Write today's LinkedIn post"
- "Daily hook"
- "Personal LinkedIn post"
- "Viral AI hook"

---

## Workflow

1. **Fetch today's date** from Google Calendar.
2. **Tavily-search the previous day** for the single biggest viral AI story (tool / model / funding / research). 6–10 searches. Pick ONE.
3. **Write the 7-line hook** (100–150 words) using the template below.
4. **Write the `[Image Description]`** based on what you just wrote.

---

## Template (7 lines, blank line between each)

```
[LINE 1] Four punchy phrases. Title case. Period-separated.

[LINE 2] Concrete scenario in second person.

[LINE 3] The hidden truth with one specific number.

[LINE 4] Emotional anchor or value.

[LINE 5] Two short pain sentences. Period-joined.

[LINE 6] Subject verb1. Verb2. Verb3. Verb4. And verb5.

[LINE 7] Stat. Stat. Backing. This is the #1 [category] in 2026. 👇
```

---

## Reference example — OpusClip

```
One Long Video. Ten Viral Clips. Five Minutes. Fully Automated.

You recorded a 1-hour webinar.

Sitting inside that recording are 10 to 25 viral clips.

Clips your audience would stop scrolling for.

You will never find them manually. You do not have the time.

OpusClip finds them. Cuts them. Captions them. Reframes them. And posts them.

10 million users. 172 million clips generated. SoftBank-backed. This is the #1 AI clipper in 2026. 👇
```

Match this rhythm every time.

---

## Voice rules

- Second person in setup, third person in the solution
- Periods only — no commas, dashes, or colons inside sentences
- Numbers as digits (`10 million`, not `ten million`) except in Line 1
- English only

---

## Critical rules

- **`[Image Description]` block** sits at the very end of every post. Claude Code writes the description itself based on the post's actual subject — the tool, model, funding deal, or research it just covered. The description is **never predefined** and varies with every post.
- 100–150 words total, 7 lines exactly
- One story only — never a roundup
- Story must be from yesterday (D-1), verified by Tavily
- The verdict line always ends `#1 [category] in 2026. 👇`
- Don't generate the Image By yourself
- Your job is to write the Engaging post that's

---

## Forbidden

- ❌ Hashtags
- ❌ Emojis other than the closing `👇`
- ❌ First person (`I`, `me`, `we`)
- ❌ Question marks
- ❌ Em-dashes inside sentences
- ❌ Made-up statistics
- ❌ Tanglish

---

## Checklist

- [ ] 7 lines, blank line between each
- [ ] 100–150 words total
- [ ] Verdict line ends with `#1 [category] in 2026. 👇`
- [ ] No hashtags, no first person, no extra emojis
- [ ] Every stat traceable to a Tavily search result
- [ ] `[Image Description]` block at the end, written based on the post's actual subject
- [ ] Row inserted into Supabase `content_tracker` after publishing
