"use client"

import { Github, Mail, Terminal, Minus, Square, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative"
    >
      <div className="relative z-10 max-w-4xl w-full">
        <div className={`win95-border bg-card mb-8 ${isVisible ? "window-open" : "opacity-0"}`}>
          <div className="win95-titlebar">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm">contact.exe</span>
            </div>
            <div className="flex gap-1">
              <button className="win95-button w-5 h-5 flex items-center justify-center">
                <Minus className="w-3 h-3" />
              </button>
              <button className="win95-button w-5 h-5 flex items-center justify-center">
                <Square className="w-2.5 h-2.5" />
              </button>
              <button className="win95-button w-5 h-5 flex items-center justify-center">
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="terminal-box m-1 p-6">
            <div className="flex items-center gap-2 text-primary font-mono text-sm mb-4">
              <span>&gt;</span>
              <span>cat contact.txt</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold terminal-glow">CONTACT_SYSTEM</h2>
          </div>
        </div>

        <div className={`win95-border bg-card mb-6 ${isVisible ? "fade-in-up stagger-1" : "opacity-0"}`}>
          <div className="win95-titlebar">
            <span className="text-white font-bold text-sm">Communication Channels</span>
          </div>

          <div className="terminal-box m-1 p-8">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="w-6 h-6 text-primary" />
              <span className="text-primary font-mono text-sm">COMMUNICATION_CHANNELS</span>
            </div>

            <p className="text-foreground font-mono text-sm leading-relaxed mb-6">
              {"> Ready to collaborate on something"}
              <br />
              {"> dark and beautiful?"}
              <br />
              {"> Reach out through the void."}
            </p>

            <div className="space-y-3">
              <a
                href="https://github.com/w0wzahh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 win95-button px-6 py-3 text-card-foreground font-mono text-sm hover:bg-muted transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>[GITHUB] github.com/w0wzahh</span>
              </a>

              <a
                href="mailto:contact@w0wzahh.dev"
                className="flex items-center gap-3 win95-button px-6 py-3 text-card-foreground font-mono text-sm hover:bg-muted transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>[EMAIL] contact@w0wzahh.dev</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`win95-border bg-card mb-12 ${isVisible ? "fade-in-up stagger-2" : "opacity-0"}`}>
          <div className="win95-titlebar">
            <span className="text-white font-bold text-sm">System Status</span>
          </div>

          <div className="terminal-box m-1 p-6">
            <div className="font-mono text-sm space-y-2">
              <div className="text-primary mb-3">&gt; system --status</div>
              <div className="text-foreground pl-4">{"├─ STATUS: ONLINE"}</div>
              <div className="text-foreground pl-4">{"├─ ACCEPTING_PROJECTS: TRUE"}</div>
              <div className="text-foreground pl-4">{"├─ RESPONSE_TIME: <24H"}</div>
              <div className="text-foreground pl-4">{"└─ AVAILABILITY: READY"}</div>
              <div className="text-primary pt-3">
                &gt; <span className="cursor-blink">█</span>
              </div>
            </div>
          </div>
        </div>

        <footer className={`text-center ${isVisible ? "fade-in-up stagger-3" : "opacity-0"}`}>
          <div className="text-muted-foreground font-mono text-xs space-y-1">
            <div>{"> Built with Next.js in the digital void"}</div>
            <div>{"© 2025 w0wzahh - All rights reserved"}</div>
            <div className="text-primary pt-2">{"[END_OF_TRANSMISSION]"}</div>
          </div>
        </footer>
      </div>
    </section>
  )
}
