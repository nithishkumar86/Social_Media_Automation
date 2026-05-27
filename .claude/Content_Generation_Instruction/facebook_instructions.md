## Content Posting in Facebook Via Blotato

Strictly execute this section ONLY after the full Facebook post content is completely generated.
Never execute this section before or during content generation.

### Step 1 — Scan the Generated Post for Image Description Block

Go through the fully generated post from top to bottom.
Identify the block that follows this exact pattern:

[Image Description: ...]

Note the position of the block and what the description says.

### Step 2 — Generate Image Using Blotato MCP Server

For the Image Description block found in Step 1:

1. Extract the description text inside the brackets
2. Use the Blotato MCP Server image generation tool
3. Pass the extracted description as the image prompt
4. Wait for Blotato to return the generated image or image URL
5. Replace the entire [Image Description: ...] block with the actual generated image
6. Confirm the replacement is correct before moving to Step 3

Do not generate the image yourself — Blotato is the only image generation source.

### Step 3 — Verify Before Posting

Before posting, confirm every item below:

- [ ] Post body is complete with hook, body, CTA, and hashtags
- [ ] Character count is within Facebook limit
- [ ] Image is successfully generated and URL is captured
- [ ] No placeholder text remains in the post body

Do not proceed to Step 4 until all items are confirmed.

### Step 4 — Post to Facebook via Blotato

Once image is confirmed and verification is complete:

1. Call the Blotato MCP Server post API with:
   - text: the full post body including hashtags
   - mediaUrls: the Blotato-generated image URL
   - platform: facebook
   - accountId: your connected Facebook account ID
2. Confirm the post is published before closing the task

### Critical Rules for Blotato Posting

- Never skip image replacement — the Image Description block must be replaced before posting
- Never generate the image yourself — always use Blotato MCP Server
- Never post before all items in Step 3 are confirmed
- Always return the post confirmation ID to the user after publishing
