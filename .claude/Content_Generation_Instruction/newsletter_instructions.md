## Content Posting in LinkedIn Via Blotato

Strictly execute this section ONLY after the full newsletter content is completely generated.
Never execute this section before or during content generation.

### Step 1 — Scan the generated newsletter for Image Description blocks

Go through the fully generated newsletter from top to bottom.
Identify every block that follows this exact pattern:

[Image Description: ...]

Note the position of each block — which section it belongs to and what the description says.

### Step 2 — Generate each image using Blotato MCP Server

For every Image Description block found in Step 1:

1. Extract the description text inside the brackets
2. Use the Blotato MCP Server image generation tool
3. Pass the extracted description as the image prompt
4. Wait for Blotato to return the generated image or image URL
5. Replace the entire [Image Description: ...] block in the newsletter with the actual generated image
6. Double-check that the image is placed in the exact position where the description appeared
7. Confirm the replacement is correct before moving to the next Image Description block

Do not move to the next image until the current one is confirmed placed correctly.
Do not generate images yourself — Blotato is the only image generation source.

### Step 3 — Post each newsletter section to LinkedIn via Blotato

Once all Image Description blocks are replaced with actual images:

1. Split the newsletter into its sections
2. For each section, call the Blotato MCP Server post API with:
   - text: the section content (reformatted for LinkedIn)
   - mediaUrls: the Blotato-generated image URL for that section
   - platform: linkedin
   - accountId: your connected LinkedIn account ID
3. Confirm each post is scheduled or published before moving to the next section

### Critical Rules for Blotato Posting

- Never skip image replacement — every Image Description block must be replaced before posting
- Never generate images yourself — always use Blotato MCP Server
- Never post before all images are confirmed placed
- Always double-check image placement section by section before proceeding