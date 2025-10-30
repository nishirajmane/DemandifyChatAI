# Security Guide for Demandify AI Chat

## 🔒 Security Features

This application includes several built-in security features to protect your API keys and sensitive data:

### 1. API Key Protection
- ✅ API keys are automatically masked in logs (showing only first 8 and last 4 characters)
- ✅ Sensitive data is sanitized before logging
- ✅ Production mode disables detailed logging that could expose sensitive information
- ✅ Request payloads are logged safely without exposing full content

### 2. Secure Logging
- ✅ Custom security utilities mask sensitive data
- ✅ Production-safe logger that reduces log verbosity
- ✅ Automatic sanitization of objects containing sensitive fields
- ✅ Safe API usage logging without exposing keys

### 3. Access Control
- ✅ Access code protection (set via `CODE` environment variable)
- ✅ Multiple access codes supported (comma-separated)
- ✅ User API keys handled securely without server-side storage

### 4. Security Audit
- ✅ Automatic security audit on server startup
- ✅ Checks for common security misconfigurations
- ✅ Warns about potential security issues

## 🛡️ Security Best Practices

### Environment Variables
```bash
# REQUIRED: Set a strong access code
CODE=your-very-secure-password-here

# RECOMMENDED: Disable sensitive logging in production
DISABLE_SENSITIVE_LOGGING=true

# Your API keys (keep these secret!)
OPENAI_API_KEY=sk-your-openai-key-here
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key-here
GOOGLE_API_KEY=your-google-api-key-here
DEEPSEEK_API_KEY=your-deepseek-key-here
```

### Deployment Security
1. **Use HTTPS**: Always deploy with HTTPS in production
2. **Strong Access Codes**: Use complex, unique passwords
3. **Regular Key Rotation**: Change API keys periodically
4. **Monitor Usage**: Track API usage and costs
5. **Environment Isolation**: Use different keys for dev/staging/production

### Network Security
- Deploy behind a reverse proxy (nginx, Cloudflare, etc.)
- Use rate limiting to prevent abuse
- Consider IP whitelisting for admin access
- Enable CORS properly for your domain

### Data Protection
- User conversations are not stored server-side by default
- API keys are not logged in plain text
- Sensitive headers are redacted from logs
- Request/response data is sanitized before logging

## 🚨 Security Checklist

Before deploying to production, ensure:

- [ ] `CODE` environment variable is set to a strong password
- [ ] `DISABLE_SENSITIVE_LOGGING=true` is set
- [ ] All API keys are properly configured
- [ ] HTTPS is enabled
- [ ] Access logs are monitored
- [ ] API usage is tracked
- [ ] Keys are rotated regularly

## 🔍 Security Audit

The application automatically runs a security audit on startup and will warn you about:

- Missing access codes
- Default passwords
- HTTP usage in production
- Sensitive logging enabled in production
- Other common security misconfigurations

## 📞 Reporting Security Issues

If you discover a security vulnerability, please report it to:
- Email: security@demandify.media
- Include: Detailed description, steps to reproduce, potential impact

We take security seriously and will respond promptly to all reports.

## 🔄 Security Updates

- Regularly update dependencies
- Monitor security advisories
- Keep the application updated to the latest version
- Review and audit your configuration periodically

---

**Remember**: Security is an ongoing process, not a one-time setup. Regularly review and update your security measures.