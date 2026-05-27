## Content Posting on YouTube Via Blotato

Strictly execute this section ONLY after the full Short story from `youtube_skills.md` is completely generated.
Never execute this section before or during story generation.

A YouTube Short cannot be posted without a video. Every Short MUST have a generated video attached before posting.
The Short is always a video and must be exactly 0 to 10 seconds, vertical (9:16), and contain no animation.

### Step 1 — Read the Generated Short Story

Go through the fully generated `youtube_skills.md` output from top to bottom and capture each part:

- **Topic** — from the heading `# [Topic] — YouTube Short (0-10s)`.
- **Concept** — the one-line idea.
- **Shot breakdown** — the 0-3s, 3-7s, and 7-10s shots.
- **Visual description** — the on-screen footage description.
- **Include / Avoid** — the elements to keep in and keep out.

Note that this output never contains captions, hashtags, or `[Image: ...]` / `[Video: ...]` blocks. The video prompt is assembled from the Visual description and Shot breakdown in Step 2.

### Step 2 — Generate the Short Video Using Blotato MCP Server

1. Assemble the video prompt by combining the **Visual description** and the **Shot breakdown** into one continuous, filmable description.
2. Pick a Blotato template that matches the Short:
   - Call `blotato_list_visual_templates` to list templates.
   - Choose a **realistic, live-action or cinematic AI video template**.
   - Never choose an animated, cartoon, or motion-graphics template — the story rule is no animation.
3. Call `blotato_create_visual` with:
   - `templateId`: the realistic video template chosen above
   - `prompt`: the assembled video prompt
   - `inputs`: `{ "aspectRatio": "9:16", "durationSeconds": 10 }` (vertical, capped at 10 seconds; let Blotato fill the rest from the prompt)
   - `render`: true
4. Capture the visual creation `id` returned.
5. Poll `blotato_get_visual_status` with that `id` until status is `done`. Wait at least 15 seconds between polls. Do not poll more frequently.
6. From the `done` response, capture the `mediaUrl` for the video.
7. Confirm the generated video is vertical, 0 to 10 seconds long, real footage, and contains no animation.

Do not generate the video yourself — Blotato is the only video generation source.

### Step 3 — Prepare Title and Description, Then Verify

Prepare the posting metadata from the story. Keep it clean and informative — never add hashtags, emojis, or promotional caption copy, consistent with `youtube_skills.md`.

- **Title**: derive from the Topic. Clean, informative, and 100 characters or fewer.
- **Description**: use the Concept line (optionally followed by the Include points as plain text). No hashtags.

Then confirm every item below before posting:

- [ ] Video is successfully generated and the `mediaUrl` is captured
- [ ] Video is 0 to 10 seconds long and vertical (9:16) so YouTube classifies it as a Short
- [ ] Video is real footage with no animation
- [ ] `mediaUrl` is publicly accessible
- [ ] Title is set and within 100 characters
- [ ] Description is clean and informative with no hashtags
- [ ] No placeholder text or leftover brackets remain in the title or description

Do not proceed to Step 4 until all items are confirmed.

### Step 4 — Post to YouTube via Blotato

Once the video is confirmed and verification is complete:

1. Call `blotato_list_accounts` with `platform: "youtube"` to get the connected YouTube `accountId`.
2. Call `blotato_create_post` with:
   - `accountId`: the YouTube account ID from step 1
   - `platform`: `"youtube"`
   - `title`: the prepared title
   - `text`: the prepared description
   - `mediaUrls`: the Blotato-generated video `mediaUrl`
   - `mediaType`: `"short"` (a vertical video of 60 seconds or less publishes as a Short)
3. If the call returns a `postSubmissionId` instead of a published result (it timed out), poll `blotato_get_post_status` with that `postSubmissionId` until status is `published`. Wait at least 10 seconds between polls.
4. Capture the live `publicUrl` from the published response.
5. Confirm the Short is published before closing the task.

### Critical Rules for Blotato Posting

- Never skip video generation — a Short cannot post without media, so a real `mediaUrl` must be captured before posting.
- Never generate the video yourself — always use Blotato MCP Server.
- The Short is always a video, exactly 0 to 10 seconds, and vertical (9:16).
- Never use animation — always pick a realistic, live-action or cinematic template.
- Never add hashtags, emojis, or caption copy — keep the title and description clean and informative, consistent with `youtube_skills.md`.
- Always match the platform: pass `platform: "youtube"` and a YouTube `accountId` from `blotato_list_accounts`.
- Ensure the post classifies as a Short — vertical video, 60 seconds or less (here, 0 to 10 seconds).
- Never post before all items in Step 3 are confirmed.
- Always return the post confirmation (publicUrl or postSubmissionId) to the user after publishing.
