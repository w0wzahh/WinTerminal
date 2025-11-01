"use client"

import type { WindowState } from "@/app/page"
import { HeroWindow } from "@/components/windows/hero-window"
import { AboutWindow } from "@/components/windows/about-window"
import { ProjectsWindow } from "@/components/windows/projects-window"
import { ContactWindow } from "@/components/windows/contact-window"

interface WindowManagerProps {
  windowStates: WindowState[]
  onClose: (windowType: WindowState["type"]) => void
  onMinimize: (windowType: WindowState["type"]) => void
  onToggleMaximize: (windowType: WindowState["type"]) => void
}

export function WindowManager({ windowStates, onClose, onMinimize, onToggleMaximize }: WindowManagerProps) {
  return (
    <div className="relative z-10">
      {windowStates.map((windowState) => {
        if (windowState.minimized) return null

        const commonProps = {
          onClose: () => onClose(windowState.type),
          onMinimize: () => onMinimize(windowState.type),
          onToggleMaximize: () => onToggleMaximize(windowState.type),
          isMaximized: windowState.maximized,
        }

        switch (windowState.type) {
          case "hero":
            return <HeroWindow key="hero" {...commonProps} />
          case "about":
            return <AboutWindow key="about" {...commonProps} />
          case "projects":
            return <ProjectsWindow key="projects" {...commonProps} />
          case "contact":
            return <ContactWindow key="contact" {...commonProps} />
          default:
            return null
        }
      })}
    </div>
  )
}
