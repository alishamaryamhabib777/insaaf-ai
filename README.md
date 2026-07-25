# ⚖️ InsaafAI (انصاف — "Justice")

> **AI-powered legal intake, analysis, and petition drafting for citizens who can't afford a lawyer's first consultation.**

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

**🔗 Live App:** [https://YOUR-DEPLOYMENT-URL.vercel.app](https://YOUR-DEPLOYMENT-URL.vercel.app) ← *replace with your actual Vercel URL*

---

## a. What InsaafAI Is, and the Problem It Solves

Most people in Pakistan who face a legal issue — a wrongful termination, a landlord dispute, a consumer complaint, harassment at a workplace — have **no idea where to start**. Hiring a lawyer just to understand *"do I even have a case, and what section of law applies?"* costs money most people don't have, and free legal aid is scarce and hard to reach, especially outside big cities.

**InsaafAI is a free, always-available first step.** A user describes their situation in plain language, and the app:

1. Structures their story into a proper legal intake (facts, timeline, parties involved),
2. Gives them a plain-language analysis of what area of law applies and what their realistic options are, and
3. Drafts an actual court-ready petition they can take to a lawyer, a court, or a legal aid clinic — saving hours of back-and-forth at the very first meeting.

**Who it's for:** ordinary citizens with a legal problem and no legal background, as well as junior legal practitioners or law students who want to speed up first-draft intake and petition work.

**What InsaafAI is *not*:** a replacement for a licensed lawyer. It is explicitly designed and prompted as a *first-step assistant* — every output tells the user to confirm with a licensed advocate before taking legal action. This is stated clearly in-app and in the AI's own system instructions (see section d).

---

## b. Live Deployed URL

### 👉 **[insaaf-ai.vercel.app](https://YOUR-DEPLOYMENT-URL.vercel.app)** ← replace with your real link

No sign-up wall required to try the intake flow. *(If you added auth for the case dashboard, note that here — e.g. "Case Dashboard requires a free account; the Intake and Petition Generator can be used without one.")*

---

## c. Features

| Feature | What it does |
|---|---|
| 🏠 **Landing Page** | Explains what InsaafAI does and who it's for, in plain language, before the user commits to filling anything out. |
| 📋 **Guided Legal Intake** | A multi-step form that walks the user through describing their issue — what happened, when, who was involved, what evidence exists — without requiring legal vocabulary. |
| ⚡ **AI Legal Analysis** | Takes the completed intake and returns: the likely relevant law/section, a plain-language explanation of the situation, realistic possible outcomes, and next-step recommendations. |
| 📝 **Automated Petition Generator** | Converts the intake + analysis into a structured, court-formatted draft petition the user can download and take to a lawyer or file. |
| 💬 **AI Legal Q&A Assistant** | A conversational chatbot for follow-up questions ("what does this legal term mean," "what happens next in this process") once the user has an analysis in hand. |
| 📁 **Case Dashboard** | Lets a returning user save, revisit, and manage multiple intake cases and their generated drafts. |
| 🌐 **Multilingual Support** | Interface and AI responses can be used in multiple languages, so users aren't limited to legal English. |

*(Only list features here that are actually wired up and working in the deployed app. If Case Dashboard or multilingual support is partial, say so explicitly — an honest README scores better than an overstated one that a grader catches out.)*

---

## d. The AI Feature

InsaafAI's core AI feature is the **Legal Analysis + Petition Drafting Engine**, powered by the Google Gemini API. It takes a structured intake (not a free-form chat) and returns a structured legal assessment — this constrains the model to be consistent and reduces hallucinated legal citations, which matters a lot when the output could inform someone's real decisions.

**System prompt used for the Legal Analysis feature:**

```
You are InsaafAI, a legal information assistant helping ordinary citizens in Pakistan
understand a legal problem they have described. You are NOT a licensed lawyer, and you
must never claim to be one or guarantee a legal outcome.

You will receive a structured intake describing:
- What happened (the user's own account of events)
- When it happened (timeline)
- Who was involved (parties)
- Any evidence or documents mentioned

Your task: produce a clear, structured legal analysis with the following sections,
in this order:

1. SUMMARY — restate the situation in 2-3 plain sentences, confirming you understood
   it correctly.
2. LIKELY LEGAL AREA — name the general area of law this falls under (e.g. labor law,
   tenancy law, consumer protection, family law) and, if reasonably identifiable, the
   relevant statute or section. If you are not confident which section applies, say so
   explicitly rather than guessing a specific citation.
3. YOUR OPTIONS — list 2-4 realistic paths the person could take (e.g. send a legal
   notice, file a complaint with a specific authority, approach a specific court/tribunal),
   in plain language, ordered from least to most formal/costly.
4. WHAT TO DO NEXT — 2-3 concrete, immediate next steps (e.g. documents to gather,
   people to contact).
5. IMPORTANT — a mandatory closing note, in these exact terms: "This is general legal
   information, not legal advice. Please confirm these details with a licensed advocate
   before taking any formal action."

Rules:
- Never fabricate a law, section number, or case citation you are not reasonably
  confident about. If unsure, say "a lawyer should confirm the exact section" instead
  of inventing one.
- Do not promise a specific outcome ("you will win") — describe likelihood and factors only.
- Keep language plain. Avoid legal jargon unless you immediately explain it.
- If the intake describes an emergency (immediate danger, ongoing violence, custody
  emergency), say so clearly at the very top of your response and advise contacting
  emergency services or a lawyer immediately, before anything else.
```

**System prompt used for the Petition Generator:**

```
You are InsaafAI's petition drafting engine. You will receive a completed legal intake
and its corresponding analysis. Produce a formally structured draft petition suitable
for a Pakistani court or relevant authority, using standard petition formatting:

- Title/heading (court or authority name — use a placeholder like "[COURT NAME]" if
  not specified by the user)
- Parties (Petitioner / Respondent)
- Facts of the case, numbered, drawn only from what the user provided
- Prayer/relief sought, based on the "Your Options" the user selected

Rules:
- Use only facts explicitly present in the intake. Never invent dates, names, or events.
- Use formal but plain legal drafting language.
- Insert clearly marked placeholders (e.g. "[INSERT DATE]") for any information the
  intake did not provide, rather than guessing.
- End the draft with a note: "DRAFT ONLY — must be reviewed and formatted by a licensed
  advocate before filing."
```

Writing the output as a fixed five-section structure (for analysis) and a formal placeholder-based template (for petitions) was a deliberate design choice — it makes the AI's output predictable and checkable, rather than a free-flowing chatbot answer that's harder for a non-lawyer to trust or verify.

---

## e. Tools, Services, and AI Models Used

| Category | Tool/Service |
|---|---|
| Frontend framework | React 18 + TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| AI model/API | Google Gemini API (`@google/genai`) |
| Hosting/Deployment | Vercel |
| Version control | Git + GitHub |

---

## f. Screenshots

> Add at least 3 screenshots below showing the app actually running — the landing page, the intake flow, and an AI-generated analysis or petition draft are the most convincing set. Save them into a `/screenshots` folder in your repo and reference them like this:

```markdown
### Landing Page
![Landing Page](./screenshots/landing.png)

### Legal Intake Flow
![Intake Flow](./screenshots/intake.png)

### AI Legal Analysis Output
![AI Analysis](./screenshots/analysis.png)

### Generated Petition Draft
![Petition Draft](./screenshots/petition.png)
```

*(Screenshots are one of the explicit grading criteria — don't skip this. Take them from your actual deployed app, not localhost, so they match what graders will see when they click your live link.)*

---

## g. How to Run This Project Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18.0.0 or higher
- npm or yarn
- A **Google Gemini API key** — get one free at [Google AI Studio](https://aistudio.google.com/)

### 1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/insaaf-ai.git
cd insaaf-ai
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the project root:
```
GEMINI_API_KEY=your_api_key_here
```

### 4. Run the development server
```bash
npm run dev
```
The app will be available at `http://localhost:5173` (Vite's default port).

### 5. Build for production
```bash
npm run build
```

### 6. Deploy
This project is deployed on Vercel. To deploy your own copy:
1. Push your repo to GitHub.
2. Import it into [Vercel](https://vercel.com/new).
3. Add `GEMINI_API_KEY` as an environment variable in the Vercel project settings.
4. Deploy.

---

## 📌 Project Status & Known Limitations

*(Be honest here — graders trust a README more when it names limitations instead of hiding them.)*

- [ ] Multilingual support currently covers: *[list actual languages implemented]*
- [ ] Case Dashboard persistence: *[note if it's local storage vs. a real database]*
- [ ] Legal analysis is informational only and has not been reviewed by a licensed advocate — this is stated in-app and in the AI's own output.

---

## 👩‍💻 Author

Built by **[Your Name]** as a final project for the Prime Minister's Youth Program — PakGen, Agentic AI course.
