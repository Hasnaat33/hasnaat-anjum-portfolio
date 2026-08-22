/**
 * Signal Atelier page style: editorial brutalism softened by warm, premium
 * materials. Keep the asymmetric hierarchy, signal-gold accents, and calm
 * operational storytelling intact when extending this page.
 */
import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  DatabaseZap,
  Globe2,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Search,
  Send,
  ShoppingBag,
  Sparkles,
  Sun,
  Target,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

const portrait = "/manus-storage/hasnaat-portrait_01ee67e4.jpeg";
const mark = "/manus-storage/hasnaat-mark_f53c102c.png";
const heroNetwork = "/manus-storage/hasnaat-hero-network_ec91b4e0.jpg";
const agentLab = "/manus-storage/hasnaat-agent-lab_c7350836.jpg";
const commerceStudio = "/manus-storage/hasnaat-commerce-studio_0e2053a3.jpg";
const gridTexture = "/manus-storage/hasnaat-grid-texture_6907eec2.jpg";
const contactEmail = "hasnaatanjum771@gmail.com";
const whatsappUrl = "https://wa.me/923143621992";

const skills = [
  {
    title: "AI Agents Development",
    short: "Agent architecture & tools",
    progress: 94,
    icon: Bot,
    tools: ["Manus", "n8n", "Bolt"],
  },
  {
    title: "Automation",
    short: "Workflows that remove drag",
    progress: 92,
    icon: Workflow,
    tools: ["Business ops", "WhatsApp bots", "Integrations"],
  },
  {
    title: "Shopify Development",
    short: "Commerce built to convert",
    progress: 90,
    icon: ShoppingBag,
    tools: ["Store setup", "Themes", "Apps"],
  },
  {
    title: "SEO Expert",
    short: "Technical visibility systems",
    progress: 88,
    icon: Search,
    tools: ["On-page", "Off-page", "Technical"],
  },
  {
    title: "Digital Marketing",
    short: "Paid & organic growth",
    progress: 89,
    icon: Target,
    tools: ["Meta ads", "Google ads", "Social"],
  },
];

const services = [
  {
    number: "01",
    title: "AI agent systems",
    description:
      "Purpose-built agents that can answer, qualify, route, research, and move work forward across your business.",
    icon: Bot,
    label: "Designed for leverage",
  },
  {
    number: "02",
    title: "Automation architecture",
    description:
      "Reliable workflows connecting the tools, teams, and customers that keep your operations moving.",
    icon: Workflow,
    label: "Built to run quietly",
  },
  {
    number: "03",
    title: "Shopify commerce",
    description:
      "Conversion-conscious Shopify stores, themes, and integrations that make selling feel straightforward.",
    icon: ShoppingBag,
    label: "Optimised for action",
  },
  {
    number: "04",
    title: "Search visibility",
    description:
      "A complete view of technical SEO, on-page structure, and off-page opportunities to strengthen discovery.",
    icon: Search,
    label: "Grounded in intent",
  },
  {
    number: "05",
    title: "Digital growth",
    description:
      "Paid media and social programs organised around sharper attribution, creative testing, and meaningful momentum.",
    icon: Target,
    label: "Measured for impact",
  },
];

