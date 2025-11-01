"use client"

import { Terminal, Folder, Mail, Github } from "lucide-react"
import type { WindowType } from "@/app/page"

interface DesktopIconsProps {
  onOpenWindow: (windowType: WindowType) => void
}

export function DesktopIcons({ onOpenWindow }: DesktopIconsProps) {
  return (
    <div className="desktop-icons">
      <div className="desktop-icon" onDoubleClick={() => onOpenWindow("hero")}>
        <div className="desktop-icon-image">
          <Terminal className="w-5 h-5 text-card-foreground" />
        </div>
        <span className="desktop-icon-label">Terminal</span>
      </div>

      <div className="desktop-icon" onDoubleClick={() => onOpenWindow("about")}>
        <div className="desktop-icon-image">
          <Terminal className="w-5 h-5 text-card-foreground" />
        </div>
        <span className="desktop-icon-label">About Me</span>
      </div>

      <div className="desktop-icon" onDoubleClick={() => onOpenWindow("projects")}>
        <div className="desktop-icon-image">
          <Folder className="w-5 h-5 text-card-foreground" />
        </div>
        <span className="desktop-icon-label">Projects</span>
      </div>

      <div className="desktop-icon" onDoubleClick={() => onOpenWindow("contact")}>
        <div className="desktop-icon-image">
          <Mail className="w-5 h-5 text-card-foreground" />
        </div>
        <span className="desktop-icon-label">Contact</span>
      </div>

      <div className="desktop-icon" onDoubleClick={() => window.open("https://github.com/w0wzahh", "_blank")}>
        <div className="desktop-icon-image">
          <Github className="w-5 h-5 text-card-foreground" />
        </div>
        <span className="desktop-icon-label">My GitHub</span>
      </div>
    </div>
  )
}
