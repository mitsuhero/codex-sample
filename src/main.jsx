import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  { number: '01', category: 'PRODUCT DESIGN · 2025', title: '余白のある、\n家計簿。', name: 'madori', description: 'お金の不安を、暮らしの余白に変える家計管理アプリ。', color: 'lavender', mark: 'm.', tags: ['UI/UX', 'React Native'] },
  { number: '02', category: 'WEB DEVELOPMENT · 2024', title: '街の本屋を、\nもっと近くに。', name: 'BOOKS & CO.', description: '小さな書店と読者をつなぐ、コミュニティプラットフォーム。', color: 'peach', mark: 'b.', tags: ['Frontend', 'Next.js'] },
  { number: '03', category: 'BRANDING · 2024', title: '野菜からはじまる\nいい一日。', name: 'GREEN TABLE', description: '旬の野菜を主役にした、デリのブランドとオンラインストア。', color: 'mint', mark: 'g.', tags: ['Branding', 'E-commerce'] },
]

function Arrow({ diagonal = false }) { return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span> }

function Header() {
  return <header className="header"><a className="brand" href="#top" aria-label="Riku Sato ホーム"><span className="brand-mark">r.</span><span>RIKU SATO<span className="brand-sub">DESIGNER & DEVELOPER</span></span></a><nav aria-label="メインナビゲーション"><a href="#about">ABOUT</a><a href="#work">WORK</a><a href="#contact">CONTACT</a></nav><a className="header-cta" href="#contact">一緒につくる <Arrow diagonal /></a></header>
}

function Hero() {
  return <section className="hero" id="top"><div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR PROJECTS <span className="eyebrow-year">2025 — 2026</span></div><h1>アイデアを、<br /><span className="highlight">使える体験</span>に。</h1><p className="hero-lead">デザインとコードのあいだを行き来しながら、<br className="desktop-break" />人とプロダクトのいい関係をつくっています。</p><div className="hero-actions"><a href="#work" className="button primary">制作実績を見る <Arrow /></a><a href="#about" className="text-link">わたしについて <Arrow /></a></div></div><div className="hero-art" aria-label="デザインとコードが交差する立体的なグラフィック"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orb orb-back"/><div className="orb orb-front"/><div className="art-label label-top">THOUGHTFUL<br />BY DESIGN</div><div className="art-label label-bottom">MADE FOR<br />REAL LIFE <span>✳</span></div><span className="spark spark-one">✳</span><span className="spark spark-two">+</span></div><div className="hero-foot"><span>SCROLL TO EXPLORE <span className="down">↓</span></span><span>東京を拠点に活動中 <span className="jp-dot">●</span></span></div></section>
}

function Intro() {
  return <section className="intro section-wrap" id="about"><div className="section-label"><span>01 — ABOUT</span><span className="label-line" /></div><div className="intro-grid"><h2>つくることは、<br />理解すること。</h2><div className="intro-copy"><p>見た目を整えるだけじゃなく、なぜ必要なのか、誰のどんな毎日を変えるのか。そこから考えるのが好きです。</p><p>デザインの視点と、実装する手をどちらも持って、アイデアがちゃんと届くところまで一緒に走ります。</p><a href="#contact" className="under-link">もう少し詳しく <Arrow /></a></div></div><div className="principles"><article><span className="principle-icon">◎</span><span className="mini-label">01 / THINK</span><h3>本質から考える</h3><p>課題の背景を見つめて、つくる理由をはっきりさせます。</p></article><article><span className="principle-icon">✳</span><span className="mini-label">02 / MAKE</span><h3>手を動かして試す</h3><p>小さく形にして、対話しながらよりよい答えを探します。</p></article><article><span className="principle-icon">↗</span><span className="mini-label">03 / DELIVER</span><h3>最後まで届ける</h3><p>使う人のもとに届き、育っていくところまで考えます。</p></article></div></section>
}

function Work() {
  return <section className="work section-wrap" id="work"><div className="section-label"><span>02 — SELECTED WORK</span><span className="label-line" /></div><div className="work-heading"><h2>つくったもの。</h2><span>2024 — 2025</span></div><div className="project-list">{projects.map((project) => <article className="project" key={project.number}><div className={`project-art ${project.color}`}><span className="project-art-grid"/><span className="project-number">{project.number} / 03</span><div className="project-shape"><span>{project.mark}</span></div><span className="project-art-caption">{project.name}</span></div><div className="project-info"><span className="mini-label">{project.category}</span><h3>{project.title.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><a className="project-link" href="#contact" aria-label={`${project.name}の詳細を問い合わせる`}><Arrow diagonal /></a></div></article>)}</div><div className="work-footer"><span>もっと見たい方へ</span><a href="https://github.com/" target="_blank" rel="noreferrer">GitHubでその他の制作を見る <Arrow diagonal /></a></div></section>
}

function Skills() {
  return <section className="skills section-wrap"><div className="section-label"><span>03 — WHAT I DO</span><span className="label-line" /></div><div className="skills-grid"><div><h2>考えて、描いて、<br />動かす。</h2><p className="skills-note">企画のはじまりから、画面の向こうにいる人へ届くまで。</p></div><div className="skill-groups"><div className="skill-group"><span className="mini-label">DESIGN</span><div className="skill-pills"><span>UI / UX</span><span>プロトタイピング</span><span>ビジュアルデザイン</span><span>Figma</span></div></div><div className="skill-group"><span className="mini-label">DEVELOPMENT</span><div className="skill-pills"><span>React</span><span>TypeScript</span><span>Next.js</span><span>CSS / Motion</span></div></div></div></div></section>
}

function Contact() {
  return <section className="contact" id="contact"><div className="contact-inner"><div className="section-label"><span>04 — YOUR TURN</span><span className="label-line" /></div><div className="contact-content"><div><p className="contact-kicker">GOOD THINGS START WITH A HELLO.</p><h2>次のアイデア、<br />聞かせてください。</h2><p className="contact-note">まだ形になっていなくても大丈夫。<br />一緒に考えるところから、はじめましょう。</p></div><a className="contact-button" href="mailto:hello@rikusato.design"><span>お仕事のご相談はこちら</span><Arrow diagonal /></a></div><div className="contact-bottom"><span>RIKU SATO © 2025</span><div><a href="https://github.com/" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a><a href="mailto:hello@rikusato.design">EMAIL <Arrow diagonal /></a></div></div></div></section>
}

export default function App() { return <><Header /><main><Hero /><Intro /><Work /><Skills /><Contact /></main></> }

if (!import.meta.env.VITEST && document.getElementById('root')) {
  createRoot(document.getElementById('root')).render(<App />)
}
