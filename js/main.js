/* =====================================================================
   Muhammad Danish — Portfolio  (GSAP + ScrollTrigger + Lenis, vanilla JS)
   ===================================================================== */
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const IMG = 'img/danish-nobg.png';

/* ---------------------------------------------------------------- DATA */
const WA = '923099598241';
const EMAIL = 'mianmuhammaddanishkhattak@gmail.com';
const GITHUB = 'https://github.com/MianDanish1122';
const LINKEDIN = 'https://linkedin.com/in/muhammad-danish-khattak';

const SOCIALS = [
  { name: 'WhatsApp', icon: 'whatsapp', href: `https://wa.me/${WA}`, color: '#25D366' },
  { name: 'Email', icon: 'mail', href: `mailto:${EMAIL}`, color: '#EA4335' },
  { name: 'LinkedIn', icon: 'linkedin', href: LINKEDIN, color: '#0A66C2' },
  { name: 'GitHub', icon: 'github', href: GITHUB, color: '#ffffff' },
];
const NAV = [
  { label: 'Home', target: '#hero' }, { label: 'About', target: '#welcome' },
  { label: 'Journey', target: '#journey' }, { label: 'Portfolio', target: '#portfolio-projects' },
  { label: 'Service', target: '#services' }, { label: 'Contact', target: '#contact' },
];
const ROLES = ['AI Engineer', 'ML Engineer', 'GenAI Dev'];

const ACH = [
  { id: 'a1', name: 'Comeback Pakistan', role: '2nd Position · Uraan.ai', message: 'Selected from thousands of applicants for an 8-week venture-building program, then pitched Uraan.ai to a panel of 20+ founders, HR professionals and investors.' },
  { id: 'a2', name: 'AWKUM AGORA 2026', role: '1st Position · Humrahi Hub', message: 'Won the 2nd AWKUM AGORA Hackathon with Team Tec-Hub — blockchain-inspired transparency and fund-flow tracking for community donations.' },
  { id: 'a3', name: 'ByteSprint 2025', role: 'Runner-Up · Speed Coding', message: 'Finished as runner-up in the ByteSprint 2025 Speed Coding Competition.' },
  { id: 'a4', name: 'Flood.pk Hackathon', role: 'Participant · NIC Peshawar', message: 'Built the Flood AI Chatbot — a prompt-engineered assistant giving the public clear, accurate flood information.' },
  { id: 'a5', name: 'NeoHacks GIKI', role: 'Participant · 2025', message: 'Competed at NeoHacks GIKI Edition 2025, shipping an AI-driven prototype under tight deadlines.' },
  { id: 'a6', name: 'Hack Nation', role: 'Global AI Hackathon', message: 'Participated in the Hack Nation Global AI Hackathon alongside builders from around the world.' },
  { id: 'a7', name: 'IUPC 2026', role: 'Participant · Programming', message: 'Represented my university in the IUPC 2026 programming contest.' },
  { id: 'a8', name: 'Studiio Hacks', role: 'Participant · Hackathon', message: 'Took part in Studiio Hacks, rapidly prototyping and demoing AI ideas.' },
];

const EXPERIENCE = [
  { period: 'Aug 2026 — Present', title: 'Junior AI/ML Engineer', place: 'Excels Tech Solution LLC', location: 'Pakistan', description: 'Building GenAI apps with LLMs, RAG pipelines, AI agents and vector databases; FastAPI services powering chatbot & customer-support automation; multi-agent and MCP-based systems; QA and hallucination analysis for reliable responses.', tags: ['LLMs', 'RAG', 'FastAPI', 'MCP', 'Vector DBs'] },
  { period: 'Jul 2026 — Sep 2026', title: 'Data Science Intern', place: '10Pearls', location: 'Pakistan', description: 'Part of the team behind Pearls AQI Predictor — an end-to-end serverless ML pipeline forecasting AQI 3 days ahead, with Vertex AI feature store, GitHub Actions automation and a Streamlit + FastAPI dashboard.', tags: ['Scikit-learn', 'TensorFlow', 'Vertex AI', 'Streamlit', 'GitHub Actions'] },
  { period: 'May 2025 — Jul 2025', title: 'AI Engineer Intern', place: 'Codecilex', location: 'Pakistan', description: 'Computer vision and AI automation: built a real-time Text-to-Speech voice agent and an AI Room Scan & Interior Styling system, both exposed through FastAPI for production use.', tags: ['OpenCV', 'TTS', 'Generative AI', 'FastAPI'] },
];
const EDUCATION = [
  { period: '2022 — 2026', title: 'B.S. Computer Science (AI)', place: 'Abdul Wali Khan University Mardan', location: 'Pakistan', description: 'Specialization in Artificial Intelligence — Machine Learning, Deep Learning, Computer Vision, DSA, Data Engineering, Web Development, Databases and Software Engineering.', tags: ['AI', 'ML', 'Deep Learning', 'Computer Vision'] },
  { period: 'Certification', title: 'Generative AI Application Developer', place: 'NCEAC · HEC', location: '', description: 'Professional certification in building generative-AI applications.', tags: ['GenAI'] },
  { period: 'Program', title: 'KPITB AI/ML Program', place: 'KPITB', location: '', description: 'Applied AI/ML training programme.', tags: ['AI', 'ML'] },
  { period: 'Certification', title: 'Machine Learning, AI & Data Science', place: 'eHunar', location: '', description: 'Plus Machine Learning, Python and 6–8 additional AI/ML/Python certificates on Coursera.', tags: ['Coursera', 'Python', 'ML'] },
];

