"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header" role="banner">
        <nav aria-label="Menu principal" role="navigation" className="w-full">
          {/* Logo central */}
          <div className="menu-div py-4">
            <Link
              href="/"
              className="link-fx"
              aria-label="Página inicial da Savatto"
            >
              <Image
                priority
                height={40}
                width={124.24}
                src="/logo.svg"
                alt="Savatto: design e software"
              />
            </Link>
          </div>

          {/* Menu suspenso */}
          <div className="menu-div">
            <div className="menu shadow-lg-custom">
              <ul
                className="flex justify-between items-center gap-15 text-lg"
                role="menubar"
              >
                <li role="none" className="link-fx">
                  <Link href="#servicos" role="menuitem">
                    Serviços
                  </Link>
                </li>
                <li role="none" className="link-fx">
                  <Link href="#sobre" role="menuitem">
                    Sobre
                  </Link>
                </li>

                <li role="none" className="link-fx">
                  <Link href="#contato" role="menuitem">
                    Contato
                  </Link>
                </li>

                <Link
                  href="https://mws-workspace.notion.site/1df9662ad1928039b8b0e5e6580ef862?pvs=105"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Formulário do Notion de solicitação de novos projetos"
                  className="link-fx btn-menu"
                  role="menuitem"
                >
                  Novo projeto
                </Link>
              </ul>
            </div>
          </div>

          {/* Menu mobile */}
          <div className="menu-mobile p-5">
            <button
              className="link-fx text-2xl"
              aria-label="Abrir menu mobile"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>

            <Link
              href="/"
              className="center link-fx"
              aria-label="Página inicial da Savatto"
            >
              <Image
                priority
                height={40}
                width={124.24}
                src="/logo.svg"
                alt="Savatto: design e software"
              />
            </Link>
          </div>

          {/* Menu aberto mobile */}
          {open && (
            <ul
              id="mobile-menu"
              className="mobile"
              role="menu"
              style={{ maxHeight: open ? "500px" : "0" }}
            >
              <li role="none" className="link-fx">
                <Link
                  href="#servicos"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  Serviços
                </Link>
              </li>
              <li role="none" className="link-fx">
                <Link
                  href="#sobre"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  Sobre
                </Link>
              </li>
              <li role="none" className="link-fx">
                <Link
                  href="#contato"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  Contato
                </Link>
              </li>

              <div className="w-full h-px bg-white/20" />

              <li className="flex justify-center" role="none">
                <Link
                  href="https://mws-workspace.notion.site/1df9662ad1928039b8b0e5e6580ef862?pvs=105"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Formulário do Notion de solicitação de novos projetos"
                  role="menuitem"
                  className="link-fx btn-mobile"
                  onClick={() => setOpen(false)}
                >
                  Novo projeto
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
}
