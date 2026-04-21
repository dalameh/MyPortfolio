"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    index: "01",
    year: "2025",
    type: "Platform",
    title: "The Trading Oasis Application",
    description:
      "Full-stack trading and portfolio management platform — real-time market data, ML-powered regime detection, sentiment analysis, watchlists, and trade journaling, backed by containerized FastAPI microservices on AWS App Runner with a Next.js frontend deployed on Vercel.",
    tech: [
      { name: "Docker", Icon: "/aws/Docker.svg" },
      { name: "Amazon ECR", Icon: "/aws/Arch_Amazon-Elastic-Container-Registry_64.svg" },
      // { name: "Amazon ECS", Icon: "/aws/Arch_Amazon-Elastic-Container-Service_64.svg" },
      { name: "App Runner", Icon: "/aws/Arch_AWS-App-Runner_64.svg" },
      { name: "Vercel", Icon: "/aws/Vercel.png" },
    ],
    image: "/aws/Oasis.ico",
    link: "#",
    github: "https://github.com/dalameh/TheTradingOasis",
  },
  {
    index: "02",
    year: "2026",
    type: "Infrastructure",
    title: "Hybrid Cloud Analytics Engine",
    description:
      "Enterprise ERP analytics pipeline — CDC replication from on-premise to AWS, transformed through a Databricks LakeFlow DLT Medallion architecture, with automated nightly orchestration and zero-touch Power BI executive dashboard refresh for up-to-date financial and operational insights.",
    tech: [
      { name: "Databricks", Icon: "/aws/Databricks.svg" },
      { name: "Amazon S3", Icon: "/aws/Arch_Amazon-Simple-Storage-Service_64.svg" },
      { name: "Amazon SNS", Icon: "/aws/Arch_Amazon-Simple-Notification-Service_64.svg" },
      { name: "Amazon SQS", Icon: "/aws/Arch_Amazon-Simple-Queue-Service_64.svg" },
      { name: "Power BI", Icon: "/aws/PowerBI.svg" },
    ],
    image: "/aws/DLT.jpg",
    link: "#",
    github: "https://github.com/dalameh/Hybrid-Cloud-Analytics-Engine",
  },
  {
    index: "03",
    year: "2026",
    type: "Systems",
    title: "SEC Intelligence Agent",
    description:
      // "A RAG pipeline eliminating weeks of manual research for investment teams — analysts can instantly surface risk factors, revenue trends, and forward guidance across SEC 10-K filings in plain English, with raw documents parsed, chunked, and cleaned through a Medallion architecture on Delta Lake, vectorized into Vector Search, and served via a Mosaic AI Agent, with MLflow tracking experiments and retrieval metrics for full observability.",
      "A RAG pipeline that eliminates weeks of manual research for investment teams — analysts can instantly surface risk factors, revenue trends, and forward guidance across SEC 10-K filings, parsed, chunked, and vectorized through a Medallion architecture on Delta Lake, served via a Mosaic AI Agent, with MLflow ensuring full observability.",
      tech: [
      { name: "Databricks", Icon: "/aws/Databricks.svg" },
      { name: "Amazon S3", Icon: "/aws/Arch_Amazon-Simple-Storage-Service_64.svg" },
    ],
    image: "/aws/RAG.svg",
    link: "#",
    github: "#",
  },
  {
    index: "04",
    year: "2022–2025",
    type: "Academic",
    title: "UMD Projects",
    description:
      "A collection of Python, Java, & C academic projects spanning data structures, ML algorithms (neural networks), language parsers, cybersecurity protocols, finance applications, and relational database design — per UMD academic policy, source code cannot be shared publicly, but feel free to reach out if you'd like to see any of them.",
    tech: [
      { name: "Python", Icon: "/aws/Python.png" },
      { name: "Java", Icon: "/aws/Java.svg" },
      { name: "C", Icon: "/aws/C.svg" },
    ],
    image: "/aws/UMD-Pic.png",
    link: "#",
    github: "#",
  },
  {
    index: "05",
    year: "2026",
    type: "Meta",
    title: "This Portfolio",
    description:
      "You are looking at it. Built with Next.js and hosted on AWS. S3 stores the assets behind Origin Access Control (OAC), while CloudFront serves them globally at the edge. Cloudflare manages the DNS and edge security, integrated with AWS Certificate Manager to provide end-to-end TLS encryption via a secure asymmetric handshake. Feel free to clone the repo. locally if you want to build your own portfolio with the same design and tech stack!",
    tech: [
      { name: "Amazon S3", Icon: "/aws/Arch_Amazon-Simple-Storage-Service_64.svg" },
      { name: "CloudFront", Icon: "/aws/Arch_Amazon-CloudFront_64.svg" },
      { name: "Cloudflare", Icon: "/aws/Cloudflare.svg" },
      { name: "Cert Manager", Icon: "/aws/Arch_AWS-Certificate-Manager_64.svg" },
    ],
    image: "/aws/Website.png",
    link: "#",
    github: "https://github.com/dalameh/MyPortfolio",
  },
];

