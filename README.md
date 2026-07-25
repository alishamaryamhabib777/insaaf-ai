<div align="center">

# ⚖️ InsaafAI (insāf - انصاف)

**Democratizing Legal Intelligence & Automated Draft Assistance**

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini API](https://img.shields.io/badge/Google_Gemini-API-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Deployment](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-key-features">Key Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-deployment">Deployment</a>
</p>

</div>

---

## 🌟 Overview

**InsaafAI** is an AI-driven legal intelligence platform designed to bridge the gap between complex legal frameworks and everyday citizens, legal advocates, and public defenders.

By leveraging **Google Gemini AI**, InsaafAI simplifies legal intake, performs rapid case analysis, drafts court-ready petitions, and provides an interactive legal chatbot—all accessible through an intuitive, multilingual user interface.

---

## ✨ Key Features

* **🏠 Citizen Landing Portal:** Clear overview of legal tools and accessible onboarding.
* **📋 AI Legal Intake:** Interactive multi-step form to collect facts, timelines, and relief details.
* **⚡ Legal Analysis Engine:** Instant breakdown of legal sections, potential risks, and strategic next steps.
* **📝 Petition Generator:** Prepares structured court-ready legal drafts and petition templates.
* **💬 Legal AI Assistant:** Real-time conversational AI powered by Gemini for interactive legal Q&A.
* **📁 Case Workspace:** Track active cases, saved analysis results, and generated petitions.
* **🌐 Multilingual Support:** Seamlessly handles multi-language accessibility (English & Urdu).

---

## 🛠️ Tech Stack

* **Frontend Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Styling & UI:** [Tailwind CSS](https://tailwindcss.com/) + [Lucide Icons](https://lucide.dev/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Build Tool:** [Vite 6](https://vitejs.dev/)
* **AI Engine:** Google Gemini API (`@google/genai`)
* **Hosting:** [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
insaafai/
├── public/                # Static assets & public resources
├── src/
│   ├── assets/            # Static images and icons
│   ├── components/        # UI View components
│   │   ├── Navbar.tsx         # Global navigation bar
│   │   ├── Sidebar.tsx        # App navigation sidebar
│   │   ├── LandingView.tsx    # Citizen landing page
│   │   ├── DashboardView.tsx  # Legal workspace dashboard
│   │   ├── IntakeView.tsx     # Fact gathering questionnaire
│   │   ├── AnalysisView.tsx   # AI legal analysis view
│   │   ├── PetitionView.tsx   # Petition draft editor
│   │   ├── ChatView.tsx       # Conversational AI assistant
│   │   └── CasesView.tsx      # Case files & records tracking
│   ├── App.tsx            # Main router and state manager
│   ├── index.css          # Tailwind & custom CSS rules
│   ├── main.tsx           # Application entry point
│   └── types.ts           # Shared TypeScript interfaces
├── .env.example           # Environment variable template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite bundler configuration
