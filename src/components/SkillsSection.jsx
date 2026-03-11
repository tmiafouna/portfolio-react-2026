import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiIonic,
  SiFirebase,
  SiQuasar,
  SiBootstrap,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiSymfony,
  SiPython,
  SiMysql,
  SiMongodb,
  SiWordpress,
  SiGit,
  SiDocker,
  SiPostman,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiBlender,
  SiUnrealengine,
  SiMamp,
} from "react-icons/si";
import { useState, useEffect, useRef } from "react";

export const SkillsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isParcoursVisible, setIsParcoursVisible] = useState(false);
    const sectionRef = useRef(null);
    const parcoursRef = useRef(null);
 
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );
 
        const parcoursObserver = new IntersectionObserver(
            ([entry]) => {
                setIsParcoursVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
 
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        if (parcoursRef.current) {
            parcoursObserver.observe(parcoursRef.current);
        }
 
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            if (parcoursRef.current) {
                parcoursObserver.unobserve(parcoursRef.current);
            }
        };
    }, []);

 return (
  <>
            <section id="skills" ref={sectionRef} className="py-24 px-4 bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center text-primary">
                    Compétences
                </h2>

                <div className="skill-container gradient-border p-6 backdrop-blur transition-all duration-300 will-change-transform ring-1 ring-primary/15 hover:ring-2 hover:ring-primary/40 hover:scale-[1.015]">
                    <div className="skill-box">
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiHtml5 className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">HTML</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiCss3 className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">CSS</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiJavascript className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">JavaScript</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiTypescript className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">TypeScript</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiReact className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">ReactJS</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiAngular className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Angular</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiIonic className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Ionic</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiReact className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">ReactNative</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiFirebase className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Firebase</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiQuasar className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Quasar</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiBootstrap className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Bootstrap</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiTailwindcss className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">TailwindCSS</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiVite className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Vite</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiNodedotjs className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Node.js</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiExpress className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Express</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiPhp className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">PHP</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiMamp className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">MAMP</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiSymfony className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Symfony</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiPython className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Python</p>
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiMysql className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">SQL</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiMongodb className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">MongoDB</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiWordpress className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">WordPress</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <div className="bg-primary w-5 h-5 text-black rounded-md flex items-center justify-center text-[13px] font-bold">
                                    L
                                </div>
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Local</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <div className="bg-primary w-5 h-5 text-black rounded-md flex items-center justify-center text-[10px] font-bold">
                                    VS
                                </div>
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">VS Code</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <div className="bg-primary w-5 h-5 text-black rounded-md flex items-center justify-center text-[13px] font-bold">
                                    W
                                </div>
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Windsurf</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiGit className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Git / GitHub</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiDocker className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Docker</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiPostman className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Postman</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiFigma className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Figma</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiAdobephotoshop className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Photoshop</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiAdobeillustrator className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Illustrator</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiCanva className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Canva</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <div className="bg-primary w-5 h-5 text-black rounded-md flex items-center justify-center text-[13px] font-bold">
                                    F
                                </div>
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Filmora</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <div className="bg-primary w-5 h-5 text-black rounded-md flex items-center justify-center text-[10px] font-bold">
                                    FL
                                </div>
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">FL Studio</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <div className="bg-primary w-5 h-5 text-black rounded-md flex items-center justify-center text-[13px] font-bold">
                                    R
                                </div>
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Reason</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <div className="bg-primary w-5 h-5 text-black rounded-md flex items-center justify-center text-[13px] font-bold">
                                    C
                                </div>
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Cubase</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiBlender className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Blender</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">
                                <SiUnrealengine className="text-primary" size={22} />
                            </div>
                            <p className="text-black/90 dark:text-white/90 font-medium">Unreal Engine</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mt-60">
                Parcours
              </h2>

              <div className="relative mt-16">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-primary/30" />

                <div className="space-y-14">
                  <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8">
                      <div className="md:pr-2">
                          <div className="gradient-border backdrop-blur transition-all duration-300 will-change-transform ring-1 ring-primary/15 hover:ring-2 hover:ring-primary/40 hover:scale-[1.015] p-4 sm:p-6 card-hover">
                              <div className="flex flex-col items-end text-right w-full">
                                  <div className="min-[1138px]:flex min-[1138px]:justify-center min-[1138px]">
                                      <span className="text-xs font-semibold text-primary bg-primary/15 px-2.5 py-1 rounded-md">
                                      Diplôme
                                      </span>
                                  </div>

                                  <div className="text-lg sm:text-xl font-semibold text-foreground mt-3">
                                      Mastère Data Engineer
                                  </div>

                                  <div className="text-sm sm:text-base text-foreground/70 mt-1">
                                      Digital School of Paris
                                  </div>

                                  <div className="text-sm sm:text-base text-foreground/60 mt-2">
                                      2025 - 2026
                                  </div>
                              </div>
                          </div>
                      </div>

                    <div className="relative hidden md:flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_rgba(56,189,248,0.15)]" />
                    </div>

                    <div className="hidden md:block" />
                  </div>

                  <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8">
                      <div className="hidden md:block" />

                      <div className="relative hidden md:flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_rgba(56,189,248,0.15)]" />
                      </div>

                          <div className="md:pl-2">
                              <div className="gradient-border backdrop-blur transition-all duration-300 will-change-transform ring-1 ring-primary/15 hover:ring-2 hover:ring-primary/40 hover:scale-[1.015] p-4 sm:p-6 card-hover">
                                  <div className="flex flex-col items-start text-left w-full">
                                      <div className="min-[1138px]:flex min-[1138px]:justify-center min-[1138px]">
                                          <span className="text-xs font-semibold text-primary bg-primary/15 px-2.5 py-1 rounded-md">
                                          Expérience
                                          </span>
                                      </div>

                                      <div className="text-lg sm:text-xl font-semibold text-foreground mt-3">
                                          Gestionnaire PMS - Responsable Onboarding
                                      </div>

                                      <div className="text-sm sm:text-base text-foreground/70 mt-1">
                                          ClickYourFlat
                                      </div>

                                      <div className="text-sm sm:text-base text-foreground/60 mt-2">
                                          2023 - 2025
                                      </div>
                                  </div>
                              </div>
                          </div>
                  </div>

                  <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8">
                      <div className="md:pr-2">
                          <div className="gradient-border backdrop-blur transition-all duration-300 will-change-transform ring-1 ring-primary/15 hover:ring-2 hover:ring-primary/40 hover:scale-[1.015] p-4 sm:p-6 card-hover">
                              <div className="flex flex-col items-end text-right w-full">
                                  <div className="min-[1138px]:flex min-[1138px]:justify-center min-[1138px]">
                                      <span className="text-xs font-semibold text-primary bg-primary/15 px-2.5 py-1 rounded-md">
                                      Diplôme
                                      </span>
                                  </div>

                                  <div className="text-lg sm:text-xl font-semibold text-foreground mt-3">
                                      Consultant Développeur Web et Mobile
                                  </div>

                                  <div className="text-sm sm:text-base text-foreground/70 mt-1">
                                      Digital School of Paris
                                  </div>

                                  <div className="text-sm sm:text-base text-foreground/60 mt-2">
                                      2023 - 2025
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="relative hidden md:flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_rgba(56,189,248,0.15)]" />
                      </div>

                      <div className="hidden md:block" />
                  </div>

                  <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8">
                      <div className="hidden md:block" />

                      <div className="relative hidden md:flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_rgba(56,189,248,0.15)]" />
                      </div>

                          <div className="md:pl-2">
                              <div className="gradient-border backdrop-blur transition-all duration-300 will-change-transform ring-1 ring-primary/15 hover:ring-2 hover:ring-primary/40 hover:scale-[1.015] p-4 sm:p-6 card-hover">
                                  <div className="flex flex-col items-start text-left w-full">
                                      <div className="min-[1138px]:flex min-[1138px]:justify-center min-[1138px]">
                                          <span className="text-xs font-semibold text-primary bg-primary/15 px-2.5 py-1 rounded-md">
                                          Expérience
                                          </span>
                                      </div>

                                      <div className="text-lg sm:text-xl font-semibold text-foreground mt-3">
                                          Stagiaire Chef de Projet Digital
                                      </div>

                                      <div className="text-sm sm:text-base text-foreground/70 mt-1">
                                          Mairie de Bobigny
                                      </div>

                                      <div className="text-sm sm:text-base text-foreground/60 mt-2">
                                          JANV. 2021 - MARS 2021
                                      </div>
                                  </div>
                              </div>
                          </div>
                  </div>

                  <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8">
                      <div className="md:pr-2">
                          <div className="gradient-border backdrop-blur transition-all duration-300 will-change-transform ring-1 ring-primary/15 hover:ring-2 hover:ring-primary/40 hover:scale-[1.015] p-4 sm:p-6 card-hover">
                              <div className="flex flex-col items-end text-right w-full">
                                  <div className="min-[1138px]:flex min-[1138px]:justify-center min-[1138px]">
                                      <span className="text-xs font-semibold text-primary bg-primary/15 px-2.5 py-1 rounded-md">
                                      Diplôme
                                      </span>
                                  </div>

                                  <div className="text-lg sm:text-xl font-semibold text-foreground mt-3">
                                      BTS SIO
                                  </div>

                                  <div className="text-sm sm:text-base text-foreground/70 mt-1">
                                      Lycée Louise Michel
                                  </div>

                                  <div className="text-sm sm:text-base text-foreground/60 mt-2">
                                      2019 - 2021
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="relative hidden md:flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_rgba(56,189,248,0.15)]" />
                      </div>

                      <div className="hidden md:block" />
                  </div>
                </div>
              </div>
            </div>
        </section>
  </>
 )
};