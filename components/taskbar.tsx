"use client"

import { useState, useEffect } from "react"
import { Terminal, Folder, FileText, Mail, Volume2, VolumeX } from "lucide-react"
import type { WindowState } from "@/app/page"

interface TaskbarProps {
  onOpenWindow: (windowType: WindowState["type"]) => void
  windowStates: WindowState[]
}

export function Taskbar({ onOpenWindow, windowStates }: TaskbarProps) {
  const [time, setTime] = useState("")
  const [showStartMenu, setShowStartMenu] = useState(false)
  const [soundOn, setSoundOn] = useState(true)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      setTime(`${hours}:${minutes}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleMenuClick = (windowType: WindowState["type"]) => {
    onOpenWindow(windowType)
    setShowStartMenu(false)
  }

  const getWindowIcon = (type: WindowState["type"]) => {
    switch (type) {
      case "hero":
        return <Terminal className="w-4 h-4" />
      case "about":
        return <FileText className="w-4 h-4" />
      case "projects":
        return <Folder className="w-4 h-4" />
      case "contact":
        return <Mail className="w-4 h-4" />
      default:
        return null
    }
  }

  const getWindowTitle = (type: WindowState["type"]) => {
    switch (type) {
      case "hero":
        return "Terminal"
      case "about":
        return "About"
      case "projects":
        return "Projects"
      case "contact":
        return "Contact"
      default:
        return ""
    }
  }

  return (
    <>
      {showStartMenu && (
        <div className="win95-start-menu">
          <div className="win95-start-menu-sidebar">
            <div className="win95-start-menu-title">w0wzahh</div>
          </div>
          <div className="win95-start-menu-content">
            <button className="win95-menu-item" onClick={() => handleMenuClick("about")}>
              <FileText className="w-4 h-4" />
              <span>About</span>
            </button>
            <button className="win95-menu-item" onClick={() => handleMenuClick("projects")}>
              <Folder className="w-4 h-4" />
              <span>Projects</span>
            </button>
            <button className="win95-menu-item" onClick={() => handleMenuClick("contact")}>
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
            <div className="win95-menu-separator" />
            <button className="win95-menu-item" onClick={() => window.open("https://github.com/w0wzahh", "_blank")}>
              <Terminal className="w-4 h-4" />
              <span>GitHub Profile</span>
            </button>
          </div>
        </div>
      )}

      <div className="win95-taskbar">
        <button className="win95-start-button text-card-foreground" onClick={() => setShowStartMenu(!showStartMenu)}>
          <Terminal className="w-4 h-4" />
          <span>Start</span>
        </button>

        <div className="flex items-center gap-1 ml-2 flex-1">
          {windowStates.map((windowState) => (
            <button
              key={windowState.type}
              className={`win95-button px-3 py-1 flex items-center gap-2 text-sm ${
                windowState.minimized ? "opacity-75" : "bg-muted"
              }`}
              onClick={() => onOpenWindow(windowState.type)}
            >
              {getWindowIcon(windowState.type)}
              <span className="text-card-foreground">{getWindowTitle(windowState.type)}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto mr-2">
          <button
            className="win95-button p-1"
            onClick={() => setSoundOn(!soundOn)}
            title={soundOn ? "Sound On" : "Sound Off"}
          >
            {soundOn ? (
              <Volume2 className="w-3 h-3 text-card-foreground" />
            ) : (
              <VolumeX className="w-3 h-3 text-card-foreground" />
            )}
          </button>
          <div className="win95-taskbar-time text-card-foreground">{time || "00:00"}</div>
        </div>
      </div>
    </>
  )
}
