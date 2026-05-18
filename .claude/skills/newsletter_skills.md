---
name: aidominators-newsletter
description: "Writes the AI Dominators Tuesday weekly newsletter for Arunkumar S. Use whenever the user asks to draft, write, or create this week's AI Dominators newsletter, the Tuesday newsletter, the AI Dominators weekly, this week's AI roundup, or says things like 'write Tuesday's newsletter', 'AI Dominators for this week', 'next Tuesday issue'. Each newsletter has four signature sections — Top AI Investment Moves, AI Tools Updates, AI Insights, AI Trending Tool of the Week — each with exactly 5 items. Always uses Tavily to search the past 7 days of AI news, funding, tool releases, and infrastructure deals and uses verified numbers only. Uses the fixed Arunkumar S byline block and sequential edition numbering every week. English only. Each section header is followed by an [Image Description] written by Claude Code based on its research and content. The trending-tool section closes with audience-specific use cases for students, freelancers, working professionals, business owners, and real estate agents."

# AI Dominators — Tuesday Weekly Newsletter

This skill writes the **AI Dominators** newsletter authored by **Arunkumar S**. Posting cadence is **Tuesday only — once per week**. Every issue covers the past 7 days of AI news across four fixed sections.

## When to use this skill

Trigger when the user says:
- "write this week's AI Dominators newsletter"
- "Tuesday newsletter for [date]"
- "AI Dominators weekly"
- "this week's AI roundup"
- "next Tuesday issue"
- Anything that implies the weekly Tuesday LinkedIn newsletter for Arunkumar S

## What the user gives you

Just **the publishing date** (e.g. "May 19, 2026"). The skill is responsible for everything else — researching the week, picking the stories, writing the analysis, and formatting the issue.

If no date is given, assume **the upcoming Tuesday** and compute the week range as the previous Wednesday through that Tuesday (7-day window).

## Mandatory workflow

**Step 1 — Determine the week window.** From the publishing date (a Tuesday), the news window is the previous **Wednesday through that Tuesday** (7 days inclusive). State this range in the issue.

**Step 2 — Web-search the past 7 days exhaustively using the Tavily tool.** Run targeted searches by section. Aim for **15–25 searches total** across these themes. If a section does not surface 5 strong items at first, **increase the number of searches** until 5 verified items exist. Do not expand the time window beyond 7 days — search harder, not wider.

*Investment Moves*
- `AI funding announcement this week`
- `AI investment billion latest`
- `Anthropic OpenAI funding round`
- `AI data center deal latest`
- `AI chip cloud infrastructure investment`

*Tool Updates*
- `OpenAI ChatGPT update this week`
- `Claude Anthropic release latest`
- `Google Gemini new feature`
- `Microsoft Copilot update`
- `xAI Grok latest`
- `AI tool launched this week`

*Insights & Trends*
- `AI agents enterprise adoption`
- `AI market forecast`
- `AI risks hallucination deepfake`
- `enterprise AI workflow`

*Trending Tool*
- `most talked about AI tool this week`
- `viral AI launch this week`

**Step 3 — Filter for verifiable, dated stories.** Every item must have a real source, real number, and real date inside the week window. Anything older than 7 days is excluded (or noted as "context"). Skip rumors and unverified leaks.

**Step 4 — Identify the week's overarching theme.** After research, find the single thread tying the biggest stories together. This becomes the **opening tagline** (e.g. *"AI investment is moving from simple apps to strategic infrastructure"*). Without a clear theme, the issue lacks a spine.

**Step 5 — Lock exactly 5 items per section.** Every section — Investment Moves, Tool Updates, Insights, Trending Tool (1 tool) — must hit its required count. If a section is light, return to Step 2 and run more Tavily searches. Never pad with weak filler; instead, broaden your query angle (different region, different sub-topic, different vertical) until 5 verified items emerge.

**Step 6 — Fetch the current edition number.** Query  Supabase using the Supabase database:
```sql
SELECT * FROM Social_Automation WHERE content_type = 'newsletter';
```

** Edition number = take the last edition only based on the newsletter and date add + 1 to the eddition that is your  edition number

**Step 7 — Draft using the exact structure below.**

**Step 8 — Run the pre-delivery checklist** before output.

---

## EXACT newsletter structure

Match the spacing, line breaks, and labels precisely. The newsletter is posted on LinkedIn, so the visual rhythm matters.

### Header block (use verbatim every week — only the tagline, edition, and date change)

