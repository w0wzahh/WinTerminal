"use client"

import { Mail, Github, Terminal, Minus, Square, X } from "lucide-react"

interface ContactWindowProps {
  onClose: () => void
  onMinimize: () => void
  onToggleMaximize: () => void
  isMaximized: boolean
}

export function ContactWindow({ onClose, onMinimize, onToggleMaximize, isMaximized }: ContactWindowProps) {
  return (
    <div
      className={`fixed z-20 pointer-events-none ${
        isMaximized ? "inset-0 p-0" : "inset-0 flex items-center justify-center px-4"
      }`}
    >
      <div
        className={`window-open pointer-events-auto ${isMaximized ? "w-full h-full max-w-none" : "max-w-3xl w-full"}`}
      >
        <div className={`win95-border bg-card ${isMaximized ? "h-full flex flex-col" : ""}`}>
          <div className="win95-titlebar">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm">contact.exe</span>
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

          <div className={`terminal-box m-1 p-8 ${isMaximized ? "flex-1 overflow-auto" : ""}`}>
            <div className="flex items-center gap-2 text-primary font-mono text-sm mb-6">
              <span>&gt;</span>
              <span>cat contact.txt</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold terminal-glow mb-8">CONTACT</h2>

            <div className="space-y-6">
              <div className="win95-border bg-card/50">
                <div className="terminal-box m-1 p-6">
                  <div className="text-primary font-mono text-xs mb-4">[CONNECTION_METHODS]</div>

                  <div className="space-y-4">
                    <a
                      href="https://github.com/w0wzahh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 win95-border bg-card hover:bg-muted transition-colors group"
                    >
                      <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-mono text-sm text-foreground mb-1">GITHUB</div>
                        <div className="font-mono text-xs text-muted-foreground">github.com/w0wzahh</div>
                      </div>
                    </a>

                    <a
                      href="mailto:contact@w0wzahh.dev"
                      className="flex items-center gap-4 p-4 win95-border bg-card hover:bg-muted transition-colors group"
                    >
                      <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-mono text-sm text-foreground mb-1">EMAIL</div>
                        <div className="font-mono text-xs text-muted-foreground">contact@w0wzahh.dev</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <div className="text-primary font-mono text-xs mb-2">[SYSTEM_STATUS]</div>
                <div className="text-muted-foreground font-mono text-sm">
                  {"> Ready to connect"}
                  <span className="cursor-blink">█</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
