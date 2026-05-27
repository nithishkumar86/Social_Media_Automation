## Post Instructions

### Step 1 — Image Generation
Once the post content is generated, scan for the [Image Description: ...] block.
Extract the description and pass it exactly as a prompt to the Blotato MCP Server image generation tool.
Never generate the image yourself — Blotato MCP Server is the only image source.
Wait for Blotato to return the image URL before proceeding.

### Step 2 — Verify Content and Image
Before publishing, verify:
- Post content is complete and accurate
- Generated image matches the [Image Description: ...] block exactly
- Both content and image are confirmed ready

### Step 3 — Publish to LinkedIn
Once content and image are verified, call the Blotato MCP Server post API with:
- text: the generated post content
- mediaUrls: the Blotato-generated image URL
- platform: linkedin
- accountId: your connected personal LinkedIn accountId

Confirm the post is published before closing the task.