const projects = [
  {
    category: "AI Agents",
    title: "Inbox Intelligence Agent",
    description: "An enquiry triage concept that classifies, qualifies, and routes high-intent messages.",
    tags: ["Manus", "Agent design", "CRM"],
    tone: "ink",
    icon: Sparkles,
  },
  {
    category: "AI Agents",
    title: "Research Sprint Agent",
    description: "A compact research workflow designed to turn scattered market signals into useful briefings.",
    tags: ["Research", "Automation", "Briefs"],
    tone: "cream",
    icon: DatabaseZap,
  },
  {
    category: "AI Agents",
    title: "Support Co-pilot",
    description: "A service assistant concept for faster, more consistent customer replies and hand-offs.",
    tags: ["Support", "Knowledge", "Ops"],
    tone: "gold",
    icon: MessageCircle,
  },
  {
    category: "Automation",
    title: "Lead-to-Action Flow",
    description: "A lead handling blueprint that connects capture, qualification, follow-up, and reporting.",
    tags: ["n8n", "Lead ops", "Alerts"],
    tone: "cream",
    icon: Workflow,
  },
  {
    category: "Automation",
    title: "WhatsApp Order Desk",
    description: "A conversational commerce flow for taking questions and giving order updates at speed.",
    tags: ["WhatsApp", "Commerce", "Bots"],
    tone: "ink",
    icon: MessageCircle,
  },
  {
    category: "Automation",
    title: "Ops Pulse Board",
    description: "A single source of operational signals assembled from routine, repetitive workflows.",
    tags: ["Reporting", "Ops", "Data"],
    tone: "gold",
    icon: CircleDot,
  },
  {
    category: "Shopify",
    title: "DTC Store Foundation",
    description: "A structured storefront direction balancing persuasive merchandising with fast browsing.",
    tags: ["Shopify", "Theme", "UX"],
    tone: "gold",
    icon: ShoppingBag,
  },
  {
    category: "Shopify",
    title: "Retention Layer",
    description: "A post-purchase journey concept that turns fulfilment moments into repeat-buying signals.",
    tags: ["Apps", "CRM", "Retention"],
    tone: "cream",
    icon: Layers3,
  },
  {
    category: "Shopify",
    title: "Product Discovery Map",
    description: "A navigation and collection structure for simplifying choice across larger catalogues.",
    tags: ["IA", "Collections", "CRO"],
    tone: "ink",
    icon: Globe2,
  },
  {
    category: "SEO",
    title: "Technical Health Sprint",
    description: "An audit framework to prioritise crawlability, performance, and indexation foundations.",
    tags: ["Technical", "Audits", "Speed"],
    tone: "ink",
    icon: Search,
  },
  {
    category: "SEO",
    title: "Intent-led Content Map",
    description: "A topic system aligned to what customers need before they are ready to buy.",
    tags: ["Strategy", "On-page", "Content"],
    tone: "cream",
    icon: Code2,
  },
  {
    category: "SEO",
    title: "Authority Signal Plan",
    description: "A measured off-page approach focused on relevance, reach, and durable search equity.",
    tags: ["Off-page", "PR", "Authority"],
    tone: "gold",
    icon: ArrowUpRight,
  },
  {
    category: "Marketing",
    title: "Performance Creative Lab",
    description: "A systematic campaign concept for testing messages, hooks, and creative across paid channels.",
    tags: ["Meta ads", "Creative", "Testing"],
    tone: "gold",
    icon: Instagram,
  },
  {
    category: "Marketing",
    title: "Search Demand Capture",
    description: "A paid search structure organised around commercial intent and clean optimisation signals.",
    tags: ["Google ads", "PPC", "Intent"],
    tone: "ink",
    icon: Target,
  },
  {
    category: "Marketing",
    title: "Social Growth System",
    description: "A planning framework for channel-native storytelling that builds familiarity and action.",
    tags: ["Social", "Content", "Growth"],
    tone: "cream",
    icon: Zap,
  },
];

const navItems = [
  ["About", "about"],
  ["Capabilities", "skills"],
  ["Services", "services"],
  ["Selected work", "work"],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}<img src={mark} alt="" /></p>;
}

