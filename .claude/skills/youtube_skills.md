---
name: youtube-shorts-story
description: "Writes the story and visual description for a 0-10 second YouTube Short from a single topic. Use whenever the user gives a topic and wants a YouTube Short, Shorts story, Shorts description, short video idea, or a 10-second video concept, even if they just say 'make a short about X' or 'YouTube short: [topic]'. Produces a concise, attractive shot-by-shot visual brief with real footage only. Never writes captions or hashtags, and never uses animation."
when_to_use: "Use this whenever the user provides a topic and wants a YouTube Short. The user gives the topic only; this skill writes everything else."
---

# YouTube Shorts Story

Turn a single topic into the complete story for a 0-10 second YouTube Short: the concept, exactly what the 10 seconds show, and what to include versus avoid. The output is a tight visual brief someone can hand straight to a shooter or editor.


## Input

A topic. That is the only thing required. If the user gives extra detail (audience, vibe, product), fold it in, but never ask for more before producing a draft.

## Output format

Always respond with exactly this structure and nothing else around it:

```
# [Topic] — YouTube Short (0-10s)

Concept: [one informative sentence stating the single idea the 10 seconds deliver]

Shot breakdown:
- 0-3s: [opening shot — the hook the viewer sees first]
- 3-7s: [main shot — the core of the idea, real footage]
- 7-10s: [closing shot — the clear takeaway or final beat]

Visual description: [2-3 sentences describing exactly what is on screen across the short — real, filmable footage. Concise, precise, and attractive. State subject, setting, framing, lighting, and motion plainly.]

Include:
- [key element 1]
- [key element 2]
- [key element 3]

Avoid:
- Animation or motion graphics of any kind
- [1-2 elements that would clutter or distract from this specific topic]
```

## Rules

- The short is exactly 0 to 10 seconds. Every shot must fit inside that window; the breakdown must always cover 0-3s, 3-7s, and 7-10s.
- Real, filmable footage only. Never describe animation, cartoons, motion graphics, or animated text effects. "Avoid" must always list animation first.
- Keep the visual description concise and precise — describe what is literally on screen, not abstract themes. Make it attractive: strong subject, clean framing, good light.
- Tone is clean and informative. State things directly; skip hype words and filler.
- Never write a caption. Never write hashtags. Never add posting copy, titles for the description box, emojis, or calls to subscribe. The deliverable is the story and visuals only.
- Do not pad. If something does not help someone film the short, leave it out.

## Example

Input: `coffee brewing`

Output:

```
# Coffee Brewing — YouTube Short (0-10s)

Concept: A single pour-over from dry grounds to a full cup, shown close and clean.

Shot breakdown:
- 0-3s: Tight overhead shot of fresh grounds being leveled in the filter.
- 3-7s: Slow side-angle of hot water spiraling over the grounds as they bloom.
- 7-10s: The finished cup lifted toward the camera, steam rising.

Visual description: A warm kitchen counter under soft daylight, shot at close range. The camera stays low and tight on the dripper and cup, with shallow depth of field so the background blurs. Steady, slow movements keep the focus on the water, grounds, and steam.

Include:
- Visible steam and the blooming grounds
- Natural, warm side lighting
- Shallow depth of field on the cup

Avoid:
- Animation or motion graphics of any kind
- On-screen text or logos
- Cluttered or busy background
```
