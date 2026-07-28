# Commerce Insights Agent

An AI-powered analytics and automation assistant for e-commerce and digital marketing teams. It connects a conversational LangGraph agent to the platforms marketers actually work in — Shopify, Meta Ads, Google Ads, Google Analytics, Google Search Console, and SEMrush — so users can ask questions in plain language and get answers pulled live from those systems.

## What it does

- **Conversational agent** built with LangChain/LangGraph, backed by Anthropic and OpenAI models
- **Tool-calling integrations** for:
  - Shopify (orders, products, customers)
  - Meta Ads (campaign/ad performance, active ads)
  - Google Ads
  - Google Analytics
  - Google Search Console
  - SEMrush
- **Media tools** for transcription (Whisper) and file/document analysis
- **Chat history & persistence** via Convex
- **Authentication** via Clerk, with OAuth flows for connected ad/analytics accounts
- **Vector search** via Pinecone for retrieval-augmented context

## Tech stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) |
| Agent orchestration | LangChain / LangGraph |
| Models | Anthropic Claude, OpenAI |
| Database / real-time | Convex |
| Auth | Clerk |
| Vector store | Pinecone |
| UI | React 19, Tailwind CSS, Radix UI |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

You'll need API credentials for the services you want to connect (Anthropic/OpenAI, Convex, Clerk, Pinecone, and any of the ad/analytics platforms above) configured as environment variables — see `.env.local` (not committed).

## Project structure

```
app/            Next.js routes (dashboard, chat, auth callbacks, API routes)
lib/tools/      Tool implementations the agent can call (Shopify, Meta, Google Ads, etc.)
lib/langgraph.ts  Agent graph definition
convex/         Convex schema and functions (chats, messages)
components/     UI components
```