function SectionHeading({
  overline,
  title,
  description,
}: {
  overline: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <Eyebrow>{overline}</Eyebrow>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const shouldReduceMotion = useReducedMotion();
  const filters = ["All", "AI Agents", "Automation", "Shopify", "SEO", "Marketing"];
  const visibleProjects = projectFilter === "All" ? projects : projects.filter((project) => project.category === projectFilter);

  const rise = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    show: { opacity: 1, y: 0 },
  };

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const subject = `Portfolio enquiry from ${name || "a new contact"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nProject brief:\n${message}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email draft.", { description: `Your enquiry is addressed to ${contactEmail}.` });
    event.currentTarget.reset();
  }

  function directChannel(channel: string) {
    scrollToId("contact");
    toast.message(`${channel} details`, {
      description: "Use the contact brief below to start a project conversation.",
    });
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="grain" aria-hidden="true" />
      <aside className="signal-rail" aria-label="Availability signal">
        <div className="signal-rail__line" />
        <span className="signal-rail__dot" />
        <span className="signal-rail__label">Available for select projects</span>
      </aside>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hasnaat Anjum home">
          <span className="brand-mark-wrap"><img src={mark} alt="" className="brand-mark" /></span>
          <span className="brand-name">Hasnaat<br />Anjum</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollToId(id)}>{label}</button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle colour theme">
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <button className="header-cta" onClick={() => scrollToId("contact")}>Let&apos;s talk <ArrowDownRight size={16} /></button>
        </div>
      </header>

      {menuOpen ? (
        <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} aria-label="Mobile navigation">
          {navItems.map(([label, id], index) => (
            <button key={id} onClick={() => { scrollToId(id); setMenuOpen(false); }}>
              <span>0{index + 1}</span>{label}<ArrowDownRight size={18} />
            </button>
          ))}
          <button onClick={() => { scrollToId("contact"); setMenuOpen(false); }}><span>05</span>Start a conversation<ArrowDownRight size={18} /></button>
        </motion.nav>
      ) : null}

      <main id="top">
        <section className="hero section-shell">
          <img className="hero-network" src={heroNetwork} alt="" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
            <motion.p variants={rise} className="hero-kicker"><span /> Independent systems partner</motion.p>
            <motion.h1 variants={rise}>Build the work<br /><em>that runs</em> the work.</motion.h1>
            <motion.p variants={rise} className="hero-intro">
              I&apos;m <strong>Hasnaat Anjum</strong>—an AI agents developer, automation expert, and digital marketing specialist designing the systems that help ambitious businesses move with more leverage.
            </motion.p>
            <motion.div variants={rise} className="hero-actions">
              <button className="primary-button" onClick={() => scrollToId("contact")}>
                Hire me <span><ArrowDownRight size={19} /></span>
              </button>
              <button className="text-button" onClick={() => scrollToId("work")}>Explore selected work <ChevronRight size={17} /></button>
            </motion.div>
          </motion.div>

          <motion.div className="hero-portrait-stage" initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.97, y: shouldReduceMotion ? 0 : 26 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}>
            <div className="portrait-cut"><img src={portrait} alt="Hasnaat Anjum, AI automation and e-commerce specialist" /></div>
            <div className="portrait-outline" />
            <div className="portrait-caption"><span>AI systems</span><span>Commerce</span><span>Growth</span></div>
            <div className="hero-proof-card"><span className="proof-spark"><img src={mark} alt="" /></span><p>Designed for execution.</p><strong>Systems over busywork</strong></div>
          </motion.div>

          <div className="hero-bottom"><span>Scroll to explore</span><div className="hero-scroll-line" /><span>2026</span></div>
        </section>

        <section id="about" className="about section-shell">
          <div className="about-topline"><Eyebrow>01 — The operator</Eyebrow><span>Based online · Working globally</span></div>
          <div className="about-layout">
            <motion.div className="about-portrait" initial={rise.hidden} whileInView={rise.show} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>
              <img src={portrait} alt="Hasnaat Anjum in a professional e-commerce workspace" />
              <span className="portrait-coordinate coordinate-one">System builder</span>
              <span className="portrait-coordinate coordinate-two">Growth-minded</span>
            </motion.div>
            <motion.div className="about-content" initial={rise.hidden} whileInView={rise.show} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: 0.08 }}>
              <h2>Technology is only useful when it becomes <em>momentum.</em></h2>
              <p>I work at the intersection of AI, automation, e-commerce, and demand generation. My focus is practical: creating better ways for teams to handle their operations, experiences, and growth.</p>
              <p>Whether you need an agent that thinks alongside your team, a Shopify store that sells with clarity, or marketing that sees the whole customer journey, I build with commercial intent at the centre.</p>
              <div className="about-notes">
                <div><span className="note-number">05</span><span>Core disciplines, one connected approach</span></div>
                <div><span className="note-number">01</span><span>Clear partner from strategy through delivery</span></div>
              </div>
              <button className="underlined-button" onClick={() => scrollToId("services")}>How I can help <ArrowDownRight size={17} /></button>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="skills-section section-shell" style={{ backgroundImage: `url(${gridTexture})` }}>
          <div className="skills-intro">
            <SectionHeading overline="02 — Capabilities" title={<>A focused toolkit for<br /><em>modern operators.</em></>} description="Different disciplines, designed to work as one clear growth system." />
            <div className="skills-side-note"><span>THE METHOD</span><p>Make the next best action easier, more consistent, and less manual.</p></div>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.article className="skill-row" key={skill.title} initial={rise.hidden} whileInView={rise.show} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.05 }}>
                  <span className="skill-index">0{index + 1}</span>
                  <span className="skill-icon"><Icon size={23} strokeWidth={1.7} /></span>
                  <div className="skill-title"><h3>{skill.title}</h3><p>{skill.short}</p></div>
                  <div className="skill-tools">{skill.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                  <div className="skill-meter" aria-label={`${skill.title}: ${skill.progress}%`}><div className="skill-track"><motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.progress}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.08 }} /></div><strong>{skill.progress}%</strong></div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="services" className="services section-shell">
          <SectionHeading overline="03 — Services" title={<>Bring sharper systems<br />to <em>the way you grow.</em></>} description="Clear scope, thoughtful execution, and solutions built around the way your business actually works." />
          <div className="service-feature-row">
            <div className="service-editorial-image"><img src={agentLab} alt="Abstract visualization of connected AI workflow systems" /><div><span>AI operators</span><p>Small details. Better movement.</p></div></div>
            <div className="service-editorial-image service-editorial-image--commerce"><img src={commerceStudio} alt="Abstract premium e-commerce commerce workspace" /><div><span>Commerce design</span><p>Every click has a job.</p></div></div>
          </div>
          <div className="service-list">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article className="service-row" key={service.title} initial={rise.hidden} whileInView={rise.show} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.05 }}>
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon"><Icon size={25} strokeWidth={1.55} /></span>
                  <div className="service-copy"><h3>{service.title}</h3><p>{service.description}</p></div>
                  <span className="service-label">{service.label}</span>
                  <button aria-label={`Enquire about ${service.title}`} onClick={() => scrollToId("contact")}><ArrowUpRight size={21} /></button>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="work" className="work section-shell">
          <div className="work-header">
            <SectionHeading overline="04 — Selected work" title={<>A few ways the<br /><em>system can show up.</em></>} description="A working portfolio of build directions across the five disciplines." />
            <p className="work-disclaimer">Project studies are representative directions, presented to show the range and operational intent behind each discipline.</p>
          </div>
          <div className="project-filters" aria-label="Filter projects by capability">
            {filters.map((filter) => <button key={filter} onClick={() => setProjectFilter(filter)} className={projectFilter === filter ? "active" : ""}>{filter}</button>)}
          </div>
          <motion.div layout className="projects-grid">
            {visibleProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article layout className={`project-card project-card--${project.tone} ${index === 0 ? "project-card--featured" : ""}`} key={project.title} initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: Math.min(index, 6) * 0.025 }}>
                  <div className="project-card__visual"><span>{project.category}</span><Icon size={index % 3 === 0 ? 64 : 54} strokeWidth={1.05} /><i /><i /><i /></div>
                  <div className="project-card__body"><div className="project-card__heading"><h3>{project.title}</h3><button onClick={() => scrollToId("contact")} aria-label={`Discuss ${project.title}`}><ArrowUpRight size={18} /></button></div><p>{project.description}</p>{index === 0 ? <div className="project-outcome"><span>Outcome target</span><strong>Faster, clearer qualified response</strong></div> : null}<div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section id="contact" className="contact section-shell">
          <div className="contact-bg-network" aria-hidden="true" />
          <div className="contact-intro">
            <Eyebrow>05 — Start a conversation</Eyebrow>
            <h2>Have a useful problem?<br /><em>Let&apos;s give it a system.</em></h2>
            <p>Share the outcome you are working toward. I&apos;ll bring the right blend of AI, automation, commerce, and growth thinking to the conversation.</p>
            <div className="contact-channel-list">
              <a href={`mailto:${contactEmail}`}><Mail size={18} /><span><small>{contactEmail}</small>Email</span><ArrowUpRight size={17} /></a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>+92 314 362 1992</small>WhatsApp</span><ArrowUpRight size={17} /></a>
              <button onClick={() => directChannel("LinkedIn")}><Linkedin size={18} /><span><small>Connect professionally</small>LinkedIn</span><ArrowUpRight size={17} /></button>
            </div>
          </div>
          <motion.form className="contact-form" onSubmit={handleContactSubmit} initial={rise.hidden} whileInView={rise.show} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
            <div className="form-title"><span>PROJECT BRIEF</span><span>01 / 01</span></div>
            <label>Your name<input name="name" placeholder="How should I address you?" required /></label>
            <label>Your email<input name="email" type="email" placeholder="name@company.com" required /></label>
            <label>What are you trying to make happen?<textarea name="message" placeholder="A little context is all I need to start." rows={5} required /></label>
            <button className="primary-button" type="submit">Send project brief <span><Send size={17} /></span></button>
            <p className="form-note"><Check size={14} /> Your message is kept concise and human.</p>
          </motion.form>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div className="footer-brand"><img src={mark} alt="" /><span>Hasnaat Anjum</span></div>
        <p>AI agents, automation, commerce &amp; growth systems.</p>
        <button onClick={() => scrollToId("top")} aria-label="Back to top">Back to top <ArrowUpRight size={15} /></button>
      </footer>
      <a
        className="floating-whatsapp"
        href={`${whatsappUrl}?text=${encodeURIComponent("Hi Hasnaat, I’d like to discuss a project.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Hasnaat on WhatsApp"
      >
        <span className="floating-whatsapp__signal" aria-hidden="true" />
        <span className="floating-whatsapp__icon"><MessageCircle size={22} fill="currentColor" strokeWidth={1.75} /></span>
        <span className="floating-whatsapp__copy"><small>Quick question?</small>Chat on WhatsApp</span>
      </a>
    </div>
  );
}
