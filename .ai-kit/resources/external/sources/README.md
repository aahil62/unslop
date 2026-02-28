# External Source Snapshots

Place your own resource source files here. Organize by source type:

```
sources/
├── notes/        ← Exported notes or page snapshots (.md)
├── repos/        ← Repository READMEs or prompts (.md)
├── docs/         ← Summaries, documentation, or transcripts (.md)
└── README.md     ← This file
```

## How to Add a Source

1. **Export or copy** the content into a `.md` file in the appropriate subdirectory.
2. **Create a matching card** in `../cards/` using the card template structure (see existing cards for format).
3. **Register** the resource in `../EXTERNAL-RESOURCE-REGISTRY.md`.

## Rules

- Each source file should have a matching card in `../cards/`.
- Cards summarize the source — the agent reads cards, not raw sources.
- Do not commit API keys, tokens, or secrets into source files.