const certifications = [
  {
    index: "01",
    issuer: "Amazon Web Services",
    badge: "/aws/AIPractitioner.png",
    title: "AWS Certified AI Practitioner",
    code: "AIF-C01",
    description:
      "Validates foundational knowledge of AI/ML concepts, generative AI, and AWS AI/ML services — covering responsible AI practices and the application of machine learning to real-world workloads.",
    verify: "https://www.credly.com/badges/b4a90cbc-461f-43fb-9e7b-056e5c8b2aeb/public_url",
  },
  {
    index: "02",
    issuer: "Amazon Web Services",
    badge: "/aws/DataEngineer.png",
    title: "AWS Certified Data Engineer – Associate",
    code: "DEA-C01",
    description:
      "Demonstrates proficiency in designing, building, and maintaining data pipelines and architectures on AWS — covering ingestion, transformation, orchestration, security, and performance optimization.",
    verify: "https://www.credly.com/badges/0379006c-0545-492a-bb59-99c3557c2f6f/public_url",
  },
];

const stats = [
  { num: "Major", label: "Computer Science, ML Track" },
  { num: "Minor", label: "Business, Finance Focus" },
  { num: "4+", label: "Years coding" },
  { num: "∞", label: "Curiosity remaining" },
];

const marqueeItems = [
  "Python",
  "AWS",
  "Databricks",
  "Cloud Architecture",
  "Pandas",
  "AI/ML",
  "PostgreSQL",
  "PySpark",
  "Docker",
  "SQL",
  "ETL Pipelines",
];

