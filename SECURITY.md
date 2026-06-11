# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

**Do not open a public issue for security vulnerabilities.**

Instead, open a private security advisory through the repository's Security tab, or contact the maintainers directly.

## Scope

This project is a Claude Code plugin: markdown skill files plus small Node
verification scripts (`scripts/*.mjs`). The scripts drive a local Playwright
browser against a dev server you run (`localhost`), and read your project's
source files to scan for design issues. They do not:
- Process or transmit user data to third parties
- Authenticate users or store credentials
- Make network requests beyond the local site you point them at

The primary security concern is ensuring that no private content, credentials,
API keys, or personal information is accidentally committed to the repository.

## Best Practices

When using this plugin:
- Never commit `.env` files or API keys
- Point the scripts only at sites/URLs you trust
- Review the `.gitignore` to ensure sensitive files are excluded
