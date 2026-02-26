# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

**Do not open a public issue for security vulnerabilities.**

Instead, open a private security advisory through the repository's Security tab, or contact the maintainers directly.

## Scope

This project is a collection of markdown files and shell scripts. It does not:
- Process user data
- Authenticate users
- Store credentials
- Make network requests

The primary security concern is ensuring that no private content, credentials, API keys, or personal information is accidentally committed to the repository.

## Best Practices

When using this kit:
- Never commit `.env` files or API keys
- Do not add credentials to resource cards
- Run the public-safe scan before pushing changes
- Review the `.gitignore` to ensure sensitive files are excluded
