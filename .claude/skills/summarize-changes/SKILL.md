---
name: summarize-changes
description: Summarizes uncommitted changes and flags anything risky. Use when user asks what changed, wants a commit message, or asks to review their diff.
when_to_use: When the user asks about uncommitted changes, wants a commit message, or asks to review their diff.
argument-hint: "specific file path"
user-invocable: true
disable-model-invocation: true

---

## Current Changes

!`git diff HEAD`

## Instructions

1. Summarize the changes in 2-3 bullet points
2. Flag any risks you notice such as:
   - Missing error handling
   - Hardcoded values
   - Tests that need updating
3. If diff is empty, say "No uncommitted changes found"