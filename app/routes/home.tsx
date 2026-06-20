import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";
import {ArrowRightIcon, ArrowUpRight, Clock, Layers} from "lucide-react";
import {Button} from "../../components/ui/Button";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
      <div className="home">
        <Navbar />

          <section className="hero">
              <div className="announce">
                  <div className="pulse"></div>
                  <p>Zaczynamy z ProstyRender 2.0</p>
              </div>

              <h1>Twórz błyskawiczne rendery z ProstyRender</h1>
              <p className="subtitle">
                  ProstyRender to nowa platforma do tworzenia błyskawicznych renderów AI,
                  która pomaga zwizualizować Twoje projekty z PRO100, SketchUp itp.
                  i dostarcza szybko fotorealistyczne wizualizacje.
              </p>
              <div className="actions">
                  <a href="#upload" className="cta">Zacznij Wizualizacje
                      <ArrowRightIcon className="icon" />
                  </a>
                  <Button>Zobacz Demo
                  </Button>
              </div>

              <div id="upload" className="upload-shell">
                  <div className="grid-overlay" />

                  <div className="upload-card">
                      <div className="upload-head">
                          <div className="upload-icon">
                            <Layers className="icon" />
                          </div>

                          <h3>Wgraj twój projekt</h3>
                          <p>Działa na formatach obrazka: JPG, PNG, do 10 MG </p>
                          <p>Upload images</p>
                       </div>
                  </div>
              </div>


          </section>

          <section className="projects">
              <div className="section-inner">
                  <div className="section-head">
                      <div className="copy">
                          <h2>Projekty</h2>
                          <p>Twoje najnowsze wizualizacje i współdzielone projekty, wszystko
                          w jedny miejscu.</p>
                      </div>
                  </div>

                  <div className="projects-grid">
                  <div className="project-card group">
                      <div className="preview">
                          <img src="https://github.com/icm2new/prostyrender/blob/a93f9e2ba7518e3ad4fb00783e510410b7c470cc/office.png?raw=true" alt="Project 1" />
                          <div className="badge">
                              <span>Reszta projektów</span>
                          </div>
                      </div>
                      <div className="card-body">
                          <div>
                              <h3>Projekt biura</h3>

                              <div className="meta">
                                  <Clock size={12} />
                                  <span>{new Date('01.01.2027').toLocaleDateString('pl-PL')
                                  }</span>
                                  <span>by Ccd</span>
                              </div>
                          </div>
                          <div className="arrow">
                              <ArrowUpRight size={18} />
                          </div>


                      </div>
                    </div>
                  </div>
              </div>
          </section>
        </div>
  )
}
