"use client"

import { useEffect, useState } from "react"
import { Terminal, Minus, Square, X } from "lucide-react"

interface HeroWindowProps {
  onClose: () => void
  onMinimize: () => void
  onToggleMaximize: () => void
  isMaximized: boolean
}

export function HeroWindow({ onClose, onMinimize, onToggleMaximize, isMaximized }: HeroWindowProps) {
  const [displayText, setDisplayText] = useState("")
  const fullText = "w0wzahh"

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
    <div className={`fixed z-20 ${isMaximized ? "inset-0 p-0" : "inset-0 flex items-center justify-center px-4"}`}>
      <div className={`window-open ${isMaximized ? "w-full h-full max-w-none" : "max-w-5xl w-full"}`}>
        <div className="win95-border bg-card h-full flex flex-col">
          <div className="win95-titlebar">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm">Terminal - w0wzahh@portfolio</span>
            </div>
            <div className="flex gap-1">
              <button
                className="win95-button w-5 h-5 flex items-center justify-center"
                onClick={onMinimize}
                title="Minimize"
              >
                <Minus className="w-3 h-3" />
              </button>
              <button
                className="win95-button w-5 h-5 flex items-center justify-center"
                onClick={onToggleMaximize}
                title={isMaximized ? "Restore" : "Maximize"}
              >
                <Square className="w-2.5 h-2.5" />
              </button>
              <button className="win95-button w-5 h-5 flex items-center justify-center" onClick={onClose} title="Close">
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="terminal-box m-1 p-8 md:p-12 flex-1 overflow-auto">
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
                  {"> Crafting them code structures"}
                  <br />
                  {"> Building them systems."}
                  <br />
                  {"> Double-click desktop icons to explore :3"}
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
              </div>

              <div className="flex items-center gap-2 text-primary font-mono text-sm pt-4">
                <span className="cursor-blink">█</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
