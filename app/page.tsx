"use client"

import { useState } from "react"
import { GrainOverlay } from "@/components/grain-overlay"
import { Taskbar } from "@/components/taskbar"
import { DesktopIcons } from "@/components/desktop-icons"
import { WindowManager } from "@/components/window-manager"

export type WindowType = "hero" | "about" | "projects" | "contact" | null

export type WindowState = {
  type: WindowType
  minimized: boolean
  maximized: boolean
}

export default function Home() {
  const [windowStates, setWindowStates] = useState<WindowState[]>([
    { type: "hero", minimized: false, maximized: false },
  ])

  const openWindow = (windowType: WindowType) => {
    if (!windowType) return

    const existingWindow = windowStates.find((w) => w.type === windowType)
    if (existingWindow) {
      if (existingWindow.minimized) {
        setWindowStates(windowStates.map((w) => (w.type === windowType ? { ...w, minimized: false } : w)))
      }
    } else {
      setWindowStates([...windowStates, { type: windowType, minimized: false, maximized: false }])
    }
  }

  const closeWindow = (windowType: WindowType) => {
    setWindowStates(windowStates.filter((w) => w.type !== windowType))
  }

  const minimizeWindow = (windowType: WindowType) => {
    setWindowStates(windowStates.map((w) => (w.type === windowType ? { ...w, minimized: true } : w)))
  }

  const toggleMaximize = (windowType: WindowType) => {
    setWindowStates(windowStates.map((w) => (w.type === windowType ? { ...w, maximized: !w.maximized } : w)))
  }

  return (
    <main className="relative min-h-screen pb-12 overflow-hidden">
      <GrainOverlay />
      <DesktopIcons onOpenWindow={openWindow} />
      <WindowManager
        windowStates={windowStates}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onToggleMaximize={toggleMaximize}
      />
      <Taskbar onOpenWindow={openWindow} windowStates={windowStates} />
    </main>
  )
}
