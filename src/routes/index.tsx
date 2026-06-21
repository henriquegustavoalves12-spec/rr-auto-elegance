import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, MapPin, Instagram, Calendar, MessageCircle, Sparkles, Shield,
  Car, Droplets, Star, ChevronRight, Wrench, Wind, Sun, Gauge, Brush, Lightbulb, Menu, X,
} from "lucide-react";

import heroCar from "@/assets/hero-car.jpg";
import logo from "@/assets/rr-logo.jpeg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RR Estética Automotiva | Polimento, Vitrificação e Detalhamento Premium" },
      { name: "description", content: "Especialistas em estética automotiva em Bairro Floresta. Polimento, vitrificação, higienização e proteção premium. (38) 99200-5046." },
      { property: "og:title", content: "RR Estética Automotiva — Cuidar do seu carro é nossa paixão" },
      { property: "og:description", content: "Polimento, vitrificação, higienização e proteção premium para o seu veículo." },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "https://wa.me/5538992005046";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#galeria", label: "Galeria" },
    { href: "#dicas", label: "Dicas" },
    { href: "#contato", label: "Contato" },
  ];

  const services = [
    { icon: Droplets, title: "Lavagem Detalhada", desc: "Limpeza completa externa com acabamento premium." },
    { icon: Wind, title: "Limpeza Interna Detalhada", desc: "Remoção de sujeiras e revitalização interna." },
    { icon: Brush, title: "Higienização de Bancos e Carpetes", desc: "Eliminação de ácaros, odores e manchas." },
    { icon: Sparkles, title: "Polimento Comercial", desc: "Recuperação rápida do brilho da pintura." },
    { icon: Gauge, title: "Polimento Técnico", desc: "Correção avançada de imperfeições da pintura." },
    { icon: Shield, title: "Vitrificação de Pintura", desc: "Proteção cerâmica com brilho intenso e duradouro." },
    { icon: Wrench, title: "Revitalização de Plásticos", desc: "Recuperação da aparência original dos plásticos." },
    { icon: Sun, title: "Cristalização e Proteção", desc: "Proteção contra agentes externos e raios UV." },
    { icon: Lightbulb, title: "Restauração de Faróis", desc: "Remoção de opacidade e recuperação da transparência." },
  ];

  const gallery = [
    { src: g1, label: "Polimento" },
    { src: g3, label: "Vitrificação" },
    { src: g2, label: "Higienização" },
    { src: g5, label: "Lavagem Premium" },
    { src: g4, label: "Restauração de Faróis" },
    { src: g6, label: "Cristalização" },
  ];

  const tips = [
    { icon: Droplets, title: "Lave regularmente", desc: "Evite o acúmulo de sujeiras agressivas que danificam a pintura." },
    { icon: Shield, title: "Proteja a pintura", desc: "Utilize vitrificação ou cristalização para máxima durabilidade." },
    { icon: Car, title: "Cuide do interior", desc: "Realize higienizações periódicas para um ambiente saudável." },
    { icon: Lightbulb, title: "Revitalize os faróis", desc: "Melhore a estética e a segurança do seu veículo." },
  ];

  const testimonials = [
    { name: "Carlos M.", text: "Excelente atendimento e resultado impecável. Recomendo de olhos fechados." },
    { name: "Juliana R.", text: "Meu carro ficou com aparência de zero quilômetro. Trabalho impressionante." },
    { name: "Rafael S.", text: "Serviço profissional e entrega acima das expectativas. Voltarei sempre." },
  ];

  const highlights = [
    "Atendimento com hora marcada",
    "Profissionais especializados",
    "Produtos de alta qualidade",
    "Serviço personalizado",
    "Resultado profissional garantido",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg overflow-hidden ring-2 ring-primary/40 shadow-red">
              <img src={logo} alt="RR Estética Automotiva" className="h-full w-full object-cover" />
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-xl md:text-2xl tracking-wider">RR <span className="text-primary">ESTÉTICA</span></div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Automotiva</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors relative group">
                {n.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a href={WHATSAPP} target="_blank" rel="noopener" className="hidden md:inline-flex items-center gap-2 gradient-red text-primary-foreground px-5 py-2.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-red">
            <MessageCircle className="w-4 h-4" /> Orçamento
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
            <div className="px-4 py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="py-2 text-sm uppercase tracking-wider text-muted-foreground hover:text-primary">
                  {n.label}
                </a>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-2 inline-flex items-center justify-center gap-2 gradient-red text-primary-foreground px-5 py-3 rounded-md font-semibold text-sm uppercase tracking-wider">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCar} alt="Carro esportivo premium" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        {/* Decorative red diagonal */}
        <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-30 hidden md:block">
          <div className="absolute top-10 right-10 w-2 h-40 gradient-red rotate-12" />
          <div className="absolute top-20 right-24 w-1 h-60 bg-primary/60 rotate-12" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Estética Automotiva Premium</span>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] mb-6 animate-fade-up">
              SEU CARRO MERECE<br />
              O <span className="text-gradient-red">MELHOR CUIDADO</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Especialistas em estética automotiva, proteção e revitalização completa do seu veículo.
            </p>

            <p className="text-base md:text-lg italic text-primary mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              "Cuidar do seu carro é nossa paixão."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="group inline-flex items-center justify-center gap-2 gradient-red text-primary-foreground px-8 py-4 rounded-md font-bold uppercase tracking-wider shadow-red hover:scale-105 transition-all">
                Solicitar Orçamento <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 border-2 border-foreground/20 hover:border-primary hover:bg-primary/10 px-8 py-4 rounded-md font-bold uppercase tracking-wider transition-all backdrop-blur-sm">
                <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
              </a>
            </div>

            <div className="mt-12 flex items-center gap-3 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium">(38) 99200-5046</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-primary/60 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 gradient-hero opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.4em] text-primary font-bold">— Sobre Nós</span>
              <h2 className="font-display text-4xl md:text-6xl leading-tight">
                EXCELÊNCIA EM<br /><span className="text-gradient-red">ESTÉTICA AUTOMOTIVA</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Na <span className="text-foreground font-semibold">RR Estética Automotiva</span> trabalhamos com dedicação, tecnologia e produtos de alta qualidade para entregar resultados superiores. Nosso objetivo é restaurar, proteger e valorizar o seu veículo, proporcionando brilho, proteção e acabamento impecável.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pt-4">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="mt-0.5 w-5 h-5 rounded-full gradient-red flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base text-foreground/90">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 gradient-red opacity-20 blur-3xl rounded-full" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant border border-border">
                <img src={g3} alt="Acabamento premium em pintura" className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-2">Acabamento</div>
                  <div className="font-display text-3xl">BRILHO DE CONCESSIONÁRIA</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block gradient-red text-primary-foreground px-6 py-4 rounded-xl shadow-red">
                <div className="font-display text-4xl leading-none">+5</div>
                <div className="text-xs uppercase tracking-widest mt-1">Anos de experiência</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 md:py-32 bg-card/30 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-bold">— O que fazemos</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">NOSSOS <span className="text-gradient-red">SERVIÇOS</span></h2>
            <p className="text-muted-foreground mt-4">Soluções completas em detalhamento, proteção e restauração para o seu veículo.</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="group h-full relative gradient-card rounded-xl p-7 border border-border hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-red overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 gradient-red opacity-0 group-hover:opacity-10 blur-3xl transition-opacity" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-lg gradient-red flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-red">
                      <s.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-2xl mb-2 tracking-wide">{s.title.toUpperCase()}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <div className="mt-5 inline-flex items-center text-xs uppercase tracking-widest text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Saiba mais <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-bold">— Resultados Reais</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">TRANSFORMAÇÕES QUE <span className="text-gradient-red">IMPRESSIONAM</span></h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={i * 80} className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}>
                <div className="group relative overflow-hidden rounded-xl border border-border h-full aspect-square">
                  <img src={g.src} alt={g.label} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Serviço</div>
                    <div className="font-display text-xl md:text-2xl mt-1">{g.label.toUpperCase()}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DICAS */}
      <section id="dicas" className="py-24 md:py-32 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-bold">— Conhecimento</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">DICAS PARA <span className="text-gradient-red">CONSERVAR</span><br />SEU VEÍCULO</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((t, i) => (
              <Reveal key={t.title} delay={i * 100}>
                <div className="h-full text-center p-7 rounded-xl border border-border gradient-card hover:border-primary/60 transition-all hover:-translate-y-2 group">
                  <div className="mx-auto w-16 h-16 rounded-full border-2 border-primary/40 flex items-center justify-center mb-5 group-hover:gradient-red group-hover:border-transparent transition-all">
                    <t.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-xl mb-3 tracking-wide">{t.title.toUpperCase()}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-red opacity-10 blur-3xl rounded-full" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-bold">— Depoimentos</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">O QUE NOSSOS <span className="text-gradient-red">CLIENTES DIZEM</span></h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="h-full p-8 rounded-xl gradient-card border border-border relative">
                  <div className="absolute -top-4 left-8 gradient-red px-3 py-1 rounded-md flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="w-3.5 h-3.5 text-white fill-white" />
                    ))}
                  </div>
                  <p className="text-foreground/90 italic leading-relaxed pt-4 mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full gradient-red flex items-center justify-center font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Cliente verificado</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 md:py-32 bg-card/30 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-bold">— Fale Conosco</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">SOLICITE SEU <span className="text-gradient-red">ORÇAMENTO</span></h2>
            <p className="text-muted-foreground mt-4">Atendimento com hora marcada. Resposta rápida no WhatsApp.</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Phone, label: "WhatsApp", value: "(38) 99200-5046", href: WHATSAPP },
              { icon: MapPin, label: "Endereço", value: "Rua Araucária, 53 — Bairro Floresta" },
              { icon: Instagram, label: "Instagram", value: "@rresteticaautomotiva", href: "https://instagram.com/rresteticaautomotiva" },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener" className="block h-full p-7 rounded-xl gradient-card border border-border hover:border-primary transition-all hover:-translate-y-1 group">
                    <c.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">{c.label}</div>
                    <div className="font-display text-xl md:text-2xl mt-2 break-words">{c.value}</div>
                  </a>
                ) : (
                  <div className="h-full p-7 rounded-xl gradient-card border border-border">
                    <c.icon className="w-8 h-8 text-primary mb-4" />
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">{c.label}</div>
                    <div className="font-display text-xl md:text-2xl mt-2 break-words">{c.value}</div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="block mx-auto max-w-2xl text-center gradient-red text-primary-foreground py-6 rounded-xl font-display text-2xl md:text-3xl tracking-wider shadow-red hover:scale-[1.02] transition-transform animate-pulse-glow">
              <span className="inline-flex items-center gap-3">
                <MessageCircle className="w-7 h-7" /> FALAR NO WHATSAPP
              </span>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Agendamento com hora marcada</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg overflow-hidden ring-2 ring-primary/40">
                  <img src={logo} alt="RR Estética Automotiva" className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="font-display text-xl tracking-wider">RR <span className="text-primary">ESTÉTICA</span></div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Automotiva</div>
                </div>
              </div>
              <p className="text-sm italic text-muted-foreground">"Cuidar do seu carro é nossa paixão."</p>
            </div>

            <div>
              <div className="font-display text-lg tracking-wider mb-4">LINKS RÁPIDOS</div>
              <ul className="space-y-2">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-display text-lg tracking-wider mb-4">CONTATO</div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> (38) 99200-5046</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5" /> Rua Araucária, 53 — Bairro Floresta</li>
                <li className="flex items-center gap-2"><Instagram className="w-4 h-4 text-primary" /> @rresteticaautomotiva</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-xs text-muted-foreground uppercase tracking-widest">
            RR Estética Automotiva © 2026 — Todos os direitos reservados
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full gradient-red flex items-center justify-center shadow-red hover:scale-110 transition-transform animate-pulse-glow"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </a>
    </div>
  );
}