const PROJECTS = [
  { id: 9, title: 'Assistly', category: 'AI Support Desk · CRM', context: 'One workspace for chats, tickets & leads', domain: 'assistly.excelsnetworks.com', image: 'img/assistly.jpg', glyph: '🎧', bg: 'linear-gradient(135deg,#0e7490,#09090b)', accent: '#22d3ee', demoUrl: 'https://assistly.excelsnetworks.com/', codeUrl: GITHUB,
    description: 'One workspace for customer chats, tickets and leads, with an AI agent that answers from your own knowledge base.',
    problem: 'Small teams answer the same questions all day across chat, email and tickets, and lose context between tools.',
    keyPoints: ['Live chat widget you can embed on any website.', 'Shared inbox with agents, departments and ticket handling.', 'AI agent that replies from your documents and website content, and hands over to a human when needed.', 'CRM for customers, leads and deals.', 'Superadmin console for the platform owner: customers, plans, AI credits, usage and audit.'],
    built: 'A modular monolith, with the backend split by business area and one deployable app. The AI layer is provider-agnostic, so a workspace can switch between OpenAI and Claude without code changes. Retrieval falls back to offline vectors if the embedding service fails.',
    decisions: ['Chose a modular monolith over microservices to keep deployment simple, with clear module boundaries so it can be split later.', 'Kept API keys only in environment secrets, never in the database or the frontend.', 'Superadmin sees totals only. Reading a customer’s actual conversations needs an explicit support-access grant.', 'Credits default to unlimited, and model prices are never invented, only entered by an admin.'],
    tags: ['AI Agent', 'RAG', 'OpenAI', 'Claude', 'Live Chat', 'CRM', 'Modular Monolith'] },
  { id: 10, title: 'AI SEO', category: 'AI-native SEO Platform', context: 'Next.js · NestJS · PostgreSQL · Cloud Run', domain: 'AI SEO · Platform', image: 'img/aiseo.jpg', glyph: '🔎', bg: 'linear-gradient(135deg,#7f1d1d,#09090b)', accent: '#f87171', demoUrl: 'https://excelstechnology.com/', codeUrl: '',
    description: 'One workspace to crawl, audit and fix a website\u2019s SEO, and to measure how visible a brand is in Google and in AI assistants like ChatGPT and Gemini.',
    problem: 'SEO tools show many dashboards but leave the team to work out what to fix. At the same time people ask ChatGPT, Gemini and Perplexity instead of only using Google, and most tools cannot say whether a brand appears there.',
    keyPoints: ['Crawls a website (discovery, sitemap or URL-list mode, JavaScript pages, pages behind a login) and runs 130+ SEO checks with a 0-100 health score.', 'Turns the findings into a prioritized AI fix plan with code examples. An admin approves each change before it goes to WordPress, Shopify, Webflow or a GitHub pull request.', 'Keyword, backlink, competitor, traffic and paid-search research from SEO data providers.', 'AI-search modules: GEO (brand mentions in AI answers), AEO (answer readiness), SXO (search experience), Voice & Entity, Topical Authority, and AI Search Analytics (real visits from AI assistants).', 'Rank tracking, site speed (Core Web Vitals), indexing checks, reports, a client portal, API keys and signed webhooks for agencies.'],
    built: 'A monorepo with a Next.js 14 web app (66 pages) and a NestJS API split into 93 feature folders, on PostgreSQL (Drizzle ORM, 153 data models) with Redis / BullMQ queues for long jobs. The site crawler is our own (cheerio, plus Playwright for JavaScript pages). The AI layer is provider-agnostic (Claude, OpenAI, Gemini, Perplexity). Data comes from SEO and Google APIs through clients that add caching, rate limits, retries and a circuit breaker. Shipped as Docker on Google Cloud Run.',
    decisions: ['Never invent data. If a data API is not connected, the server answers HTTP 424 "API required" and the page shows a banner. AI-made estimates are off unless an admin turns them on, and then they are labeled. Checks that cannot be measured stay "not measured" and are left out of scores.', 'Pay for real usage. Two separate credit buckets (AI and Research); the balance is checked before each paid call and deducted after, by real tokens or data rows.', 'Protect against slow or failing providers: cached results, a token-bucket rate limit, retries with back-off, and a circuit breaker that pauses a broken provider for 5 minutes after 5 failures.', 'Safe changes to live sites: every change needs approval by default, nobody can approve their own request, and the previous version is saved for rollback.', 'Tenant privacy: data is scoped by organization and role; stored integration tokens are encrypted (AES-256-GCM).', 'Testable scoring: scoring logic is written as pure functions with unit tests, separate from network and database code.'],
    extra: [{ title: 'My Part', body: ['Topical Authority: scores how deep and how well linked a site\u2019s content is per topic, using crawl data; AI suggests missing subtopics.', 'AI Search Analytics: reads Google Analytics 4 and classifies visits from 13 AI assistants.', 'SXO and Voice, Entity & AI Mode: weighted scoring of search intent, UX, conversion and content, plus a check of which follow-up questions an AI search would ask and whether the page answers them.', 'Support tickets (Assistly integration), "API required" errors and banner, and the RAG chatbot widget integration on the public pages.'] }],
    stats: [['66', 'Web pages'], ['93', 'API feature folders'], ['153', 'Data models'], ['130+', 'SEO checks']],
    tags: ['Next.js 14', 'NestJS', 'PostgreSQL', 'Drizzle ORM', 'Redis', 'BullMQ', 'Playwright', 'Claude', 'OpenAI', 'Gemini', 'Docker', 'Cloud Run'] },
  { id: 11, title: 'Excels POS', category: 'Restaurant POS + KDS + ERP', context: 'Multi-tenant SaaS for restaurants', domain: 'Excels POS · Restaurant', image: 'img/excelspos.jpg', glyph: '🍽️', bg: 'linear-gradient(135deg,#312e81,#09090b)', accent: '#818cf8', demoUrl: 'https://restaraunt-pos.excelsnetworks.com/', codeUrl: '',
    description: 'A multi-tenant SaaS for restaurants. It handles dine-in, takeaway, QR and delivery orders from one system, and it has live rider tracking, accounting, HRM and AI insights.',
    problem: 'Restaurants have to run separate tools for POS, kitchen, inventory, delivery and accounts.',
    solution: 'One connected platform where orders, kitchen, stock, delivery and accounts all share the same data.',
    keyPoints: ['POS for dine-in, takeaway and delivery orders.', 'KDS / KOT: kitchen display and order tickets.', 'QR ordering for tables.', 'Delivery with live rider tracking.', 'Inventory and recipe costing.', 'Accounting and HRM.', 'AI copilot and AI insights.'],
    extra: [
      { title: 'Architecture', body: ['Tenant isolation: each restaurant\u2019s data stays separate in the multi-tenant platform.', 'A shared transaction pattern for writes.', 'A generic ResourceDef CRUD engine: most CRUD screens are generated automatically from config.', 'AI platform layers behind the AI copilot and insights.'] },
      { title: 'Challenges & Solutions', body: ['DB pooler timeouts and checkout 500 errors.', 'Route guards that were not running (a middleware matcher bug).', 'Race-free auto-assign of riders.', 'Safe cleanup with accounting reversal.'] }],
    stats: [['143', 'Models'], ['335', 'APIs'], ['188', 'Pages'], ['773', 'Commits']],
    tags: ['Multi-tenant SaaS', 'POS', 'KDS', 'QR Ordering', 'Rider Tracking', 'Accounting', 'HRM', 'AI Copilot'] },
  { id: 1, title: 'Uraan.ai', category: 'RAG · EdTech Platform', context: '2nd Position · Comeback Pakistan', domain: 'uraan.ai', image: 'img/uraan.png', glyph: '🎓', bg: 'linear-gradient(135deg,#0c4a6e,#09090b)', accent: '#38bdf8', demoUrl: 'https://www.uraan.app/', codeUrl: GITHUB,
    description: 'An AI-powered adaptive learning platform that helps students prepare for exams with personalized study assistance, AI-generated questions and weak-area identification.',
    keyPoints: ['Built the AI/LLM logic and backend with a RAG pipeline using LangChain and Groq.', 'Stored data in Supabase and exposed everything through FastAPI endpoints.', 'Selected from thousands of applicants for Comeback Pakistan, an 8-week venture-building program.', 'Placed 2nd after presenting to 20+ founders, HR professionals and investors.'],
    tags: ['Python', 'FastAPI', 'Groq', 'RAG', 'LangChain', 'Supabase'] },
  { id: 2, title: 'Humrahi Hub', category: 'Hackathon Winner', context: '1st Position · AWKUM AGORA 2026', domain: 'humrahihub.app', image: 'img/humrahihub.png', glyph: '🤝', bg: 'linear-gradient(135deg,#14532d,#09090b)', accent: '#4ade80', demoUrl: 'https://humrahihub.vercel.app/#what-we-do', codeUrl: GITHUB,
    description: 'A community-driven platform solving the "Someone Paradox" by connecting verified community needs with donors and volunteers.',
    keyPoints: ['Designed blockchain-inspired transparency so every donation is visible and accountable.', 'Automated fund-flow tracking from donor to beneficiary.', 'Won 1st Position at the 2nd AWKUM AGORA 2026 Hackathon as part of Team Tec-Hub.'],
    tags: ['Web Platform', 'Transparency', 'Fund Tracking', 'Team Tec-Hub'] },
  { id: 3, title: 'AarogyaNet', category: 'Multi-Agent Healthcare', context: 'LangGraph · RAG', domain: 'aarogyanet.ai', image: 'img/aarogyanet.png', glyph: '🩺', bg: 'linear-gradient(135deg,#7f1d1d,#09090b)', accent: '#fb7185', demoUrl: 'https://app-wine-pi.vercel.app/', codeUrl: GITHUB,
    description: 'A multi-agent healthcare assistant with specialized agents for symptom analysis, medical knowledge retrieval and wellness recommendations.',
    keyPoints: ['Implemented a RAG pipeline over a vector database to ground answers in trusted medical information.', 'Built a coordinator agent that routes requests and merges outputs into one structured response.', 'Served via FastAPI with a Streamlit front-end.'],
    tags: ['LLMs', 'LangChain', 'LangGraph', 'RAG', 'FastAPI', 'Streamlit'] },
  { id: 4, title: 'AI Room Scan', category: 'Computer Vision + GenAI', context: 'Interior Styling System', domain: 'roomscan.ai', glyph: '🛋️', bg: 'linear-gradient(135deg,#78350f,#09090b)', accent: '#fb923c', demoUrl: '', codeUrl: GITHUB,
    description: 'A computer-vision pipeline that scans a room image, identifies layout, furniture and empty space, then generates personalized interior styling recommendations.',
    keyPoints: ['OpenCV pipeline detecting layout, furniture and free space.', 'Combined vision output with generative AI for styling suggestions.', 'Exposed through a FastAPI backend for an end-user application.'],
    tags: ['Python', 'OpenCV', 'Generative AI', 'FastAPI'] },
  { id: 5, title: 'AQI Predictor', category: 'End-to-End ML Pipeline', context: '10Pearls · Data Science Internship', domain: 'pearls-aqi.app', glyph: '🌫️', bg: 'linear-gradient(135deg,#312e81,#09090b)', accent: '#a78bfa', demoUrl: '', codeUrl: GITHUB,
    description: 'An end-to-end serverless machine-learning pipeline forecasting the Air Quality Index three days ahead.',
    keyPoints: ['Feature engineering and model training with Scikit-learn and TensorFlow.', 'Features stored in the Vertex AI feature store.', 'GitHub Actions for hourly feature updates and scheduled retraining.', 'Real-time Streamlit + FastAPI dashboard for 3-day forecasts.'],
    tags: ['Scikit-learn', 'TensorFlow', 'Vertex AI', 'GitHub Actions', 'Streamlit'] },
  { id: 6, title: 'TTS Voice Agent', category: 'Voice AI', context: 'Codecilex · AI Internship', domain: 'voice-agent.ai', glyph: '🎙️', bg: 'linear-gradient(135deg,#134e4a,#09090b)', accent: '#2dd4bf', demoUrl: '', codeUrl: GITHUB,
    description: 'A text-to-speech voice agent that converts text into natural, real-time speech for automated, hands-free voice interaction.',
    keyPoints: ['Designed the pipeline for conversational use cases.', 'Integrated through a FastAPI backend for easy deployment.', 'Built for real-time speech output.'],
    tags: ['Python', 'TTS Frameworks', 'FastAPI'] },
  { id: 7, title: 'Student Behavior AI', category: 'Deep Learning', context: 'Facial Emotion Analysis', domain: 'emotion-ai.app', glyph: '😊', bg: 'linear-gradient(135deg,#831843,#09090b)', accent: '#f472b6', demoUrl: '', codeUrl: GITHUB,
    description: 'A computer-vision system that analyzes students\' facial emotions before and after classroom sessions using the FER2013 dataset.',
    keyPoints: ['Compared pre- and post-lecture emotional states.', 'Measured engagement and attention trends for instructors.', 'Built with TensorFlow/PyTorch and OpenCV.'],
    tags: ['TensorFlow', 'PyTorch', 'OpenCV', 'FER2013'] },
  { id: 8, title: 'Lung Sound AI', category: 'Deep Learning · Audio', context: 'University Project', domain: 'lung-ai.app', glyph: '🫁', bg: 'linear-gradient(135deg,#1e3a8a,#09090b)', accent: '#60a5fa', demoUrl: '', codeUrl: GITHUB,
    description: 'Detects signs of lung disease from lung-sound recordings using audio signal processing and a deep-learning classifier.',
    keyPoints: ['Converted raw audio into model-ready features.', 'Trained a deep-learning model to classify lung sounds.'],
    tags: ['Python', 'TensorFlow/Keras', 'Audio DSP'] },
];

