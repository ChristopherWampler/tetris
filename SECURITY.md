# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

This is a learning project with no sensitive data handling. However, if you discover a security issue:

1. **Do NOT** open a public issue
2. Email the maintainer through GitHub (see profile for contact)
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

You can expect:
- Initial response within 48 hours
- Regular updates every 72 hours
- Credit in the fix if desired

## Security Features

This project implements the following security practices:

- ✅ **No user data collection** - No personal information stored
- ✅ **No cookies or tracking** - Privacy-first approach
- ✅ **localStorage only for high scores** - Stored locally on device only
- ✅ **No external API calls** - Except GitHub Pages hosting
- ✅ **Service worker caches only public assets** - No sensitive data cached
- ✅ **No authentication system** - No password handling
- ✅ **Content Security Policy ready** - Can be enabled via headers

## Known Limitations

This is a client-side game with minimal attack surface:
- High scores stored in localStorage can be modified by users (by design)
- No server-side validation of scores
- No multiplayer or networked features

## Security Best Practices for Contributors

When contributing:
- Don't add external dependencies without review
- Don't introduce user input that could lead to XSS
- Don't add server-side storage without encryption
- Don't commit API keys or secrets
- Test PWA installation from HTTPS only

## Disclosure Policy

- Security issues will be addressed promptly
- Fixes will be released as patch versions (0.1.x)
- Credit will be given to reporters unless anonymity is requested