```
[ONE-LINE WEEK THEME TAGLINE — distilled from the week's biggest story]

Arunkumar S
Tamil Nadu's First AI Coach | Founder – AI Digital Tamizha and Creator of Panjumittai Story | Helping Students, Professionals, Freelancers, Business Owners & Realtors Use AI Daily | Mission: 10 Million AIDOMINATORS


Edition [N] · [Publishing Date — e.g. May 19, 2026]
This week's message is very clear: [Week range — e.g. May 13–19, 2026]

[2–3 line setup of the week's biggest pattern. Lead with what is happening, end with what readers should do about it.]

[Bullet list of 5–7 themes the week revealed — short noun phrases, no full sentences]

For AI Dominators readers, the takeaway is simple:

[One-line takeaway directive — short, sharp]

Learn AI. Apply AI. Grow with AI.
```

### Section 1 — Top AI Investment Moves

```
Top 5 AI Investment Moves
[Image Description]

1. [Headline with company name + dollar amount]
[2–3 sentences with verified numbers — valuation, round size, investor name, deal structure]

Why it matters: [1–2 sentences explaining the strategic implication]

2. [Headline]
[Description]

Why it matters: [Implication]

[…continue for N items, where N is exactly 5]
```

Rules for this section:
- Exactly 5 items — no fewer, no more
- Every headline names a company and a dollar amount
- Every item has at least one specific dollar figure in the description
- "Why it matters" is always present and always strategic, not descriptive

### Section 2 — AI Tools Updates or Tool Of The Week (choose either of the one based on the research)

```
AI Tools Updates
[Image Description]

1. [Tool Name] [Version or Feature Name]
[Description of what was released — capabilities, context window, modes, model differences. Include specific version numbers, token counts, dates.]

Why it matters: [Strategic implication for users]

Best use case: [Specific concrete use cases — comma-separated phrases. e.g. "Research reports, coding tasks, spreadsheet analysis, business planning, workflow automation."]

2. [Tool Name]
[Description]

Why it matters: [Implication]

Best use case: [Use cases]

[…continue for N items, where N is exactly 5]
```

Rules for this section:
- Exactly 5 items — no fewer, no more
- Headlines name the tool **and** the specific version/feature ("Claude Opus 4.7", not just "Claude")
- Every description has at least one technical specific (token count, model size, feature name)
- "Best use case" is a comma-separated list of 4–6 concrete tasks

### Section 3 — AI Insights

```
AI Insights
[Image Description]

1. [Insight headline — declarative statement, not a question]
[2–3 sentences setting up what is happening and citing evidence — research firms, forecasts, executive statements]

What it means: [1–2 sentences — bigger-picture meaning]

Example: [A concrete scenario showing the insight in action] 
OR 
AI Dominators takeaway: [What students / freelancers / professionals / business owners should do about it]

2. [Insight headline]
[Description]

What it means: [Meaning]

[Example or AI Dominators takeaway]

[…continue for N items, where N is exactly 5]
```

Rules for this section:
- Exactly 5 items — no fewer, no more
- Insights synthesize patterns across multiple stories — they are NOT single news items
- Each one cites at least one named source (Citi, McKinsey, Forrester, IDC, Gartner, Reuters, etc.)
- Alternate between "Example" and "AI Dominators takeaway" closers — both appear within the section

### Section 4 — AI Trending Tool of the Week

```
AI Trending Tool of the Week
[Image Description]

[Tool Name]
This week's trending AI tool is [Tool Name].

[2–3 sentences on what it is, when it launched/updated within the week window, who made it. Include the specific launch date.]

Why this tool is trending
[2–3 sentences explaining why this tool is the standout this week — what shift it represents, what it enables that wasn't possible before.]

Best use cases
For students: [One-sentence use case — name the academic task]

For freelancers: [One-sentence use case — name the client work scenario]

For working professionals: [One-sentence use case — name the recurring office task]

For business owners: [One-sentence use case — name the operational outcome]

For real estate professionals: [One-sentence use case — name the agent workflow, Tamil Nadu context welcome]

AI Dominators Takeaway
[2–3 sentences on why early adopters of this tool will have an edge. Connect to the broader theme of the week.]

Tool of the Week: [Tool Name] 

Category: [Category — Agentic AI, Frontier Model, Multimodal Generation, Voice AI, etc.] 

Best for: [Audience segments, comma-separated] 

Main skill to learn: [The one capability readers should practise to leverage this tool]
```

Rules for this section:
- Pick a tool that genuinely had a launch, major update, or viral moment in the past 7 days
- All 5 audience use cases are required — same order every time
---