const SERVICES = [
  { lines: ['AI Voice', 'Agent', 'Development'], tag: 'Voice', color: '#648c11', card: '#1f4d2b', ink: '#ffffff', accent: '#a3e635', glyph: '🎙️', description: 'Real-time conversational voice agents with natural TTS.' },
  { lines: ['RAG', 'Chatbot', 'Development'], tag: 'GenAI', color: '#ff4500', card: '#ff6a1f', ink: '#ffffff', accent: '#18181b', glyph: '💬', description: 'Knowledge-grounded chatbots with LLMs & vector search.' },
  { lines: ['Computer', 'Vision', 'Systems'], tag: 'Vision', color: '#000080', card: '#5b21b6', ink: '#ffffff', accent: '#f9a8d4', glyph: '👁️', description: 'Detection, segmentation and image understanding pipelines.' },
  { lines: ['Multi-Agent', 'AI', 'Orchestration'], tag: 'Agents', color: '#ff0000', card: '#c81e1e', ink: '#ffffff', accent: '#fde047', glyph: '🕸️', description: 'LangGraph and MCP-based agent systems for real workflows.' },
  { lines: ['Machine', 'Learning', 'Models'], tag: 'ML', color: '#fff000', card: '#facc15', ink: '#18181b', accent: '#ffffff', glyph: '📈', description: 'Training, evaluation and tuning of ML & deep-learning models.' },
  { lines: ['FastAPI', 'Deploy &', 'MLOps'], tag: 'MLOps', color: '#f5f5f5', card: '#fef3c7', ink: '#18181b', accent: '#d97706', glyph: '🚀', description: 'Production APIs with Docker, MLflow and CI/CD pipelines.' },
];
const SV_FEATURES = [{ icon: 'zap', label: 'Fast' }, { icon: 'smartphone', label: 'API Ready' }, { icon: 'search', label: 'Accurate' }, { icon: 'shield', label: 'Secure' }];

const FOOT_MARQUEE = [
  { text: 'AI Engineer • Machine Learning • Danish • GenAI', dir: 'left' },
  { text: 'Connect on LinkedIn • RAG • Agents', dir: 'right' },
  { text: 'Danish • FastAPI • Computer Vision • AI Engineer', dir: 'left' },
  { text: 'Voice AI • Automation • MLOps • Connect on LinkedIn', dir: 'right' },
  { text: 'AI Engineer • Danish • LangChain • Developer', dir: 'left' },
  { text: 'Let’s build something intelligent • Python', dir: 'right' },
];
const PF_COLORS = [['Yellow', '#f4c400'], ['Red', '#e63946'], ['Green', '#2a9d8f'], ['Purple', '#7c3aed'], ['Rose', '#f43f5e'], ['Orange', '#f97316']];

/* --------------------------------------------------------------- ICONS */
const IC = {
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  ext: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  smartphone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  msgplus: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 7v6"/><path d="M9 10h6"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  cap: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  sparkle: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/>',
  check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
};
const STAR = 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z';
const BRAND = {
  whatsapp: 'M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.56.94.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.43-9.43a9.37 9.37 0 0 1 9.42 9.43c0 5.2-4.23 9.43-9.43 9.43m8.03-17.46A11.27 11.27 0 0 0 12.05.71C5.8.71.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6-1.57a11.3 11.3 0 0 0 5.43 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02',
  linkedin: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0',
  github: 'M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3',
};
const icon = (n, cls = '') => {
  if (BRAND[n]) return `<svg viewBox="0 0 24 24" class="ic fill ${cls}" aria-hidden="true"><path d="${BRAND[n]}"/></svg>`;
  if (n === 'star') return `<svg viewBox="0 0 24 24" class="ic ${cls}" aria-hidden="true" style="fill:currentColor"><path d="${STAR}"/></svg>`;
  return `<svg viewBox="0 0 24 24" class="ic ${cls}" aria-hidden="true">${IC[n] || ''}</svg>`;
};
const hydrateIcons = (root = document) => $$('[data-icon]', root).forEach(el => { el.innerHTML = icon(el.dataset.icon); el.removeAttribute('data-icon'); });
const isLight = hex => { const t = parseInt(hex.slice(1), 16); return (((t >> 16) & 255) * 299 + ((t >> 8) & 255) * 587 + (t & 255) * 114) / 1000 > 150; };

/* ------------------------------------------------------------ SMOOTH SCROLL */
const lenis = new Lenis({ duration: 1.2, smoothWheel: true, syncTouch: true, syncTouchLerp: .06, touchMultiplier: 1.5 });
window.lenis = lenis;
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(t => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
const goTo = sel => { const el = $(sel); if (el) lenis.scrollTo(el, { duration: 1.4 }); };
history.scrollRestoration = 'manual';

/* ---------------------------------------------------------------- NAV */
function buildNav() {
  $('#navLinks').innerHTML = NAV.map(l => `<li><a href="${l.target}" data-go="${l.target}" class="nl group relative py-1 text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white transition-colors">${l.label}<span class="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>`).join('');
  $('#mLinks').innerHTML = NAV.map((l, i) => `<li class="overflow-hidden"><a href="${l.target}" data-go="${l.target}" class="flex items-baseline gap-4 font-syne font-black text-5xl uppercase tracking-tight text-white hover:text-yellow-400 transition-colors"><span class="font-mono text-sm text-yellow-400">0${i + 1}</span>${l.label}</a></li>`).join('');
  $('#ftLinks').innerHTML = NAV.map(l => `<li><a href="${l.target}" data-go="${l.target}" class="group relative text-sm font-bold uppercase tracking-[0.2em] text-zinc-900 transition-colors hover:text-white">${l.label}<span class="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100"></span></a></li>`).join('');

  const header = $('#navbar'), inner = $('#navInner'), menu = $('#mMenu');
  let open = false, solid = false, lastY = scrollY;
  const setSolid = () => {
    const on = solid || open;
    inner.classList.toggle('border-white/10', on); inner.classList.toggle('bg-zinc-950/60', on);
    inner.classList.toggle('backdrop-blur-xl', on); inner.classList.toggle('shadow-[0_8px_32px_rgba(0,0,0,0.35)]', on);
    inner.classList.toggle('border-transparent', !on); inner.classList.toggle('bg-transparent', !on);
  };
  const setMenu = v => {
    open = v; setSolid();
    $('#burger').setAttribute('aria-expanded', v); $('#burger').setAttribute('aria-label', v ? 'Close menu' : 'Open menu');
    $('.b1').className = `b1 absolute left-0 h-0.5 w-5 bg-white rounded transition-all duration-300 ${v ? 'top-1.5 rotate-45' : 'top-0'}`;
    $('.b2').className = `b2 absolute left-0 top-1.5 h-0.5 w-5 bg-white rounded transition-all duration-300 ${v ? 'opacity-0 translate-x-2' : ''}`;
    $('.b3').className = `b3 absolute left-0 h-0.5 w-5 bg-white rounded transition-all duration-300 ${v ? 'top-1.5 -rotate-45' : 'top-3'}`;
    if (v) {
      lenis.stop(); gsap.set(menu, { display: 'flex' });
      gsap.fromTo(menu, { clipPath: 'circle(0% at 100% 0%)' }, { clipPath: 'circle(150% at 100% 0%)', duration: .8, ease: 'power3.inOut' });
      gsap.fromTo([...$$('#mLinks li'), $('.m-extra')], { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: .6, stagger: .07, ease: 'power3.out', delay: .3 });
    } else {
      lenis.start();
      gsap.to(menu, { clipPath: 'circle(0% at 100% 0%)', duration: .6, ease: 'power3.inOut', onComplete: () => gsap.set(menu, { display: 'none' }) });
    }
  };
  $('#burger').onclick = () => setMenu(!open);
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-go]'); if (!a) return;
    e.preventDefault();
    if (open) { setMenu(false); setTimeout(() => goTo(a.dataset.go), 350); } else goTo(a.dataset.go);
  });
  addEventListener('scroll', () => {
    const y = scrollY; if (open) return;
    gsap.to(header, { yPercent: (y > lastY && y > 120) ? -130 : 0, duration: .45, ease: 'power3.out', overwrite: 'auto' });
    solid = y > innerHeight * .85; setSolid(); lastY = y;
  }, { passive: true });

  gsap.from('#navLogo', { x: -60, opacity: 0, duration: 1, ease: 'power3.out', delay: .2 });
  gsap.from('#navLinks li, .nav-act', { y: -24, opacity: 0, duration: .7, stagger: .08, ease: 'power3.out', delay: .4 });

  /* feedback modal */
  const modal = $('#fbModal'), box = $('#fbBox');
  const openFb = () => { if (open) setMenu(false); modal.classList.remove('hidden'); modal.classList.add('flex'); lenis.stop(); gsap.fromTo(box, { y: 40, opacity: 0, scale: .95 }, { y: 0, opacity: 1, scale: 1, duration: .5, ease: 'power3.out' }); };
  const closeFb = () => { modal.classList.add('hidden'); modal.classList.remove('flex'); lenis.start(); };
  $('#fbBtn').onclick = openFb; $('#mFb').onclick = openFb; $('#fbClose').onclick = closeFb;
  modal.addEventListener('click', e => { if (e.target === modal) closeFb(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeFb(); });
  $('#fbForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(e.target), name = (f.get('name') || '').trim(), msg = (f.get('message') || '').trim();
    if (!name || !msg) { $('#fbErr').textContent = 'Name and message are required.'; return; }
    addTestimonial({ id: Date.now(), name, role: (f.get('role') || '').trim() || 'Client', message: msg });
    e.target.reset(); $('#fbErr').textContent = '';
    e.target.classList.add('hidden'); $('#fbThanks').classList.remove('hidden');
    setTimeout(() => { closeFb(); e.target.classList.remove('hidden'); $('#fbThanks').classList.add('hidden'); }, 1400);
  });
}

