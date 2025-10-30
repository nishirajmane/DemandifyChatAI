<div align="center">

<h1 align="center">Demandify AI Chat</h1>

✨ Intelligent AI Assistant powered by Demandify Media, with Claude, DeepSeek, GPT4 & Gemini Pro support.

[![Web][Web-image]][web-url]

[Demandify AI Chat](https://chat.demandify.media?utm_source=readme) / [Web App](https://chat.demandify.media) / [Enterprise Solutions](#enterprise-solutions)

[web-url]: https://chat.demandify.media/
[Web-image]: https://img.shields.io/badge/Web-PWA-orange?logo=microsoftedge

[<img src="https://vercel.com/button" alt="Deploy on Vercel" height="30">](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FDemandifyMedia%2Fdemandify-ai-chat&env=OPENAI_API_KEY&env=CODE&project-name=demandify-ai-chat&repository-name=demandify-ai-chat)

</div>

## 🚀 About Demandify Media

Demandify Media is a leading digital innovation company specializing in AI-powered solutions and intelligent automation. Our AI Chat platform provides businesses and individuals with cutting-edge conversational AI capabilities.

## 🎯 Features

- **Multi-Model Support**: Integration with GPT-4, Claude, Gemini Pro, and DeepSeek
- **Enterprise Ready**: Scalable solutions for business needs
- **Privacy First**: Your data stays secure and private
- **Customizable**: Tailored AI assistants for your specific use cases
- **Security Focused**: Built-in security measures to protect your API keys and data

## 🔒 Security

Demandify AI Chat takes security seriously. Here are the built-in security features:

### API Key Protection
- API keys are automatically masked in logs (only showing first 8 and last 4 characters)
- Sensitive data is sanitized before logging
- Production mode disables detailed logging that could expose sensitive information

### Access Control
- Set the `CODE` environment variable to require authentication
- Multiple access codes supported (comma-separated)
- User API keys are handled securely without server-side storage

### Security Best Practices
1. **Always set a strong access code**: `CODE=your-secure-password`
2. **Use HTTPS in production**: Never deploy with HTTP in production environments
3. **Enable secure logging**: Set `DISABLE_SENSITIVE_LOGGING=true` in production
4. **Regularly rotate API keys**: Change your API keys periodically
5. **Monitor usage**: Keep track of your API usage and costs

### Environment Variables Security
```bash
# Required: Set a strong access code
CODE=your-secure-password

# Recommended: Disable sensitive logging in production
DISABLE_SENSITIVE_LOGGING=true

# Your API keys (keep these secret!)
OPENAI_API_KEY=sk-your-key-here
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

## Enterprise Solutions

Demandify Media offers comprehensive enterprise AI solutions tailored to your business needs:

- **Custom Branding**: Complete white-label solutions with your brand identity
- **Advanced Integration**: Seamless integration with your existing business systems
- **Enhanced Security**: Enterprise-grade security and compliance features
- **Dedicated Support**: 24/7 technical support and consultation
- **Scalable Infrastructure**: Cloud-native architecture that grows with your business
- **Custom AI Models**: Specialized AI models trained for your industry and use cases

For enterprise inquiries, please contact: **enterprise@demandify.media**

## Screenshots

![Settings](./docs/images/settings.png)

![More](./docs/images/more.png)

## Features

- **Deploy for free with one-click** on Vercel in under 1 minute
- Compact client (~5MB) on Linux/Windows/MacOS, [download it now](https://github.com/Yidadaa/ChatGPT-Next-Web/releases)
- Fully compatible with self-deployed LLMs, recommended for use with [RWKV-Runner](https://github.com/josStorer/RWKV-Runner) or [LocalAI](https://github.com/go-skynet/LocalAI)
- Privacy first, all data is stored locally in the browser
- Markdown support: LaTex, mermaid, code highlight, etc.
- Responsive design, dark mode and PWA
- Fast first screen loading speed (~100kb), support streaming response
- New in v2: create, share and debug your chat tools with prompt templates (mask)
- Awesome prompts powered by [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) and [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts)
- Automatically compresses chat history to support long conversations while also saving your tokens
- I18n: English, 简体中文, 繁体中文, 日本語, Français, Español, Italiano, Türkçe, Deutsch, Tiếng Việt, Русский, Čeština, 한국어, Indonesia

<div align="center">
   
![主界面](./docs/images/cover.png)

</div>

## Roadmap

- [x] System Prompt: pin a user defined prompt as system prompt [#138](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/138)
- [x] User Prompt: user can edit and save custom prompts to prompt list
- [x] Prompt Template: create a new chat with pre-defined in-context prompts [#993](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/993)
- [x] Share as image, share to ShareGPT [#1741](https://github.com/Yidadaa/ChatGPT-Next-Web/pull/1741)
- [x] Desktop App with tauri
- [x] Self-host Model: Fully compatible with [RWKV-Runner](https://github.com/josStorer/RWKV-Runner), as well as server deployment of [LocalAI](https://github.com/go-skynet/LocalAI): llama/gpt4all/rwkv/vicuna/koala/gpt4all-j/cerebras/falcon/dolly etc.
- [x] Artifacts: Easily preview, copy and share generated content/webpages through a separate window [#5092](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/pull/5092)
- [x] Plugins: support network search, calculator, any other apis etc. [#165](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/165) [#5353](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/issues/5353)
  - [x] network search, calculator, any other apis etc. [#165](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/165) [#5353](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/issues/5353)
- [x] Supports Realtime Chat [#5672](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/issues/5672)
- [ ] local knowledge base

## What's New

- 🚀 v2.15.8 Now supports Realtime Chat [#5672](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/issues/5672)
- 🚀 v2.15.4 The Application supports using Tauri fetch LLM API, MORE SECURITY! [#5379](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/issues/5379)
- 🚀 v2.15.0 Now supports Plugins! Read this: [NextChat-Awesome-Plugins](https://github.com/ChatGPTNextWeb/NextChat-Awesome-Plugins)
- 🚀 v2.14.0 Now supports Artifacts & SD
- 🚀 v2.10.1 support Google Gemini Pro model.
- 🚀 v2.9.11 you can use azure endpoint now.
- 🚀 v2.8 now we have a client that runs across all platforms!
- 🚀 v2.7 let's share conversations as image, or share to ShareGPT!
- 🚀 v2.0 is released, now you can create prompt templates, turn your ideas into reality! Read this: [ChatGPT Prompt Engineering Tips: Zero, One and Few Shot Prompting](https://www.allabtai.com/prompt-engineering-tips-zero-one-and-few-shot-prompting/).

## Get Started

1. Get [OpenAI API Key](https://platform.openai.com/account/api-keys);
2. Click
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYidadaa%2FChatGPT-Next-Web&env=OPENAI_API_KEY&env=CODE&project-name=chatgpt-next-web&repository-name=ChatGPT-Next-Web), remember that `CODE` is your page password;
3. Enjoy :)

## FAQ

[English > FAQ](./docs/faq-en.md)

