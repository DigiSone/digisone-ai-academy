export default function Home() {
  const phases = [
    ["00", "Builder Setup & Mindset", "Week 0"],
    ["01", "Programming & Software Engineering", "Weeks 1-8"],
    ["02", "Mathematics for AI", "Weeks 9-12"],
    ["03", "Classical Machine Learning", "Weeks 13-20"],
    ["04", "Deep Learning & Transformers", "Weeks 21-30"],
    ["05", "LLM Engineering", "Weeks 31-42"],
    ["06", "Agentic AI", "Weeks 43-50"],
    ["07", "Production, MLOps & System Design", "Weeks 51-58"]
  ];

  return (
    <main style={{minHeight: "100vh", padding: "40px 20px", maxWidth: "1100px", margin: "0 auto"}}>
      <div style={{display: "inline-block", padding: "6px 14px",
        background: "rgba(34,211,238,.1)", border: "1px solid rgba(34,211,238,.3)",
        borderRadius: "999px", fontSize: "12px", fontWeight: 700,
        color: "#22d3ee", marginBottom: "24px"}}>
        52 WEEKS · 21 PROJECTS · ZERO PREREQUISITES
      </div>

      <h1 style={{fontSize: "clamp(36px, 7vw, 72px)", fontWeight: 900,
        lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: "20px"}}>
        Learn & Master AI<br/>
        <span style={{background: "linear-gradient(135deg, #7c5cff, #22d3ee)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
          from 0 to Hero.
        </span>
      </h1>

      <p style={{fontSize: "18px", color: "#a2a8bb", maxWidth: "640px",
        marginBottom: "32px", lineHeight: 1.6}}>
        A premium, project-driven curriculum that takes you from writing your first line of Python
        to shipping production-grade agentic AI systems. 80% building, 20% theory.
      </p>

      <div style={{display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "60px"}}>
        <a href="#phases" style={{padding: "14px 26px", borderRadius: "12px",
          background: "linear-gradient(135deg, #7c5cff, #22d3ee)", color: "#fff",
          fontWeight: 700, textDecoration: "none"}}>Start Learning</a>
        <a href="#phases" style={{padding: "14px 26px", borderRadius: "12px",
          background: "#151823", border: "1px solid rgba(255,255,255,.12)",
          color: "#e9ebf2", fontWeight: 700, textDecoration: "none"}}>Browse Curriculum</a>
      </div>

      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "12px", marginBottom: "60px"}}>
        {[
          {n: "52", l: "Weeks"},
          {n: "84", l: "Lessons"},
          {n: "21", l: "Projects"},
          {n: "500+", l: "Glossary Terms"}
        ].map(s => (
          <div key={s.l} style={{background: "#101219",
            border: "1px solid rgba(255,255,255,.07)",
            borderRadius: "14px", padding: "20px"}}>
            <div style={{fontSize: "28px", fontWeight: 800,
              background: "linear-gradient(135deg, #7c5cff, #22d3ee)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>{s.n}</div>
            <div style={{fontSize: "12px", color: "#6b7285", marginTop: "4px",
              fontWeight: 600, textTransform: "uppercase"}}>{s.l}</div>
          </div>
        ))}
      </div>

      <h2 id="phases" style={{fontSize: "28px", fontWeight: 800, marginBottom: "20px"}}>
        The 8 Phases
      </h2>
      <div style={{display: "grid", gap: "12px"}}>
        {phases.map(([n, t, w]) => (
          <div key={n} style={{background: "#101219",
            border: "1px solid rgba(255,255,255,.07)",
            borderRadius: "14px", padding: "20px",
            display: "flex", gap: "16px", alignItems: "center"}}>
            <div style={{fontFamily: "monospace", fontWeight: 800,
              color: "#22d3ee", fontSize: "14px", minWidth: "32px"}}>{n}</div>
            <div style={{flex: 1}}>
              <div style={{fontWeight: 700, marginBottom: "4px"}}>{t}</div>
              <div style={{fontSize: "12px", color: "#6b7285"}}>{w}</div>
            </div>
          </div>
        ))}
      </div>

      <footer style={{marginTop: "80px", paddingTop: "40px",
        borderTop: "1px solid rgba(255,255,255,.07)", textAlign: "center",
        color: "#6b7285", fontSize: "13px"}}>
        © 2026 AI Academy by DigiSone · Built with Next.js 15 + Cloudflare
      </footer>
    </main>
  );
}