/* ------------------------------------------------- INTERACTIVE HERO */
function buildInteractiveHero() {
  const sec = $('#portfolio'), svg = $('#pfSvg'), imgWrap = $('#pfImgWrap'), boxEl = $('#pfBox');
  const mq = '(max-width: 767px)';
  let mobile = matchMedia(mq).matches;
  const size = () => Math.max(110, Math.min(mobile ? 170 : 280, Math.round(Math.min(innerWidth, innerHeight) * .34))), rad = () => mobile ? 18 : 24;
  const modeOf = () => matchMedia(mq).matches ? 'm' : (innerWidth < innerHeight * .95 ? 'p' : (innerHeight < 520 ? 's' : 'd'));
  let mode = modeOf();

  const draw = () => {
    const u = size(), f = rad();
    mode = modeOf();
    const dim = mobile ? { x: '-10%', y: '35%', width: '120%', height: '110%' }
      : mode === 'p' ? { x: '8%', y: '12%', width: '84%', height: '96%' }
      : mode === 's' ? { x: '0', y: '17%', width: '100%', height: '92%' }
      : { x: '0', y: '13%', width: '100%', height: '95%' };
    const attrs = `x="${dim.x}" y="${dim.y}" width="${dim.width}" height="${dim.height}" preserveAspectRatio="${mode === 'p' && !mobile ? 'xMidYMax meet' : 'xMidYMin meet'}"`;
    svg.innerHTML = (mobile ? '' : `
      <defs>
        <filter id="pf-blur" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="6"/><feComponentTransfer><feFuncR type="linear" slope="0.85"/><feFuncG type="linear" slope="0.85"/><feFuncB type="linear" slope="0.85"/></feComponentTransfer></filter>
        <filter id="pf-soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="15"/></filter>
        <mask id="pf-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%"><rect width="100%" height="100%" fill="white"/><g id="pfMaskG"><rect x="${-u / 2}" y="${-u / 2}" width="${u}" height="${u}" rx="${f}" fill="black" filter="url(#pf-soft)"/></g></mask>
      </defs>`) +
      `<image href="${IMG}" ${attrs}/>` + (mobile ? '' : `<image href="${IMG}" ${attrs} filter="url(#pf-blur)" mask="url(#pf-mask)"/>`);
    boxEl.style.cssText = `width:${u}px;height:${u}px;margin-left:${-u / 2}px;margin-top:${-u / 2}px`;
    boxEl.innerHTML = `<div class="absolute inset-0 rounded-[24px] shadow-[0_0_40px_rgba(59,130,246,0.45),inset_0_0_30px_rgba(59,130,246,0.15)]"></div>
      <svg class="absolute inset-0 w-full h-full overflow-visible"><rect x="1" y="1" width="${u - 2}" height="${u - 2}" rx="${f}" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="8 4" class="marching-ants"/></svg>
      ${['-top-1.5 -left-1.5', '-top-1.5 -right-1.5', '-bottom-1.5 -left-1.5', '-bottom-1.5 -right-1.5'].map(c => `<span class="absolute ${c} w-3 h-3 rounded-sm bg-white border-2 border-blue-500 shadow"></span>`).join('')}
      <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-blue-500 px-2 py-0.5 font-mono text-[10px] text-white whitespace-nowrap">${u} × ${u}</span>`;
  };
  draw();
  matchMedia(mq).addEventListener('change', e => { mobile = e.matches; draw(); });

  $('#pfSwatches').innerHTML = PF_COLORS.map(([n, v], i) => `<button type="button" data-v="${v}" aria-label="Switch background to ${n}" aria-pressed="${i === 0}" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-transform duration-300 hover:scale-125 cursor-pointer ${i === 0 ? 'border-white scale-110 shadow-[0_0_0_3px_rgba(255,255,255,0.35)]' : 'border-white/40'}" style="background-color:${v}"></button>`).join('');
  $('#pfSwatches').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('#pfSwatches button').forEach(x => {
      const on = x === b; x.setAttribute('aria-pressed', on);
      x.className = `w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-transform duration-300 hover:scale-125 cursor-pointer ${on ? 'border-white scale-110 shadow-[0_0_0_3px_rgba(255,255,255,0.35)]' : 'border-white/40'}`;
    });
    gsap.to(sec, { backgroundColor: b.dataset.v, duration: .8, ease: 'power2.out' });
  });

  gsap.from(sec.querySelector('#pfWord'), { scale: 1.15, opacity: 0, duration: 1.4, ease: 'power3.out' });
  gsap.from(imgWrap, { scale: .85, opacity: 0, y: 40, duration: 1.4, ease: 'power3.out', delay: .2 });
  gsap.from(boxEl, { opacity: 0, duration: .8, ease: 'power2.out', delay: 1 });

  let W_ = sec.clientWidth || innerWidth, H_ = sec.clientHeight || innerHeight;
  const ky = () => { const m = modeOf(); return m === 'm' ? .47 : m === 'p' ? .5 : m === 's' ? .42 : .38; };
  const target = { x: W_ / 2, y: H_ * ky() }, cur = { ...target };
  let touched = false, lastTouch = -Infinity, visible = true;
  const coarse = matchMedia('(hover: none)').matches;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(sec);
  gsap.ticker.add(() => {
    if (!visible || mobile) return;
    if (coarse && performance.now() - lastTouch > 3000) {
      const t = gsap.ticker.time;
      target.x = W_ / 2 + Math.sin(t * .7) * W_ * .2; target.y = H_ * (ky() + .02) + Math.cos(t * 1.1) * H_ * .05;
    }
    cur.x += (target.x - cur.x) * .12; cur.y += (target.y - cur.y) * .12;
    const g = document.getElementById('pfMaskG'); g && g.setAttribute('transform', `translate(${cur.x} ${cur.y})`);
    boxEl.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
  });
  const move = e => {
    const r = sec.getBoundingClientRect(); W_ = r.width; H_ = r.height;
    target.x = e.clientX - r.left; target.y = e.clientY - r.top; touched = true;
    if (e.pointerType === 'touch') lastTouch = performance.now();
  };
  sec.addEventListener('pointermove', move); sec.addEventListener('pointerdown', move);
  addEventListener('resize', () => { if (modeOf() !== mode || size() !== parseInt(boxEl.style.width)) draw(); W_ = sec.clientWidth || innerWidth; H_ = sec.clientHeight || innerHeight; if (!touched) { target.x = W_ / 2; target.y = H_ * ky(); } });

  /* fixed hero recedes as white hero scrolls over */
  gsap.to('#heroFixed', { scale: .92, opacity: .25, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top bottom', end: 'top top', scrub: true,
      onLeave: () => gsap.set('#heroFixed', { visibility: 'hidden' }), onEnterBack: () => gsap.set('#heroFixed', { visibility: 'visible' }) } });
}

