---
name: instagram-post
description: "Creates a complete Instagram post from a topic the user gives. Use whenever the user wants an Instagram post, IG post, Instagram caption, Instagram content, a social post for Instagram, or asks to 'write a post for Instagram' about any topic. The skill decides whether the visual should be an image or a video based on the topic, writes the visual description manually, writes a professional and engaging caption, and adds 3 to 5 hashtags. Trigger this for any Instagram post request even if the user does not say the word 'caption' or 'hashtag'."
---

# Instagram Post Creator

Turn any topic the user gives into a ready-to-publish Instagram post. The output has exactly three parts in this order: a visual description, the post content, and the hashtags. Nothing else.

## Workflow

Follow these steps every time.

### Step 1 — Decide: image or video

Read the user's topic and decide which visual fits best. Do not ask the user — decide based on the topic.

- Choose an **image** when the topic is static or single-idea: an announcement, a quote, a tip, a product shot, a feature highlight, a milestone, or an infographic-style message.
- Choose a **video** when the topic has motion, steps, or a "show it in action" feel: a tutorial, a feature walkthrough, a before/after, a process, a launch reveal, or anything that is more engaging when it moves.

### Step 2 — Write the visual description (manually)

Write the description yourself based on the user's details. Make it vivid and attractive so it is ready to feed into an image or video generation tool. Describe the scene, subject, colors, mood, composition, and on-image text if any.

- If it is a **video**, the description must specify that the video is **animated and attractive**, built to grab attention and drive views. Describe the motion, transitions, pacing, and energy — not just a still scene.

Wrap the visual description in square brackets and label it `Image` or `Video`.

### Step 3 — Write the post content

Write the caption in a **professional and engaging tone** built for views. Keep it tight, hook the reader in the first line, and give a clear reason to engage. Avoid filler.

### Step 4 — Add hashtags

Add **3 to 5 hashtags**. No fewer than 3, no more than 5. Make them relevant to the topic and placed on the last line.

## Fonts for the post content and hashtags

Instagram renders all caption text (the post content and hashtags) in its own fixed system font — the user cannot change the family or size inside the app. Use these exact values as the reference for how the content will display:

- **Font family:** SF Pro Text on iOS, Roboto on Android (Instagram's system caption font).
- **Font size:** 14px for the caption body, which is the size Instagram renders caption and hashtag text at.

These are fixed by Instagram, so write the content knowing it will appear in this single font and size — keep lines clean and readable at that size.

## Output format

Output strictly in this format and nothing else:

```
[Image: full attractive description of the visual]

Post content goes here.

#hashtag1 #hashtag2 #hashtag3
```

For a video, replace the first line with:

```
[Video: full description of the animated, attractive video]
```

## Example

**Topic from user:** "Claude Code features"

```
[Image: A sleek dark developer terminal glowing on a clean desk, lines of code resolving into a checkmark as Claude Code completes a task. Cool blue and violet accents, soft rim lighting, modern and premium feel. Bold on-image text reads "Code at the speed of thought."]

Your terminal just got a teammate. Claude Code reads your repo, writes the fix, and runs the tests — all from the command line. Less context-switching, more shipping.

What would you delegate first?

#ClaudeCode #DevTools #AICoding #DeveloperProductivity
```
