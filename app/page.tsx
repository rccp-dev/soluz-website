"use client";

import Link from "next/link";
import Image from "next/image";
import DownButton from "@/components/downbutton";

export default function Page() {
  return (
    <>
      <section id="hero" className="hero-section" aria-label="Seção principal">
        <div className="hero-background">
          <Image
            fill
            src="/hero.jpg"
            alt="Background Savatto"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        </div>

        <div className="hero-content">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Design e software para impulsionar marcas e produtos digitais
          </h1>

          <p className="mt-4 text-base md:text-lg">
            Soluções completas para marcas que precisam unir identidade forte
            com engenharia de excelência.
          </p>

          <div className="flex flex-col items-center md:flex-row justify-center md:gap-5">
            <Link
              href="#contato"
              className="link-fx btn-primary shadow-lg-custom"
              aria-label="Ir para seção de contato"
            >
              Iniciar projeto
            </Link>

            <Link
              href="#"
              className="link-fx btn-outline shadow-lg-custom"
              aria-label="Ir para seção de contato"
            >
              Ver portfólio
            </Link>
          </div>
        </div>
      </section>

      <DownButton />

      <main
        className="items-center mx-4 mt-15 sm:mx-10 md:mx-auto p-4 md:max-w-6xl scroll-smooth"
        role="main"
        aria-label="Conteúdo principal"
      >
        <section
          id="servicos"
          className="pb-20"
          aria-labelledby="titulo-servicos"
        >
          <h2 id="titulo-servicos" className="section-title">
            Serviços profissionais para sua solução digital
          </h2>
          <p className="mt-2 max-w-xl text-base">
            A Savatto entrega desde identidade visual até desenvolvimento
            avançado, garantindo consistência, propósito e performance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 servicos-grid">
            <div className="info-box" role="article">
              <h3 className="info-title">Branding e Design</h3>
              <p className="info-detail">
                Construção de identidades visuais fortes, estratégicas e feitas
                para destacar sua marca no mercado.
              </p>
            </div>

            <div className="info-box" role="article">
              <h3 className="info-title">Desenvolvimento Web</h3>
              <p className="info-detail">
                Criação de sites e aplicações modernas com foco em velocidade,
                estabilidade e experiência do usuário.
              </p>
            </div>

            <div className="info-box" role="article">
              <h3 className="info-title">Consultoria Criativa</h3>
              <p className="info-detail">
                Direção e clareza conceitual para projetos que precisam de visão
                sólida e posicionamento claro.
              </p>
            </div>
          </div>
        </section>

        <section id="sobre" className="pb-20" aria-labelledby="titulo-sobre">
          <h2 id="titulo-sobre" className="section-title">
            Sobre a Savatto
          </h2>
          <p className="mt-2 max-w-xl text-base">
            A Savatto combina design estratégico com engenharia de software para
            criar soluções digitais completas e consistentes. Cada projeto é
            construído para oferecer clareza, estética e eficiência.
          </p>
        </section>

        <section
          id="contato"
          className="pb-20"
          aria-labelledby="titulo-contato"
        >
          <h2 id="titulo-contato" className="section-title">
            Solicitar projeto
          </h2>
          <p className="mt-2 max-w-lg text-base">
            Abrirá o formulário oficial da Savatto no Notion, onde você poderá
            detalhar sua demanda.
          </p>

          <Link
            href="https://mws-workspace.notion.site/1df9662ad1928039b8b0e5e6580ef862?pvs=105"
            target="_blank"
            rel="noopener noreferrer"
            className="link-fx btn-cta shadow-sm-custom"
            aria-label="Formulário do Notion de solicitação de novos projetos"
          >
            Abrir formulário
          </Link>
        </section>
      </main>
    </>
  );
}