/* ------------------------------------------------------- WHITE HERO */
function buildHero() {
  $('#roleStack').innerHTML = [...ROLES, ROLES[0]].map(r => `<span class="block h-[0.95em] leading-[0.95em] text-outline-dark">${r}</span>`).join('');
  $('#heroSocials').innerHTML = SOCIALS.map(s => `<a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.name}" style="--glow:${s.name === 'GitHub' ? '#18181b' : s.color}" class="w-11 h-11 rounded-full bg-zinc-100 text-zinc-800 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:text-white hover:bg-[var(--glow)] hover:shadow-[0_10px_30px_-6px_var(--glow)]">${icon(s.icon, 'w-[18px] h-[18px]')}</a>`).join('');

  const hero = $('#hero'), text = $('#heroText'), img = $('#heroImgBox'), stack = $('#roleStack'), scene = $('#welcome-scene');
  gsap.from('.hero-reveal', { y: 60, opacity: 0, duration: 1, stagger: .12, ease: 'power3.out', scrollTrigger: { trigger: hero, start: 'top 75%' } });
  const tl = gsap.timeline({ repeat: -1 });
  ROLES.forEach((_, i) => tl.to(stack, { yPercent: -((i + 1) * 100) / (ROLES.length + 1), duration: .7, ease: 'power3.inOut', delay: 1.4 }));
  tl.set(stack, { yPercent: 0 });
  gsap.to(text, { y: -50, opacity: 0, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });

  const pos = el => { let x = 0, y = 0; while (el) { x += el.offsetLeft; y += el.offsetTop; el = el.offsetParent; } return { x, y }; };
  gsap.matchMedia().add({ isMobile: '(max-width: 767px)', isDesktop: '(min-width: 768px)' }, ctx => {
    const m = ctx.conditions.isMobile, S = m ? 1.7 : 2.3;
    const X = () => innerWidth / 2 - (pos(img).x + img.offsetWidth / 2);
    const Y = () => pos(scene).y + innerHeight * (m ? .16 : .1) - pos(img).y;
    const H = () => scene.offsetHeight - innerHeight;
    gsap.set(img, { transformOrigin: '50% 0%' });
    gsap.fromTo(img, { x: 0, y: 0, scale: 1, '--fade-from': '100%', '--fade-to': '100%' },
      { x: X, y: Y, scale: S, force3D: true, '--fade-from': '62%', '--fade-to': '88%', ease: 'power1.inOut', immediateRender: false,
        scrollTrigger: { trigger: hero, start: 'top top', endTrigger: scene, end: 'top top', scrub: true, invalidateOnRefresh: true,
          onToggle: m ? s => { img.style.willChange = s.isActive ? 'transform' : ''; } : undefined } });
    gsap.fromTo(img, { x: X, y: Y, scale: S }, { x: X, y: () => Y() + H(), scale: S * 1.12, ease: 'none', immediateRender: false,
      scrollTrigger: { trigger: scene, start: 'top top', end: 'bottom bottom', scrub: true, invalidateOnRefresh: true } });
  });
}