export default function Home() {
  const projectRefs = useRef<(HTMLElement | null)[]>([]);
  const certRefs = useRef<(HTMLElement | null)[]>([]);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );
    projectRefs.current.forEach((el) => el && observer.observe(el));
    certRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Instrument+Sans:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --ink: #111009;
          --ink2: #3a3830;
          --ink3: #7a7668;
          --paper: #f7f4ee;
          --paper2: #ede9e0;
          --paper3: #e4dfd3;
          --gold: #b8955a;
          --gold2: #d4aa6e;
          --sage: #4a6741;
          --rust: #8b3a2a;
          --line: rgba(17,16,9,0.1);
          --serif: 'Playfair Display', Georgia, serif;
          --sans: 'Instrument Sans', sans-serif;
          --mono: 'JetBrains Mono', monospace;
          --px: clamp(1.25rem, 5vw, 4rem);
        }

        html { scroll-behavior: smooth; }

        body {
          background-color: var(--paper);
          color: var(--ink);
          font-family: var(--sans);
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Paper texture */
        body::before {
          content: '';
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
        }

        /* ── NAV ── */
        .pf-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; justify-content: space-between; align-items: center;
          padding: 1.2rem var(--px);
          background: rgba(247,244,238,0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--line);
        }
        .pf-nav-logo {
          font-family: var(--serif); font-size: 0.95rem;
          letter-spacing: 0.08em; color: var(--ink); text-decoration: none;
          flex-shrink: 0;
        }
        .pf-nav-right { display: flex; align-items: center; gap: 1.5rem; }
        .pf-nav-links { display: flex; gap: 1.5rem; align-items: center; }
        .pf-nav-links a {
          font-family: var(--mono); font-size: 0.6rem;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--ink3); text-decoration: none; transition: color 0.2s;
        }
        .pf-nav-links a:hover { color: var(--ink); }

        /* ── HERO ── */
        .pf-hero {
          position: relative; z-index: 1; min-height: 100vh;
          display: grid; grid-template-columns: 1fr 1fr;
          max-width: 1300px; margin: 0 auto; padding: 0 var(--px);
          align-items: center; gap: 3rem;
        }
        .pf-hero-left { padding-top: 5rem; }
        .pf-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 0.6rem;
          font-family: var(--mono); font-size: 0.6rem;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--ink3); margin-bottom: 2rem;
        }
        .pf-hero-eyebrow span { display: block; width: 24px; height: 1px; background: var(--ink3); }
        .pf-hero-name {
          font-family: var(--serif);
          font-size: clamp(3.8rem, 9vw, 8rem);
          line-height: 0.95; letter-spacing: -0.02em;
          color: var(--ink); margin-bottom: 1.8rem;
        }
        .pf-hero-name em { color: var(--gold); font-style: italic; }
        .pf-hero-bio {
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          line-height: 1.85; color: var(--ink2);
          max-width: 420px; margin-bottom: 2.5rem; font-weight: 300;
        }
        .pf-hero-ctas { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }

        .pf-btn-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--ink); color: var(--paper);
          font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.12em;
          text-transform: uppercase; padding: 0.85rem 1.6rem;
          text-decoration: none; transition: background 0.2s, transform 0.15s;
          border: 1px solid var(--ink);
        }
        .pf-btn-primary:hover { background: var(--gold); border-color: var(--gold); transform: translateY(-2px); }

        .pf-btn-secondary {
          display: inline-flex; align-items: center; gap: 0.4rem;
          color: var(--ink2); border-bottom: 1px solid var(--line);
          font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.12em;
          text-transform: uppercase; padding-bottom: 0.2rem;
          text-decoration: none; transition: color 0.2s, border-color 0.2s;
        }
        .pf-btn-secondary:hover { color: var(--gold); border-color: var(--gold); }

        /* Hero photo */
        .pf-hero-right {
          display: flex; align-items: center; justify-content: center;
          height: auto; padding-top: 5rem;
        }
        .pf-hero-photo {
          width: 300px; height: 400px;
          overflow: hidden;
          border: 1px solid var(--line);
          box-shadow: 8px 8px 0px 0px rgba(184,149,90,0.25);
          flex-shrink: 0;
        }
        .pf-hero-photo img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center top;
          filter: grayscale(15%);
          transition: filter 0.4s;
          display: block;
        }
        .pf-hero-photo:hover img { filter: grayscale(0%); }

        /* ── MARQUEE ── */
        .pf-marquee {
          position: relative; z-index: 1; overflow: hidden;
          border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
          background: var(--paper2); padding: 0.85rem 0; margin: 5rem 0 0;
        }
        .pf-marquee-track {
          display: flex; white-space: nowrap;
          animation: pf-marquee 28s linear infinite;
        }
        @keyframes pf-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .pf-marquee-item {
          display: inline-flex; align-items: center; gap: 1.2rem;
          font-family: var(--serif); font-style: italic; font-size: 0.95rem;
          color: var(--ink3); padding: 0 1.5rem; flex-shrink: 0;
        }
        .pf-marquee-sep {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--gold); display: inline-block; flex-shrink: 0;
        }

        /* ── SHARED SECTION ── */
        .pf-section {
          position: relative; z-index: 1;
          max-width: 1300px; margin: 0 auto;
          padding: 6rem var(--px);
        }
        .pf-section-header {
          display: flex; justify-content: space-between; align-items: baseline;
          border-bottom: 1px solid var(--line); padding-bottom: 1.2rem;
          margin-bottom: 0;
        }
        .pf-section-title {
          font-family: var(--serif); font-size: clamp(2rem, 5vw, 2.8rem);
          color: var(--ink); letter-spacing: -0.02em;
        }
        .pf-section-count {
          font-family: var(--mono); font-size: 0.6rem;
          letter-spacing: 0.15em; text-transform: uppercase; color: var(--ink3);
        }

        /* ── CERTIFICATIONS ── */
        .pf-cert-item {
          display: grid; grid-template-columns: 80px 1fr 200px;
          gap: 2.5rem; padding: 3rem 0;
          border-bottom: 1px solid var(--line);
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
          align-items: center;
        }
        .pf-cert-item.visible { opacity: 1; transform: translateY(0); }
        .pf-cert-item:hover .pf-cert-title { color: var(--gold); }
        .pf-cert-num {
          font-family: var(--mono); font-size: 1.8rem; font-weight: 300;
          color: var(--paper3); letter-spacing: -0.04em; line-height: 1; margin-bottom: 0.8rem;
        }
        .pf-cert-issuer {
          font-family: var(--mono); font-size: 0.58rem;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink3);
        }
        .pf-cert-tag {
          display: inline-block; margin-top: 0.7rem;
          font-family: var(--mono); font-size: 0.52rem;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--gold); border: 1px solid rgba(184,149,90,0.35);
          padding: 0.2rem 0.5rem;
        }
        .pf-cert-title {
          font-family: var(--serif); font-size: clamp(1.4rem, 2.8vw, 2.2rem);
          line-height: 1.1; color: var(--ink); letter-spacing: -0.02em;
          margin-bottom: 0.7rem; transition: color 0.2s;
        }
        .pf-cert-desc {
          font-size: 0.88rem; line-height: 1.8; color: var(--ink2);
          max-width: 500px; margin-bottom: 1.5rem; font-weight: 300;
        }
        .pf-cert-verify {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--ink3); text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: color 0.2s, border-color 0.2s; padding-bottom: 2px;
        }
        .pf-cert-verify:hover { color: var(--gold); border-color: var(--gold); }
        .pf-cert-badge-wrap {
          display: flex; align-items: center; justify-content: center;
          width: 180px; height: 180px; flex-shrink: 0;
        }
        .pf-cert-badge-wrap img {
          width: 160px; height: 160px; object-fit: contain;
          transition: transform 0.4s;
        }
        .pf-cert-item:hover .pf-cert-badge-wrap img { transform: scale(1.06); }

        /* ── PROJECTS ── */
        .pf-project-item {
          display: grid; grid-template-columns: 80px 1fr 280px;
          gap: 2.5rem; padding: 3rem 0;
          border-bottom: 1px solid var(--line);
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .pf-project-item.visible { opacity: 1; transform: translateY(0); }
        .pf-project-item:hover .pf-proj-title { color: var(--gold); }
        .pf-project-item:hover .pf-proj-img img { transform: scale(1.05); filter: grayscale(0%) brightness(1); }

        .pf-proj-num {
          font-family: var(--mono); font-size: 1.8rem; font-weight: 300;
          color: var(--paper3); letter-spacing: -0.04em; line-height: 1; margin-bottom: 0.8rem;
        }
        .pf-proj-year {
          font-family: var(--mono); font-size: 0.58rem;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink3);
        }
        .pf-proj-tag {
          display: inline-block; margin-top: 0.7rem;
          font-family: var(--mono); font-size: 0.52rem;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--rust); border: 1px solid rgba(139,58,42,0.25);
          padding: 0.2rem 0.5rem;
        }
        .pf-proj-title {
          font-family: var(--serif); font-size: clamp(1.6rem, 3.5vw, 3rem);
          line-height: 1.05; color: var(--ink); letter-spacing: -0.02em;
          margin-bottom: 0.9rem; transition: color 0.2s;
        }
        .pf-proj-desc {
          font-size: 0.88rem; line-height: 1.8; color: var(--ink2);
          max-width: 500px; margin-bottom: 1.8rem; font-weight: 300;
        }
        .pf-tech-pills {
          display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.8rem;
        }
        .pf-tech-pill {
          display: flex; align-items: center; gap: 0.5rem;
          font-family: var(--mono); font-size: 0.58rem;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--ink3); background: var(--paper2);
          border: 1px solid var(--line); padding: 0.35rem 0.75rem;
        }
        .pf-tech-pill img { width: 35px; height: 35px; object-fit: contain; flex-shrink: 0; }
        .pf-proj-links { display: flex; gap: 1.5rem; }
        .pf-proj-link {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--ink3); text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: color 0.2s, border-color 0.2s; padding-bottom: 2px;
        }
        .pf-proj-link:hover { color: var(--gold); border-color: var(--gold); }
        .pf-proj-img {
          overflow: hidden; border: 1px solid var(--line); background: var(--paper2);
        }
        .pf-proj-img img {
          width: 100%; height: auto; object-fit: contain;
          transition: transform 0.5s, filter 0.5s;
          filter: grayscale(20%) brightness(0.9); display: block;
        }
        .pf-proj-placeholder {
          width: 100%; height: 200px;
          display: flex; align-items: center; justify-content: center;
        }
        .pf-proj-placeholder span {
          font-family: var(--serif); font-style: italic;
          font-size: 4rem; color: rgba(17,16,9,0.06); user-select: none;
        }

        /* ── ABOUT ── */
        .pf-about {
          position: relative; z-index: 1;
          background: var(--ink); color: var(--paper); padding: 7rem 0;
        }
        .pf-about-inner {
          max-width: 1300px; margin: 0 auto; padding: 0 var(--px);
          display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start;
        }
        .pf-about-eyebrow {
          font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.2em;
          text-transform: uppercase; color: rgba(247,244,238,0.35);
          margin-bottom: 1.8rem; display: flex; align-items: center; gap: 1rem;
        }
        .pf-about-eyebrow::after { content: ''; flex: 1; height: 1px; background: rgba(247,244,238,0.1); }
        .pf-about-headline {
          font-family: var(--serif); font-size: clamp(1.8rem, 4vw, 3.2rem);
          line-height: 1.2; letter-spacing: -0.02em;
          color: var(--paper); margin-bottom: 1.8rem;
        }
        .pf-about-headline em { color: var(--gold2); font-style: italic; }
        .pf-about-body {
          font-size: 0.95rem; line-height: 1.9;
          color: rgba(247,244,238,0.6); font-weight: 300;
        }
        .pf-stats-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1px; background: rgba(247,244,238,0.08);
        }
        .pf-stat-box {
          background: var(--ink); padding: 2rem 1.8rem;
          display: flex; flex-direction: column; gap: 0.5rem;
        }
        .pf-stat-n {
          font-family: var(--serif); font-size: clamp(1.6rem, 4vw, 3rem);
          line-height: 1; color: var(--paper); letter-spacing: -0.04em;
        }
        .pf-stat-l {
          font-family: var(--mono); font-size: 0.58rem; letter-spacing: 0.15em;
          text-transform: uppercase; color: rgba(247,244,238,0.35);
        }

        /* ── FOOTER ── */
        .pf-footer {
          position: relative; z-index: 1;
          background: var(--ink); border-top: 1px solid rgba(247,244,238,0.08);
        }
        .pf-footer-inner {
          max-width: 1300px; margin: 0 auto; padding: 2.5rem var(--px);
          display: flex; justify-content: space-between; align-items: center; gap: 2rem;
        }
        .pf-footer-brand {
          font-family: var(--serif); font-style: italic;
          font-size: 1.8rem; color: rgba(247,244,238,0.35);
        }
        .pf-footer-right { display: flex; flex-direction: column; align-items: flex-end; gap: 1rem; }
        .pf-footer-socials { display: flex; gap: 0.8rem; }
        .pf-footer-social {
          width: 36px; height: 36px; border: 1px solid rgba(247,244,238,0.12);
          display: flex; align-items: center; justify-content: center;
          color: rgba(247,244,238,0.4); text-decoration: none;
          font-family: var(--mono); font-size: 0.6rem;
          transition: border-color 0.2s, color 0.2s;
        }
        .pf-footer-social:hover { border-color: var(--gold2); color: var(--gold2); }
        .pf-footer-cta {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--gold); color: var(--ink);
          font-family: var(--mono); font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; padding: 0.9rem 1.8rem;
          transition: background 0.2s, transform 0.15s;
        }
        .pf-footer-cta:hover { background: var(--gold2); transform: translateY(-2px); }
        .pf-footer-copy {
          font-family: var(--mono); font-size: 0.55rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(247,244,238,0.2);
        }

        /* ── TABLET ≤ 900px ── */
        @media (max-width: 900px) {
          .pf-hero {
            grid-template-columns: 1fr;
            min-height: auto;
            padding-top: 6rem;
            padding-bottom: 3rem;
            gap: 2.5rem;
          }
          .pf-hero-left { padding-top: 2rem; }
          .pf-hero-right {
            height: auto;
            padding-top: 0;
            padding-bottom: 1rem;
            justify-content: center;
          }
          .pf-hero-photo { width: 220px; height: 300px; }
          .pf-hero-bio { max-width: 100%; }

          .pf-cert-item {
            grid-template-columns: 80px 1fr;
            grid-template-rows: auto auto;
          }
          .pf-cert-item > div:nth-child(1) { grid-column: 1; grid-row: 1; }
          .pf-cert-item > div:nth-child(2) { grid-column: 2; grid-row: 1; }
          .pf-cert-badge-wrap {
            grid-column: 1 / -1; grid-row: 2;
            width: 100%; height: auto; padding: 1.5rem 0 0.5rem;
            justify-content: center;
          }
          .pf-cert-badge-wrap img { width: 140px; height: 140px; }

          .pf-proj-img img { filter: grayscale(0%) brightness(1); }
          .pf-project-item { grid-template-columns: 70px 1fr; }
          .pf-proj-img { grid-column: 1 / -1; }

          .pf-about-inner { grid-template-columns: 1fr; gap: 3rem; }
          .pf-about { padding: 5rem 0; }

          .pf-footer-inner { flex-direction: column; align-items: flex-start; }
          .pf-footer-right { align-items: flex-start; }
        }

        /* ── MOBILE ≤ 600px ── */
        @media (max-width: 600px) {
          .pf-nav-links { gap: 0.75rem; }
          .pf-nav-links a { font-size: 0.55rem; }

          .pf-hero { padding-top: 5rem; padding-bottom: 2rem; gap: 2rem; }
          .pf-hero-left { padding-top: 1rem; }
          .pf-hero-eyebrow { margin-bottom: 1rem; font-size: 0.55rem; }
          .pf-hero-bio { margin-bottom: 2rem; }
          .pf-hero-ctas { flex-direction: column; align-items: stretch; gap: 0.9rem; }
          .pf-btn-primary { justify-content: center; }
          .pf-btn-secondary {
            justify-content: center; border-bottom: none;
            border: 1px solid var(--line); padding: 0.75rem 1rem;
          }
          .pf-hero-photo { width: 160px; height: 220px; }

          .pf-section { padding: 3.5rem var(--px); }

          .pf-cert-item {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            padding: 2rem 0; gap: 0.8rem;
          }
          .pf-cert-item > div:nth-child(1) {
            grid-column: 1; grid-row: 2;
            display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
          }
          .pf-cert-num { font-size: 1.1rem; margin-bottom: 0; color: var(--ink3); }
          .pf-cert-item > div:nth-child(2) { grid-column: 1; grid-row: 3; }
          .pf-cert-badge-wrap {
            grid-column: 1; grid-row: 1;
            width: 100%; height: auto; padding: 0.5rem 0; justify-content: center;
          }
          .pf-cert-badge-wrap img { width: 120px; height: 120px; }

          .pf-project-item { grid-template-columns: 1fr; padding: 2rem 0; gap: 1rem; }
          .pf-proj-meta { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
          .pf-proj-num { font-size: 1.1rem; margin-bottom: 0; color: var(--ink3); }
          .pf-proj-img { grid-column: 1; }

          .pf-tech-pill img { width: 22px; height: 22px; }
          .pf-tech-pill { font-size: 0.53rem; padding: 0.28rem 0.5rem; gap: 0.35rem; }

          .pf-about { padding: 4rem 0; }
          .pf-about-inner { gap: 2.5rem; }
          .pf-stat-box { padding: 1.4rem 1rem; }

          .pf-footer-inner { gap: 1.5rem; }
          .pf-footer-brand { font-size: 1.4rem; }
          .pf-footer-cta { width: 100%; justify-content: center; }
          .pf-footer-right { width: 100%; align-items: stretch; }
          .pf-footer-socials { justify-content: flex-start; }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .pf-marquee-track { animation: none; }
          .pf-project-item, .pf-cert-item {
            opacity: 1; transform: none; transition: none;
          }
        }
      `}</style>

      {/* NAV */}
      <nav className="pf-nav" role="navigation" aria-label="Main navigation">
        <a className="pf-nav-logo" href="/">D. Alameh</a>
        <div className="pf-nav-right">
          <div className="pf-nav-links">
            <a href="#certifications">Certifications</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="mailto:dwalameh@gmail.com">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pf-hero" aria-label="Introduction">
        <div className="pf-hero-left">
          <div className="pf-hero-eyebrow" aria-hidden="true">
            <span />
            Data Engineer
          </div>
          <h1 className="pf-hero-name">
            Daoud
            <br />
            <em>Alameh</em>
          </h1>
          <p className="pf-hero-bio">
            As a recent Computer Science graduate from the University of Maryland,
            I hope to utilize my academic background and practical experience
            to create innovative solutions and contribute to cutting-edge
            developments in computer science.
          </p>
          <div className="pf-hero-ctas">
            <a className="pf-btn-primary" href="#projects">View Projects →</a>
            <a
              className="pf-btn-secondary"
              href="https://linkedin.com/in/daoud-alameh-696b15352/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="pf-btn-secondary"
              href="https://github.com/dalameh"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="pf-hero-right">
          <div className="pf-hero-photo">
            <img src="/pfp.png" alt="Daoud Alameh" width={300} height={400} />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="pf-marquee" aria-hidden="true">
        <div className="pf-marquee-track">
          {doubled.map((item, i) => (
            <span className="pf-marquee-item" key={i}>
              {item} <span className="pf-marquee-sep" />
            </span>
          ))}
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <section className="pf-section" id="certifications" aria-label="Certifications">
        <div className="pf-section-header">
          <h2 className="pf-section-title">Certifications</h2>
          <span className="pf-section-count">02 credentials</span>
        </div>

        {certifications.map((c, i) => (
          <article
            key={c.title}
            className="pf-cert-item"
            ref={(el) => { certRefs.current[i] = el; }}
          >
            <div>
              <div className="pf-cert-num" aria-hidden="true">{c.index}</div>
              <div className="pf-cert-issuer">{c.issuer}</div>
              <div className="pf-cert-tag">{c.code}</div>
            </div>
            <div>
              <h3 className="pf-cert-title">{c.title}</h3>
              <p className="pf-cert-desc">{c.description}</p>
              <a
                className="pf-cert-verify"
                href={c.verify}
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗ Verify Credential
              </a>
            </div>
            <div className="pf-cert-badge-wrap">
              <img src={c.badge} alt={`${c.title} badge`} width={160} height={160} />
            </div>
          </article>
        ))}
      </section>

      {/* PROJECTS */}
      <section
        className="pf-section"
        id="projects"
        style={{ paddingTop: "2rem" }}
        aria-label="Projects"
      >
        <div className="pf-section-header">
          <h2 className="pf-section-title">Projects</h2>
          <span className="pf-section-count">05 projects</span>
        </div>

        {projects.map((p, i) => (
          <article
            key={p.title}
            className="pf-project-item"
            ref={(el) => { projectRefs.current[i] = el; }}
          >
            <div className="pf-proj-meta">
              <div className="pf-proj-num" aria-hidden="true">{p.index}</div>
              <div className="pf-proj-year">{p.year}</div>
              <div className="pf-proj-tag">{p.type}</div>
            </div>
            <div>
              <h3 className="pf-proj-title">{p.title}</h3>
              <p className="pf-proj-desc">{p.description}</p>
              <div className="pf-tech-pills">
                {p.tech.map((t) => (
                  <span className="pf-tech-pill" key={t.name}>
                    <img src={t.Icon} alt="" width={35} height={35} aria-hidden="true" />
                    {t.name}
                  </span>
                ))}
              </div>
              <div className="pf-proj-links">
                {p.github !== "#" && (
                  <a
                    className="pf-proj-link"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${p.title} on GitHub`}
                  >
                    ↗ GitHub
                  </a>
                )}
                {p.github === "#" && (
                  <span
                    className="pf-proj-link"
                    style={{ opacity: 0.8, cursor: "default" }}
                    title="Source code available on request"
                  >
                    Code on Request
                  </span>
                )}
              </div>
            </div>
            <div className="pf-proj-img">
              {p.image ? (
                <img src={p.image} alt={`${p.title} preview`} />
              ) : (
                <div className="pf-proj-placeholder" aria-hidden="true">
                  <span>{p.index}</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* ABOUT */}
      <section className="pf-about" id="about" aria-label="About">
        <div className="pf-about-inner">
          <div>
            <div className="pf-about-eyebrow" aria-hidden="true">About</div>
            <h2 className="pf-about-headline">
              I love building things that <em>interest me.</em>
            </h2>
            <p className="pf-about-body">
              I&apos;m a Computer Science graduate from the University of Maryland
              with a passion for turning data into something meaningful — whether
              that&apos;s a pipeline, a platform, an application, or an intelligent agent.
              I care about building things that are clean, reliable, and actually
              useful. I truly hope to join a team where the work creates real
              impact — for the business and the people it serves.
            </p>
          </div>
          <div className="pf-stats-grid" aria-label="Quick facts">
            {stats.map((s) => (
              <div className="pf-stat-box" key={s.label}>
                <div className="pf-stat-n">{s.num}</div>
                <div className="pf-stat-l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pf-footer" role="contentinfo">
        <div className="pf-footer-inner">
          <div className="pf-footer-brand" aria-hidden="true">Let&apos;s build.</div>
          <div className="pf-footer-right">
            <div className="pf-footer-socials">
              <a
                className="pf-footer-social"
                href="https://github.com/dalameh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <img src="/aws/github.png" alt="GitHub" width={18} height={18} />
              </a>
              <a
                className="pf-footer-social"
                href="https://linkedin.com/in/daoud-alameh-696b15352/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <img src="/aws/linkedin.svg" alt="LinkedIn" width={18} height={18} />
              </a>
              <a
                className="pf-footer-social"
                href="mailto:dwalameh@gmail.com"
                aria-label="Send email"
              >
                ✉
              </a>
            </div>
            <a className="pf-footer-cta" href="mailto:dwalameh@gmail.com">
              Get in touch →
            </a>
            <span className="pf-footer-copy">
              © {new Date().getFullYear()} Daoud Alameh
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}