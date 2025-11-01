"use client"

import { useEffect, useState } from "react"
import { ExternalLink, GitFork, Star, AlertCircle, Minus, Square, X, Terminal } from "lucide-react"

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
}

interface ProjectsWindowProps {
  onClose: () => void
  onMinimize: () => void
  onToggleMaximize: () => void
  isMaximized: boolean
}

export function ProjectsWindow({ onClose, onMinimize, onToggleMaximize, isMaximized }: ProjectsWindowProps) {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("https://api.github.com/users/w0wzahh/repos?sort=updated&per_page=6")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data)
        } else {
          setError(true)
        }
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <div
      className={`fixed z-20 pointer-events-none overflow-auto ${
        isMaximized ? "inset-0 p-0" : "inset-0 flex items-center justify-center px-4 py-20"
      }`}
    >
      <div
        className={`window-open pointer-events-auto ${isMaximized ? "w-full h-full max-w-none" : "max-w-6xl w-full"}`}
      >
        <div className={`win95-border bg-card mb-4 ${isMaximized ? "h-auto" : ""}`}>
          <div className="win95-titlebar">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm">projects.exe</span>
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

          <div className="terminal-box m-1 p-6">
            <div className="flex items-center gap-2 text-primary font-mono text-sm mb-4">
              <span>&gt;</span>
              <span>ls -la ~/projects</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold terminal-glow">REPOSITORIES</h2>
          </div>
        </div>

        {loading && (
          <div className="win95-border bg-card">
            <div className="win95-titlebar">
              <span className="text-white font-bold text-xs">Loading...</span>
            </div>
            <div className="terminal-box m-1 p-6 text-center">
              <div className="text-primary font-mono text-sm mb-4">
                {"> Loading repositories"}
                <span className="cursor-blink">█</span>
              </div>
              <div className="loading-bar max-w-md mx-auto" />
            </div>
          </div>
        )}

        {error && (
          <div className="win95-border bg-card">
            <div className="terminal-box m-1 p-6 text-center">
              <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <p className="text-muted-foreground font-mono text-sm">{"> ERROR: Failed to fetch repositories"}</p>
            </div>
          </div>
        )}

        {!loading && !error && (
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 ${isMaximized ? "px-4 pb-4" : ""}`}>
            {repos.map((repo) => (
              <div key={repo.id} className="win95-border bg-card">
                <div className="win95-titlebar">
                  <span className="text-white font-bold text-xs truncate">{repo.name}</span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="terminal-box m-1 p-4 flex flex-col">
                  <p className="text-xs text-muted-foreground mb-4 flex-grow font-mono leading-relaxed min-h-[60px]">
                    {repo.description || "> No description available"}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono pt-3 border-t border-primary/20 mt-auto">
                    {repo.language && <span className="text-primary">[{repo.language}]</span>}
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {repo.forks_count}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
