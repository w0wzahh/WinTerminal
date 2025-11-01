"use client"

import { Code2, Database, GitBranch, Terminal, Minus, Square, X } from "lucide-react"

interface AboutWindowProps {
  onClose: () => void
  onMinimize: () => void
  onToggleMaximize: () => void
  isMaximized: boolean
}

export function AboutWindow({ onClose, onMinimize, onToggleMaximize, isMaximized }: AboutWindowProps) {
  const skills = [
    { icon: Code2, label: "FULL_STACK_DEV", desc: "End-to-end solutions" },
    { icon: Database, label: "DATABASE_ARCH", desc: "Data structure design" },
    { icon: GitBranch, label: "VERSION_CTRL", desc: "Git workflow mastery" },
    { icon: Terminal, label: "CLI_TOOLS", desc: "Command line expert" },
  ]

  return (
    <div
      className={`fixed z-20 pointer-events-none ${
        isMaximized ? "inset-0 p-0" : "inset-0 flex items-center justify-center px-4"
      }`}
    >
      <div
        className={`window-open pointer-events-auto ${isMaximized ? "w-full h-full max-w-none" : "max-w-6xl w-full"}`}
      >
        <div className={`win95-border bg-card mb-4 ${isMaximized ? "h-full flex flex-col" : ""}`}>
          <div className="win95-titlebar">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm">about.exe</span>
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

          <div className={`terminal-box m-1 p-6 ${isMaximized ? "flex-1 overflow-auto" : ""}`}>
            <div className="flex items-center gap-2 text-primary font-mono text-sm mb-4">
              <span>&gt;</span>
              <span>cat about.txt</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold terminal-glow mb-4">ABOUT_SYSTEM</h2>
          </div>
        </div>

        <div className={`grid md:grid-cols-2 gap-6 ${isMaximized ? "px-4 pb-4" : ""}`}>
          <div className="win95-border bg-card">
            <div className="win95-titlebar">
              <span className="text-white font-bold text-xs">System Information</span>
            </div>
            <div className="terminal-box m-1 p-6 space-y-4">
              <div className="text-primary font-mono text-xs mb-4">[SYSTEM_INFO]</div>
              <p className="text-foreground font-mono text-sm leading-relaxed">
                {"> Lost in the void of code, navigating"}
                <br />
                {"> through digital landscapes creating"}
                <br />
                {"> experiences that blur the line between"}
                <br />
                {"> functionality and art."}
              </p>
              <div className="pt-4 border-t border-primary/30">
                <div className="text-primary font-mono text-xs mb-2">CURRENT_STATUS:</div>
                <div className="text-foreground font-mono text-sm">
                  {"> Building in the shadows"}
                  <span className="cursor-blink">█</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {skills.map((skill, index) => (
              <div key={index} className="win95-border bg-card">
                <div className="terminal-box m-1 p-4">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-5 h-5 text-primary" />
                    <div className="flex-1">
                      <div className="font-mono text-sm text-primary mb-1">{skill.label}</div>
                      <div className="font-mono text-xs text-muted-foreground">{skill.desc}</div>
                    </div>
                    <span className="text-primary font-mono text-xs">[OK]</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
