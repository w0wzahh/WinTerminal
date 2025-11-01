"use client"

import { useEffect, useState } from "react"
import { Terminal, ChevronDown, Minus, Square, X } from "lucide-react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [mounted, setMounted] = useState(false)
  const fullText = "w0wzahh"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="relative z-10 max-w-5xl w-full">
        <div className={`win95-border bg-card ${mounted ? "window-open" : "opacity-0"}`}>
          {/* Windows 95 Title Bar */}
          <div className="win95-titlebar">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm">Terminal - w0wzahh@portfolio</span>
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

          {/* Terminal Content */}
          <div className="terminal-box m-1 p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary font-mono text-sm">
                <Terminal className="w-4 h-4" />
                <span>root@portfolio:~$</span>
                <span className="text-muted-foreground">whoami</span>
              </div>

              <div className="pl-6">
                <h1
                  className="text-5xl md:text-7xl font-bold terminal-glow vhs-aberration"
                  data-text={displayText || "w0wzahh"}
                >
                  {displayText}
                  {displayText.length < fullText.length && <span className="cursor-blink">█</span>}
                </h1>
              </div>

              <div className="flex items-start gap-2 text-primary font-mono text-sm pl-6">
                <span className="animate-pulse">&gt;</span>
                <div className="space-y-1">
                  <div className="text-foreground">ROLE: SOFTWARE_DEVELOPER</div>
                  <div className="text-foreground">STATUS: ACTIVE</div>
                  <div className="text-foreground">LOCATION: GITHUB.COM/W0WZAHH</div>
                </div>
              </div>

              <div className="pl-6 pt-4">
                <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-6">
                  {"> Crafting code in the digital void..."}
                  <br />
                  {"> Building systems, breaking boundaries."}
                  <br />
                  {"> Type 'help' for available commands."}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pl-6 pt-4">
                <a
                  href="https://github.com/w0wzahh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="win95-button px-4 py-2 font-mono text-sm text-card-foreground hover:bg-muted transition-colors"
                >
                  [VIEW_GITHUB]
                </a>

                <a
                  href="#contact"
                  className="win95-button px-4 py-2 font-mono text-sm text-card-foreground hover:bg-muted transition-colors"
                >
                  [CONTACT]
                </a>

                <a
                  href="#projects"
                  className="win95-button px-4 py-2 font-mono text-sm text-card-foreground hover:bg-muted transition-colors"
                >
                  [PROJECTS]
                </a>
              </div>

              <div className="flex items-center gap-2 text-primary font-mono text-sm pt-4">
                <span className="cursor-blink">█</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-primary hover:text-foreground transition-colors group"
          >
            <span className="text-xs font-mono terminal-glow">[SCROLL_DOWN]</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