## Voice & style rules

**Tone**
- Authoritative but accessible. Arunkumar S is positioning as a coach, not an analyst.
- Short paragraphs. Every section reads in chunks.
- No jargon without unpacking. "TPU chips" gets a quick gloss; "compute capacity" stays in.

**Numbers**
- Every claim has a number, a name, or a date.
- Use raw digits for money ("$40 billion", "Rs.1,750"), commas for thousands ("$4.2 trillion").
- Always cite the source organisation when quoting a forecast ("Citigroup raised", "Reuters reported").

**Structural signatures**
- The week-range line ("This week's message is very clear: [range]") is mandatory
- The motto "Learn AI. Apply AI. Grow with AI." closes the intro every week
- Each item in sections 1 & 2 ends with "Why it matters"
- Each item in section 3 ends with "What it means" + "Example" or "AI Dominators takeaway"
- The four-line reference box closes section 4
- Image Description is not for every subtopic only one on the Main Topic
- Every section header is followed by an `[Image Description]` line. **Claude Code writes the description itself For Image Generation**, based on what it researched and the content it just drafted for that section. It is never predefined. It varies every week.
- Image Description strictly what it researches and content it writes and it must be strictly clear and precise what it should generate

**Audience framing in section 4**
- **Students** → study, notes, revision, practice questions, projects
- **Freelancers** → client research, proposals, outreach, brand work
- **Working professionals** → reports, summaries, weekly updates, recurring work
- **Business owners** → leads, sales responses, customer questions, operations
- **Real estate professionals** → listings, buyer follow-ups, WhatsApp messages, local area insights

**Forbidden**
- ❌ Made-up funding numbers, valuations, or product specs
- ❌ Stories older than 7 days (unless flagged as context)
- ❌ Vague claims with no source ("experts say", "many companies")
- ❌ Tanglish in the body — English only
- ❌ Skipping the byline block or edition number
- ❌ Skipping any of the 5 audience use cases in section 4
- ❌ Fewer than 5 items in any of sections 1, 2, or 3
- ❌ Expanding the news window beyond 7 days to fill the count — search harder instead
- ❌ Skipping the [Image Description] under any section header
- ❌ Leaving the [Image Description] empty or as a placeholder — Claude Code writes a specific description for each section based on that section's actual research and content

---

## The week-theme tagline

The opening tagline is the issue's spine. Build it AFTER research, not before. It should:
- Be one line, declarative, present tense
- Name the underlying shift, not list the stories
- Sit at the very top of the newsletter, before the byline

Past examples to calibrate against:
- *"AI investment is moving from simple apps to strategic infrastructure."*
- *"The AI race is becoming a workflow race."*
- *"Frontier models are no longer the only story — compute is."*

## Pre-delivery checklist

Before sending the newsletter:

- [ ] Publishing date and week range are correct and named
- [ ] Edition number is present in the header (computed from Supabase count + 13)
- [ ] Week-theme tagline sits at the very top
- [ ] Byline block is present verbatim
- [ ] Intro has bullet themes + reader takeaway + "Learn AI. Apply AI. Grow with AI."
- [ ] Section 1 — Investment Moves — **exactly 5 items**, every one with company + dollar amount + Why it matters
- [ ] Section 2 — Tools Updates — **exactly 5 items**, every one with version/feature + Why it matters + Best use case
- [ ] Section 3 — Insights — **exactly 5 items**, every one with named source + What it means + closer
- [ ] Section 4 — Trending Tool — 1 tool, all 5 audience use cases present in correct order
- [ ] Closing reference box has Tool / Category / Best for / Main skill to learn
- [ ] Every number is traceable to a Tavily search result; nothing fabricated
- [ ] Every story dates inside the 7-day window
- [ ] English only throughout
- [ ] Each of the four section headers is followed by an [Image Description] written by Claude Code based on that section's actual research and content (not a placeholder)
- [ ] After the newsletter is finalised, a row is inserted into the Supabase `content_tracker` table

If any item fails, fix before delivering.

## Reference example

The gold-standard reference is the **April 22–28, 2026 issue** featuring the Google–Anthropic $40B investment, Amazon's $25B Anthropic stake, Microsoft's $17.9B Australia move, Applied Digital's $7.5B data center lease, Ineffable Intelligence's $1.1B seed — and ChatGPT Workspace Agents as the trending tool of the week. Match its density, sourcing rigour, and rhythm. Every future issue should feel like it belongs in the same series.