/* -------------------------------------------------------- WELCOME / WALL */
const TKEY = 'danish-testimonials';
const loadT = () => { try { return JSON.parse(localStorage.getItem(TKEY)) || []; } catch { return []; } };
const AV = ['#facc15', '#3b82f6', '#ec4899', '#10b981', '#8b5cf6', '#f97316'];
const initials = n => n.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
const cardHTML = (t, i) => `<article class="w-[300px] sm:w-[380px] shrink-0 rounded-3xl border border-zinc-200 bg-white/80 backdrop-blur-xl p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl">
  <div class="flex items-center justify-between"><div class="flex items-center gap-3">
    <div class="w-11 h-11 rounded-full flex items-center justify-center font-syne font-black text-sm text-zinc-950" style="background-color:${AV[i % AV.length]}" aria-hidden="true">${initials(t.name)}</div>
    <div><p class="flex items-center gap-1 font-bold text-zinc-950">${esc(t.name)}<span class="w-4 h-4 text-blue-500">${icon('check')}</span></p><p class="text-xs text-zinc-500">${esc(t.role)}</p></div></div>
    <span class="w-6 h-6 text-yellow-400">${icon('trophy')}</span></div>
  <p class="mt-4 text-sm leading-relaxed text-zinc-700">${esc(t.message)}</p>
  <div class="mt-4 flex gap-0.5" aria-label="5 out of 5 stars">${Array.from({ length: 5 }, () => `<span class="w-4 h-4 text-yellow-400">${icon('star')}</span>`).join('')}</div></article>`;
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function renderWall() {
  const items = [...loadT(), ...ACH], a = Math.ceil(items.length / 2), r1 = items.slice(0, a), r2 = items.slice(a).length ? items.slice(a) : r1;
  const row = (list, dir) => `<div class="group flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"><div class="flex w-max gap-6 pr-6 marquee-${dir} group-hover:[animation-play-state:paused]">${[...list, ...list].map((t, i) => cardHTML(t, i % list.length)).join('')}</div></div>`;
  $('#wall').innerHTML = row(r1, 'left') + row(r2, 'right');
}
function addTestimonial(t) { const n = [t, ...loadT()].slice(0, 12); try { localStorage.setItem(TKEY, JSON.stringify(n)); } catch {} renderWall(); }
function buildWelcome() {
  renderWall();
  const sec = $('#welcome'), scene = $('#welcome-scene'), word = $('#welcomeWord'), sub = $('#welcomeSub');
  gsap.fromTo(word, { yPercent: 60, scale: .85, opacity: 0 }, { yPercent: 0, scale: 1, opacity: 1, ease: 'power2.out', scrollTrigger: { trigger: scene, start: 'top 85%', end: 'top top', scrub: true } });
  gsap.fromTo(word, { scale: 1 }, { scale: 1.08, ease: 'none', immediateRender: false, scrollTrigger: { trigger: scene, start: 'top top', end: 'bottom bottom', scrub: true } });
  gsap.fromTo(sub, { y: 40, opacity: 0 }, { y: 0, opacity: 1, ease: 'power3.out', scrollTrigger: { trigger: scene, start: 'top top', end: 'top -30%', scrub: true } });
  gsap.from('.welcome-heading > *', { y: 60, opacity: 0, stagger: .12, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.welcome-heading', start: 'top 80%' } });
}

/* ------------------------------------------------------------- JOURNEY */
function journeyCol(label, ic, items) {
  return `<div class="journey-col"><div class="flex items-center gap-3"><span class="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-zinc-950 shadow-[0_0_30px_rgba(250,204,21,0.35)]"><span class="h-5 w-5">${icon(ic)}</span></span><h3 class="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight">${label}</h3></div>
  <ol class="relative mt-8 pl-8 sm:pl-10"><span class="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-[2px] rounded-full bg-white/10"></span><span class="journey-line absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-[2px] origin-top rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500"></span>
  ${items.map(e => `<li class="journey-item relative pb-6 last:pb-0"><span class="journey-dot absolute -left-8 sm:-left-10 top-6 h-4 w-4 sm:h-6 sm:w-6 rounded-full border-[3px] border-[#0a0a0a] bg-zinc-700"></span>
    <article class="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm transition-[border-color,background-color,translate] duration-500 hover:translate-x-1 hover:border-yellow-400/40 hover:bg-white/[0.06]">
      <p class="font-mono text-xs font-bold uppercase tracking-widest text-yellow-400">${e.period}</p>
      <h4 class="mt-2 font-syne font-black text-xl sm:text-2xl uppercase leading-tight tracking-tight">${e.title}</h4>
      <p class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-white/70"><span>${e.place}</span>${e.location ? `<span class="inline-flex items-center gap-1 text-white/45"><span class="h-3.5 w-3.5">${icon('pin')}</span>${e.location}</span>` : ''}</p>
      ${e.description ? `<p class="mt-3 text-sm leading-relaxed text-white/55">${e.description}</p>` : ''}
      ${e.tags.length ? `<div class="mt-4 flex flex-wrap gap-1.5">${e.tags.map(t => `<span class="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-white/70">${t}</span>`).join('')}</div>` : ''}
    </article></li>`).join('')}</ol></div>`;
}
function buildJourney() {
  $('#journeyGrid').innerHTML = journeyCol('Experience', 'briefcase', EXPERIENCE) + journeyCol('Education', 'cap', EDUCATION);
  const sec = $('#journey');
  gsap.from('.journey-heading > *', { y: 70, opacity: 0, duration: 1.1, stagger: .12, ease: 'power4.out', scrollTrigger: { trigger: sec, start: 'top 75%' } });
  gsap.fromTo('.journey-bg-word', { xPercent: 8 }, { xPercent: -8, ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.utils.toArray('.journey-col').forEach(col => {
    gsap.fromTo(col.querySelector('.journey-line'), { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: col, start: 'top 70%', end: 'bottom 60%', scrub: true } });
    col.querySelectorAll('.journey-item').forEach(it => {
      gsap.from(it.querySelector('article'), { x: 40, opacity: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: it, start: 'top 85%' } });
      gsap.fromTo(it.querySelector('.journey-dot'), { backgroundColor: '#3f3f46', scale: .7, boxShadow: '0 0 0 rgba(250,204,21,0)' },
        { backgroundColor: '#facc15', scale: 1, boxShadow: '0 0 24px rgba(250,204,21,0.7)', duration: .4, ease: 'back.out(2)', scrollTrigger: { trigger: it, start: 'top 62%', toggleActions: 'play none none reverse' } });
    });
  });
}

/* ------------------------------------------------------------ PROJECTS */
const visual = (p, big = false) => p.image ? `<img src="${p.image}" alt="${p.title} screenshot" loading="lazy" class="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" />` : `<div class="absolute inset-0 overflow-hidden" style="background:${p.bg}">
  <div class="absolute -right-6 -top-6 w-40 h-40 rounded-full blur-3xl opacity-40" style="background:${p.accent}"></div>
  <div class="absolute inset-0 flex items-center justify-center ${big ? 'text-[110px]' : 'text-6xl'} drop-shadow-2xl">${p.glyph}</div>
  <div class="absolute left-4 top-4 space-y-1.5 opacity-70">${[60, 38, 48].map(w => `<div class="h-1.5 rounded-full" style="width:${w}px;background:${p.accent}"></div>`).join('')}</div>
  <div class="absolute right-4 bottom-12 font-mono text-[10px] tracking-widest uppercase opacity-60" style="color:${p.accent}">${p.tags[0]} · ${p.tags[1] || ''}</div></div>`;
const jl = (s = '') => s.length > 95 ? s.slice(0, 92) + '...' : s;
function projCard(p, cls = '') {
  return `<article data-pid="${p.id}" class="pj-card group relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.45)] transition-[translate,scale,box-shadow,border-color] duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:border-yellow-400/50 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.55)] cursor-pointer flex flex-col ${cls}">
  <div class="flex shrink-0 items-center justify-between px-3 py-2 bg-zinc-950/90 border-b border-white/10 z-10 backdrop-blur-sm"><div class="flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-[#ff5f57]"></span><span class="h-2 w-2 rounded-full bg-[#febc2e]"></span><span class="h-2 w-2 rounded-full bg-[#28c840]"></span></div><span class="truncate max-w-[160px] sm:max-w-[210px] rounded-full bg-white/[0.06] border border-white/10 px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] text-zinc-300 font-medium">${p.domain}</span><span class="h-2 w-2 rounded-full bg-yellow-400/80"></span></div>
  <div class="relative flex-1 w-full overflow-hidden bg-zinc-950">${visual(p)}
    <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950/95 via-zinc-950/60 to-transparent pointer-events-none"></div>
    <div class="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex items-end justify-between gap-2 z-10 transition-opacity duration-300 group-hover:opacity-0"><div class="min-w-0"><p class="font-mono text-[10px] font-bold uppercase tracking-widest text-yellow-400 drop-shadow">${p.category}</p><h3 class="font-syne font-black text-sm sm:text-base text-white uppercase tracking-tight truncate drop-shadow leading-tight mt-0.5">${p.title}</h3></div><span class="shrink-0 rounded-full bg-white/15 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">Details ↗</span></div>
    <div class="absolute inset-0 z-20 flex flex-col justify-end bg-zinc-950/85 backdrop-blur-md p-4 sm:p-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
      <p class="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-yellow-400">${p.category}</p><h3 class="mt-0.5 font-syne font-black text-base sm:text-xl uppercase text-white leading-tight">${p.title}</h3>
      <p class="mt-1 text-xs text-zinc-300 line-clamp-2 leading-relaxed hidden sm:block">${jl(p.description)}</p>
      <div class="mt-3 flex items-center justify-between gap-2 pt-2 border-t border-white/10"><span class="inline-flex items-center gap-1.5 text-xs font-black uppercase text-yellow-400 group-hover:translate-x-1 transition-transform">View Details →</span>
        <div class="flex gap-1.5" data-stop>${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex h-7 items-center gap-1 rounded-full bg-yellow-400 px-2.5 text-[10px] font-black uppercase text-zinc-950 hover:scale-105 transition-transform"><span class="h-3 w-3">${icon('ext')}</span> Live</a>` : ''}${p.codeUrl ? `<a href="${p.codeUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex h-7 items-center gap-1 rounded-full bg-zinc-800 px-2.5 text-[10px] font-black uppercase text-white hover:scale-105 transition-transform border border-white/20"><span class="h-3 w-3">${icon('github')}</span> Code</a>` : ''}</div></div></div></div></article>`;
}
function folderHTML() {
  return `<div class="relative aspect-[16/10] w-full" style="perspective:900px"><div class="folder-noise absolute inset-x-0 bottom-0 top-[8%] rounded-2xl bg-[#e6b800] shadow-[0_30px_60px_-20px_rgba(120,90,0,0.6)]"><div class="folder-noise absolute -top-[14%] left-0 h-[16%] w-[38%] rounded-t-xl bg-[#e6b800]"></div></div>
  <div class="absolute inset-x-[8%] top-[2%] bottom-[20%] rounded-xl bg-white/90 shadow-md"></div><div class="absolute inset-x-[12%] top-[6%] bottom-[20%] rounded-xl bg-zinc-100 shadow-sm"></div>
  <div id="folderFlap" class="folder-noise absolute inset-x-0 bottom-0 h-[78%] origin-bottom rounded-2xl bg-[#f4c400] border-t border-yellow-200/70 shadow-[0_-8px_20px_rgba(0,0,0,0.12)] flex flex-col items-center justify-center"><span class="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-900/70">Archive // 2026</span><span class="mt-1 font-syne font-black text-2xl uppercase text-zinc-950">${PROJECTS.length} Projects</span></div></div>`;
}
const sec = (title, v) => !v ? '' : `<div class="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6"><h3 class="font-syne font-black text-xs sm:text-sm uppercase tracking-wider text-yellow-400">${title}</h3>${Array.isArray(v) ? `<ul class="mt-4 space-y-2.5">${v.map(k => `<li class="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed"><span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400"></span><span>${k}</span></li>`).join('')}</ul>` : `<p class="mt-3 text-sm text-zinc-300 leading-relaxed">${v}</p>`}</div>`;
function openProject(p) {
  const m = $('#pjModal');
  m.innerHTML = `<div id="pjBox" class="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0c0d12] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden text-white">
    <div class="flex shrink-0 items-center justify-between px-4 sm:px-6 py-3.5 bg-zinc-900/90 border-b border-white/10 backdrop-blur-md"><div class="flex items-center gap-2"><button data-close title="Close" class="h-3 w-3 rounded-full bg-[#ff5f57] hover:opacity-80 transition-opacity cursor-pointer"></button><span class="h-3 w-3 rounded-full bg-[#febc2e]"></span><span class="h-3 w-3 rounded-full bg-[#28c840]"></span></div>
      <div class="flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/10 px-3 py-1 font-mono text-xs text-zinc-300"><span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span><span class="truncate max-w-[180px] sm:max-w-xs">${p.domain}</span></div>
      <button data-close aria-label="Close modal" class="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-zinc-950 transition-all cursor-pointer"><span class="h-4 w-4">${icon('x')}</span></button></div>
    <div data-lenis-prevent class="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 md:p-8 space-y-6">
      <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl h-[260px] sm:h-[340px]">${visual(p, true)}${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener" class="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-mono text-yellow-400">Live Demo ↗</a>` : ''}</div>
      <div><div class="flex flex-wrap items-center gap-2"><span class="font-mono text-xs font-bold uppercase tracking-widest text-yellow-400">${p.category}</span><span class="text-white/30">•</span><span class="font-mono text-xs text-white/60">${p.context}</span></div>
        <h2 class="mt-2 font-syne font-black text-2xl sm:text-4xl uppercase tracking-tight text-white leading-tight">${p.title}</h2><p class="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">${p.description}</p></div>
      ${sec('The Problem', p.problem)}${sec('The Solution', p.solution)}
      <div class="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6"><h3 class="font-syne font-black text-xs sm:text-sm uppercase tracking-wider text-yellow-400 flex items-center gap-2"><span class="h-4 w-4">${icon('sparkle')}</span>Key Features &amp; Highlights</h3>
        <ul class="mt-4 space-y-2.5">${p.keyPoints.map(k => `<li class="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed"><span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400"></span><span>${k}</span></li>`).join('')}</ul></div>
      ${sec('How It Is Built', p.built)}${sec('Decisions Worth Mentioning', p.decisions)}${(p.extra || []).map(e => sec(e.title, e.body)).join('')}${p.stats ? `<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">${p.stats.map(([v, l]) => `<div class="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center"><p class="font-syne font-black text-3xl text-yellow-400">${v}</p><p class="mt-1 text-[11px] font-mono uppercase tracking-wider text-white/50">${l}</p></div>`).join('')}</div>` : ''}
      <div><h3 class="font-mono text-xs font-bold uppercase tracking-wider text-white/50">Technologies &amp; Tools</h3><div class="mt-3 flex flex-wrap gap-2">${p.tags.map(t => `<span class="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-xs text-white/80">${t}</span>`).join('')}</div></div></div>
    <div class="shrink-0 border-t border-white/10 bg-zinc-950/95 backdrop-blur-md px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3"><div class="text-xs text-white/40 font-mono hidden sm:block">${p.context}</div>
      <div class="flex items-center gap-2.5 w-full sm:w-auto justify-end">${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener" class="inline-flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-zinc-950 hover:bg-yellow-300 hover:scale-105 transition-all">Live Demo</a>` : ''}${p.codeUrl ? `<a href="${p.codeUrl}" target="_blank" rel="noopener" class="inline-flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-full bg-zinc-800 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white border border-white/20 hover:bg-zinc-700 hover:scale-105 transition-all"><span class="h-4 w-4">${icon('github')}</span>Source Code</a>` : ''}<button data-close class="rounded-full px-4 py-2 text-xs font-bold uppercase text-zinc-400 hover:text-white transition-colors cursor-pointer">Close</button></div></div></div>`;
  m.classList.remove('hidden'); m.classList.add('flex'); lenis.stop();
  gsap.fromTo(m, { opacity: 0 }, { opacity: 1, duration: .3 }); gsap.fromTo('#pjBox', { y: 30, scale: .96 }, { y: 0, scale: 1, duration: .4, ease: 'power3.out' });
}
const closeProject = () => { const m = $('#pjModal'); m.classList.add('hidden'); m.classList.remove('flex'); m.innerHTML = ''; lenis.start(); };
function buildProjects() {
  const gridCards = PROJECTS.slice(0, 8).map((p, i) => `<div class="pj-slot relative z-10 will-change-transform" data-i="${i}"><div class="float-idle" style="animation-delay:${i * -1.1}s">${projCard(p)}</div></div>`);
  $('#pjGrid').innerHTML = [...gridCards.slice(0, 4), `<div id="pjFolder" class="relative z-0 hidden lg:block self-center">${folderHTML()}</div>`, ...gridCards.slice(4)].join('');
  $('#pjMobile').innerHTML = PROJECTS.map(p => `<div class="pj-mob w-[82vw] shrink-0 snap-center transition-[scale,opacity] duration-500 scale-[0.92] opacity-60"><div class="mobile-reveal">${projCard(p)}<div class="mt-3 px-1"><p class="font-mono text-[10px] font-bold uppercase tracking-widest text-yellow-600">${p.category}</p><h3 class="font-syne font-black text-lg uppercase">${p.title}</h3></div></div></div>`).join('');
  $('#pjMore').innerHTML = PROJECTS.length > 8 ? `<h3 class="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight">More Projects</h3><div class="mt-6 divide-y divide-zinc-300/70 border-y border-zinc-300/70">${PROJECTS.slice(8).map((p, i) => `<article data-pid="${p.id}" class="pj-card group flex flex-wrap items-center justify-between gap-3 py-5 cursor-pointer transition-colors hover:bg-yellow-400/10 px-2"><div class="flex items-center gap-4 min-w-0"><span class="font-mono text-xs text-zinc-500">${String(i + 9).padStart(2, '0')}</span><span class="text-2xl">${p.glyph}</span><div class="min-w-0"><h4 class="font-syne font-black text-lg sm:text-xl uppercase tracking-tight truncate">${p.title}</h4><p class="font-mono text-[11px] uppercase tracking-widest text-yellow-600">${p.category}</p></div></div><div class="hidden md:flex flex-wrap gap-1.5">${p.tags.slice(0, 3).map(t => `<span class="rounded-full border border-zinc-300 px-3 py-1 font-mono text-[11px] text-zinc-600">${t}</span>`).join('')}</div><span class="text-xs font-black uppercase text-zinc-900 group-hover:translate-x-1 transition-transform">Details \u2197</span></article>`).join('')}</div>` : '';
  $('#pjDots').innerHTML = PROJECTS.map(() => '<span class="h-1.5 rounded-full transition-all duration-300 w-1.5 bg-zinc-300"></span>').join('');

  document.addEventListener('click', e => {
    if (e.target.closest('[data-stop]')) return;
    const c = e.target.closest('.pj-card'); if (c) return openProject(PROJECTS.find(p => p.id == c.dataset.pid));
    if (e.target.closest('[data-close]') || e.target === $('#pjModal')) closeProject();
  });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#pjModal').classList.contains('hidden')) closeProject(); });

  /* mobile carousel focus */
  const mob = $('#pjMobile'), slides = $$('.pj-mob'), dots = $$('#pjDots span');
  const focus = () => {
    const mid = mob.scrollLeft + mob.clientWidth / 2; let best = 0, d = 1e9;
    slides.forEach((s, i) => { const x = Math.abs(s.offsetLeft + s.offsetWidth / 2 - mid); if (x < d) { d = x; best = i; } });
    slides.forEach((s, i) => { s.classList.toggle('scale-100', i === best); s.classList.toggle('opacity-100', i === best); s.classList.toggle('scale-[0.92]', i !== best); s.classList.toggle('opacity-60', i !== best); });
    dots.forEach((s, i) => { s.className = `h-1.5 rounded-full transition-all duration-300 ${i === best ? 'w-6 bg-zinc-950' : 'w-1.5 bg-zinc-300'}`; });
  };
  mob.addEventListener('scroll', focus, { passive: true }); focus();

  const sec = $('#portfolio-projects'), stage = $('#pjStage'), title = $('#pjTitle'), folder = $('#pjFolder'), flap = $('#folderFlap');
  const slotsEls = $$('.pj-slot');
  gsap.from(title, { yPercent: 40, opacity: 0, duration: 1.2, ease: 'power4.out', scrollTrigger: { trigger: title, start: 'top 85%' } });
  const mm = gsap.matchMedia();
  mm.add('(min-width: 1024px)', () => {
    const d = (el, ax) => !folder || !el ? 0 : ax === 'x' ? folder.offsetLeft + folder.offsetWidth / 2 - (el.offsetLeft + el.offsetWidth / 2) : folder.offsetTop + folder.offsetHeight / 2 - (el.offsetTop + el.offsetHeight / 2);
    const order = [1, 3, 4, 0, 2, 6, 5, 7].map(i => slotsEls[i]).filter(Boolean);
    gsap.timeline({ scrollTrigger: { trigger: stage, start: 'top 55%', toggleActions: 'play none none reverse' } })
      .from(folder, { y: () => innerHeight * .65, scale: .8, rotateX: 25, ease: 'power3.out', duration: .8 }, 0)
      .to(flap, { rotateX: -38, ease: 'back.out(2)', duration: .35 }, .6)
      .from(order, { x: (i, el) => d(el, 'x'), y: (i, el) => d(el, 'y') - 20, z: -200, scale: .15, rotateX: 55,
        rotateY: i => [-30, 25, -20, 30, -25, 20, -30, 25][i], rotate: i => [-14, 10, -8, 12, -10, 8, -12, 14][i], ease: 'back.out(1.2)', duration: .8, stagger: .1 }, .85)
      .from(order, { autoAlpha: 0, ease: 'power1.out', duration: .15, stagger: .1 }, .85)
      .to(title, { scale: .92, opacity: .8, ease: 'power2.out', duration: 1.4 }, .8);
  });
  gsap.from('.mobile-reveal', { scrollTrigger: { trigger: mob, start: 'top 85%' }, x: 80, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out' });
}

/* ------------------------------------------------------------ SERVICES */
function svCard(s, i, cls = '') {
  const rule = s.ink === '#ffffff' ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)';
  return `<article class="group relative overflow-hidden rounded-[30px] border-[6px] border-white shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)] ${cls}" style="background-color:${s.card};color:${s.ink}">
  <div class="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-white/25 via-transparent to-transparent"></div>
  <div class="relative z-10 flex h-full flex-col p-5 sm:p-6">
    <div class="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest opacity-80"><span>Danish.ai</span><span>${String(i + 1).padStart(2, '0')} / ${s.tag}</span></div>
    <h3 class="mt-4 font-syne font-black uppercase leading-[0.92] tracking-tight text-[28px] sm:text-[34px]">${s.lines.map((l, n) => `<span class="block" ${n === 1 ? `style="color:${s.accent}"` : ''}>${l}</span>`).join('')}</h3>
    <p class="mt-3 max-w-[60%] text-xs leading-relaxed opacity-80">${s.description}</p>
    <a href="#contact" data-go="#contact" class="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-wider transition-transform duration-500 group-hover:scale-105" style="background-color:${s.accent};color:${isLight(s.accent) ? '#18181b' : '#ffffff'}">Get Started <span class="h-3.5 w-3.5">${icon('arrow')}</span></a>
    <div class="absolute right-[-8%] bottom-[19%] w-[66%] rotate-[-5deg] overflow-hidden rounded-xl border-4 border-zinc-900 bg-zinc-900 shadow-2xl transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105"><div class="relative aspect-[16/10] w-full overflow-hidden" style="background:linear-gradient(135deg,#18181b,#27272a)">
      <div class="absolute left-3 top-3 flex gap-1"><span class="h-1.5 w-1.5 rounded-full bg-[#ff5f57]"></span><span class="h-1.5 w-1.5 rounded-full bg-[#febc2e]"></span><span class="h-1.5 w-1.5 rounded-full bg-[#28c840]"></span></div>
      <div class="absolute inset-0 flex items-center justify-center text-5xl">${s.glyph}</div>
      <div class="absolute left-3 bottom-3 space-y-1">${[44, 28].map(w => `<div class="h-1 rounded-full" style="width:${w}px;background:${s.card}"></div>`).join('')}</div></div></div>
    <div class="mt-auto grid grid-cols-4 gap-1 border-t pt-3" style="border-color:${rule}">${SV_FEATURES.map(f => `<div class="flex flex-col items-center gap-1 text-center"><span class="h-4 w-4">${icon(f.icon)}</span><span class="text-[9px] font-bold uppercase tracking-wide opacity-80">${f.label}</span></div>`).join('')}</div>
  </div></article>`;
}
function buildServices() {
  const sec = $('#services'), N = SERVICES.length, head = $('#svHead'), count = $('#svCount');
  $('#svStage').innerHTML = SERVICES.map((s, i) => `<div class="sv-slot absolute will-change-transform" style="width:420px;height:550px;left:-210px;top:-275px">${svCard(s, i, 'h-full w-full')}</div>`).join('');
  $('#svMobile').innerHTML = SERVICES.map((s, i) => `<div class="sv-mob snap-center shrink-0 transition-[scale,opacity] duration-500 ${i ? 'scale-90 opacity-70' : 'scale-100 opacity-100'}">${svCard(s, i, 'w-[80vw] max-w-[420px] h-[min(450px,58vh)]')}</div>`).join('');
  let active = 0;
  const setTone = () => {
    const light = isLight(SERVICES[active].color);
    [head, count, $('#svMobCtl')].forEach(el => { el.classList.toggle('text-zinc-950', light); el.classList.toggle('text-white', !light); });
    gsap.to(sec, { backgroundColor: SERVICES[active].color, duration: .6, ease: 'power2.out' });
    count.textContent = `${String(active + 1).padStart(2, '0')} / ${String(N).padStart(2, '0')}`;
    $('#svMobCtl').innerHTML = `<div class="flex items-center gap-2">${SERVICES.map((_, i) => `<button type="button" data-sv="${i}" aria-label="Show service ${i + 1}" class="h-2 rounded-full transition-all duration-300 bg-current ${i === active ? 'w-7' : 'w-2 opacity-35'}"></button>`).join('')}</div><p class="text-[11px] font-bold uppercase tracking-[0.25em] opacity-70">${String(active + 1).padStart(2, '0')} / ${String(N).padStart(2, '0')} · Swipe →</p>`;
  };
  setTone();
  const mob = $('#svMobile');
  $('#svMobCtl').addEventListener('click', e => { const b = e.target.closest('[data-sv]'); if (!b) return; const el = $$('.sv-mob')[b.dataset.sv]; mob.scrollTo({ left: el.offsetLeft - (mob.clientWidth - el.offsetWidth) / 2, behavior: 'smooth' }); });
  mob.addEventListener('scroll', () => {
    const mid = mob.scrollLeft + mob.clientWidth / 2; let best = 0, d = 1e9;
    $$('.sv-mob').forEach((s, i) => { const x = Math.abs(s.offsetLeft + s.offsetWidth / 2 - mid); if (x < d) { d = x; best = i; } });
    if (best !== active) { active = best; setTone(); $$('.sv-mob').forEach((s, i) => { s.classList.toggle('scale-100', i === best); s.classList.toggle('opacity-100', i === best); s.classList.toggle('scale-90', i !== best); s.classList.toggle('opacity-70', i !== best); }); }
  }, { passive: true });

  gsap.matchMedia().add('(min-width: 1024px)', () => {
    const slots = $$('.sv-slot'), stage = $('#svStage'), R = 1100, K = .4;
    const fit = () => gsap.set(stage, { scale: Math.min(1, innerHeight / 920) });
    fit(); addEventListener('resize', fit);
    const upd = p => {
      const t = p * (N - 1);
      slots.forEach((el, i) => {
        const r = i - t, a = r * K, ab = Math.abs(r);
        gsap.set(el, { x: Math.sin(a) * R, y: R - Math.cos(a) * R, z: -ab * 50, rotationZ: a * 180 / Math.PI, scale: Math.max(.4, 1 - ab * .15), opacity: Math.max(0, 1 - Math.max(0, ab - .6) * .45), zIndex: 100 - Math.round(ab * 10) });
      });
      const n = Math.round(t); if (n !== active) { active = n; setTone(); }
    };
    upd(0);
    ScrollTrigger.create({ trigger: sec, start: 'top top', end: '+=500%', pin: true, scrub: true, onUpdate: s => upd(s.progress) });
    return () => removeEventListener('resize', fit);
  });
}

/* ------------------------------------------------------------- CONTACT */
function buildContact() {
  $('#contactSocials').innerHTML = SOCIALS.map(s => `<a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.name}" class="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 border-white bg-transparent text-white flex items-center justify-center transition-all duration-500 hover:scale-105 hover:bg-white hover:text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">${icon(s.icon, 'w-7 h-7 sm:w-10 sm:h-10')}</a>`).join('');
  const sec = $('#contact');
  ScrollTrigger.create({ trigger: sec, start: 'bottom bottom', end: '+=100%', pin: true, pinSpacing: false });
  gsap.from('.contact-reveal', { y: 60, opacity: 0, duration: 1, stagger: .1, ease: 'power3.out', scrollTrigger: { trigger: sec, start: 'top 70%' } });
  gsap.fromTo('.contact-bg-word', { yPercent: 20, scale: .9 }, { yPercent: -10, scale: 1, ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom bottom', scrub: true } });

  const form = $('#contactForm'), status = $('#cfStatus');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const v = Object.fromEntries(new FormData(form)), err = {};
    if (!(v.name || '').trim()) err.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v.email || '').trim())) err.email = 'A valid email is required so I can reply';
    if (!(v.message || '').trim()) err.message = 'Message is required';
    $$('.err', form).forEach(p => p.textContent = err[p.dataset.for] || '');
    if (Object.keys(err).length) return;
    $('#cfBtn').disabled = true; $('#cfLabel').textContent = 'Sending…';
    try {
      const fd = new FormData();
      fd.append('name', v.name.trim()); fd.append('email', v.email.trim()); fd.append('message', v.message.trim());
      fd.append('_subject', `New portfolio inquiry from ${v.name.trim()}`); fd.append('_replyto', v.email.trim()); fd.append('_template', 'table'); fd.append('_captcha', 'false');
      const r = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, { method: 'POST', headers: { Accept: 'application/json' }, body: fd });
      const j = await r.json().catch(() => ({}));
      if (r.ok && String(j.success) === 'true') { status.className = 'text-center text-sm text-green-400'; status.textContent = 'Thanks! Your message is on its way — I’ll reply soon.'; form.reset(); }
      else throw new Error(j.message || 'Could not send right now.');
    } catch (ex) { status.className = 'text-center text-sm text-red-400'; status.textContent = `${ex.message} You can also reach me on WhatsApp.`; }
    $('#cfBtn').disabled = false; $('#cfLabel').textContent = 'Send';
  });
}

/* -------------------------------------------------------------- FOOTER */
function buildFooter() {
  $('#ftMarquee').innerHTML = FOOT_MARQUEE.map((m, i) => `<div class="flex overflow-hidden" style="opacity:${.07 + (i % 2) * .02}"><div class="flex w-max marquee-${m.dir}">${Array.from({ length: 4 }, () => `<span class="font-syne font-black uppercase whitespace-nowrap text-[11vw] md:text-[6.5vw] leading-[1.05] tracking-tight pr-[3vw]">${m.text} •</span>`).join('')}</div></div>`).join('');
  $('#yr').textContent = new Date().getFullYear();
  gsap.from('footer .float-idle', { scale: .8, opacity: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: 'footer', start: 'top 80%' } });
}

/* ---------------------------------------------------------------- INIT */
hydrateIcons();
buildNav();
buildInteractiveHero();
buildHero();
buildWelcome();
buildJourney();
buildProjects();
buildServices();
buildContact();
buildFooter();
hydrateIcons();

let rt; const refresh = () => { clearTimeout(rt); rt = setTimeout(() => ScrollTrigger.refresh(), 200); };
new ResizeObserver(refresh).observe(document.body);
addEventListener('load', refresh);
document.fonts && document.fonts.ready.then(refresh);
