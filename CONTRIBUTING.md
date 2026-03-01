# Contributing

Thank you for your interest in contributing to AI Dev Workflow Kit.

## How to Contribute

### Reporting Issues
- Open an issue describing the problem or suggestion
- Include which files are affected and what behavior you expected

### Adding Resources
The best contribution is a new resource card:
1. Create a card in `.ai-kit/resources/cards/your-resource.md`
2. Follow the existing card format (What it is, When to use, Outputs, Activation phrase, Rules)
3. Add it to `RESOURCE-INDEX.md`
4. Add an activation phrase to `ACTIVATE.md`
5. Submit a pull request

### Modifying Core Files
If you want to change the workflow engine, activation system, or core rules:
1. Open an issue first to discuss the change
2. Explain why the change is needed and what behavior it affects
3. Ensure consistency with `.ai-kit/CANONICAL.md` (workflow, gates, templates, commands)

## Guidelines

- **Clean-room content only.** Do not copy proprietary content into the repo.
- **No external links.** Resource cards should be self-contained. No URLs.
- **Max-2 rule is sacred.** Any change must preserve the 1 PRIMARY + 1 SUPPORT limit.
- **EPCC is the engine.** The Explore → Plan → Code → Verify → Audit loop is non-negotiable.
- **Test your changes.** Run the public-safe scan before submitting.

## Code of Conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
