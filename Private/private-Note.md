1. Using private-*.md for Sensitive NotesQuestion: Does private-*.md in .gitignore Keep Files Local?

- Answer: Yes, exactly! Any file in 1-Projects/*/Notes/ starting with private- (e.g., private-secrets.md, private-ideas.md) is ignored by Git and Obsidian Git, keeping it local (not synced to https://github.com/abcde/2025MoonOrbitVault.git). This is due to the 1-Projects/*/Notes/private-*.mdpattern in your .gitignore.
- How It Works: