## Content Posting in Instagram Via Blotato

Strictly execute this section ONLY after the full Instagram post content is completely generated.
Never execute this section before or during content generation.

Instagram cannot be posted without media. Every Instagram post MUST have a generated image or video attached before posting.

### Step 1 — Scan the Generated Post for the Visual Block

Go through the fully generated post from top to bottom.
Identify the block that follows one of these exact patterns:

[Image: ...]
[Video: ...]

Note the position of the block, whether it is an Image or a Video, and what the description says.

- If the block starts with `[Image:` → this is an **image** post.
- If the block starts with `[Video:` → this is a **video** post and must be treated as an Instagram **reel**.

### Step 2 — Generate the Visual Using Blotato MCP Server

For the visual block found in Step 1:

1. Extract the description text inside the brackets.
2. Pick a Blotato template that matches the visual type:
   - Call `blotato_list_visual_templates` to list templates.
   - For an **image** block, choose an image/infographic/slideshow template.
   - For a **video** block, choose an AI video template (the description specifies an animated, attractive style).
3. Call `blotato_create_visual` with:
   - `templateId`: the template ID chosen above
   - `prompt`: the extracted description text
   - `inputs`: `{}` (let Blotato fill template inputs from the prompt)
   - `render`: true
4. Capture the visual creation `id` returned.
5. Poll `blotato_get_visual_status` with that `id` until status is `done`. Wait at least 15 seconds between polls. Do not poll more frequently.
6. From the `done` response, capture the media URL:
   - For a video → `mediaUrl`
   - For an image/slideshow → `imageUrls`
7. Replace the entire `[Image: ...]` or `[Video: ...]` block with the actual generated media URL.
8. Confirm the replacement is correct before moving to Step 3.

Do not generate the visual yourself — Blotato is the only image and video generation source.

### Step 3 — Verify Before Posting

Before posting, confirm every item below:

- [ ] Post body is complete with hook, content, and 3 to 5 hashtags
- [ ] Caption character count is within the Instagram limit (2,200 characters)
- [ ] Visual is successfully generated and the media URL is captured
- [ ] Media URL is publicly accessible
- [ ] No placeholder text or leftover `[Image: ...]` / `[Video: ...]` block remains in the post body

Do not proceed to Step 4 until all items are confirmed.

### Step 4 — Post to Instagram via Blotato

Once the visual is confirmed and verification is complete:

1. Call `blotato_list_accounts` with `platform: "instagram"` to get the connected Instagram `accountId`.
2. Call `blotato_create_post` with:
   - `accountId`: the Instagram account ID from step 1
   - `platform`: `"instagram"`
   - `text`: the full caption including hashtags
   - `mediaUrls`: the Blotato-generated media URL(s)
   - `mediaType`: `"reel"` only when the visual is a **video** (omit for a standard image post)
3. If the call returns a `postSubmissionId` instead of a published result (it timed out), poll `blotato_get_post_status` with that `postSubmissionId` until status is `published`. Wait at least 10 seconds between polls.
4. Capture the live `publicUrl` from the published response.
5. Confirm the post is published before closing the task.

### Critical Rules for Blotato Posting

- Never skip visual generation — Instagram cannot post without media, so the `[Image: ...]` / `[Video: ...]` block must be replaced with a real media URL before posting.
- Never generate the image or video yourself — always use Blotato MCP Server.
- Always match the platform: pass `platform: "instagram"` and an Instagram `accountId` from `blotato_list_accounts`.
- Treat `[Video: ...]` posts as reels — set `mediaType: "reel"`.
- Never post before all items in Step 3 are confirmed.
- Always return the post confirmation (publicUrl or postSubmissionId) to the user after publishing.
