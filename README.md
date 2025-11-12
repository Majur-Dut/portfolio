# Borong Dut Kou — AI Portfolio

An interactive portfolio built with React, Vite, and Tailwind CSS 4. It features an AI chatbot powered by OpenRouter (DeepSeek) that answers questions about skills, projects, and experience.

## Tech stack

- React + Vite
- Tailwind CSS 4
- OpenRouter + DeepSeek (chat completions)

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the project root with:
   ```bash
   VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
   VITE_OPENROUTER_MODEL=deepseek/deepseek-chat
   ```
   Note: Calling OpenRouter from the browser exposes your API key. For production, proxy requests through a secure backend.
3. Start the dev server:
   ```bash
   npm run dev
   ```

## Structure

- `src/pages/*`: Home, Projects, Skills, About, Contact
- `src/components/Chatbot.jsx`: AI assistant UI + call to OpenRouter

## Tailwind

Tailwind CSS 4 is configured via `postcss.config.js` using the `@tailwindcss/postcss` plugin. Styles are authored in `src/index.css` with `@import "tailwindcss";`.
