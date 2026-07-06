"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = "achados-juh-countdown-deadline"
const DURATION_MS = 24 * 60 * 60 * 1000

function readDeadline() {
  const now = Date.now()
  const stored = window.localStorage.getItem(STORAGE_KEY)
  const parsed = stored ? Number(stored) : NaN

  if (!Number.isNaN(parsed) && parsed > now) {
    return parsed
  }

  const deadline = now + DURATION_MS
  window.localStorage.setItem(STORAGE_KEY, String(deadline))
  return deadline
}

function formatRemaining(ms: number) {
  const totalMinutes = Math.max(0, Math.floor(ms / 60000))
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}min`
}

export function CountdownBar() {
  const [label, setLabel] = useState(() => formatRemaining(DURATION_MS))

  useEffect(() => {
    let deadline = readDeadline()

    const tick = () => {
      const remaining = deadline - Date.now()
      if (remaining <= 0) {
        deadline = Date.now() + DURATION_MS
        window.localStorage.setItem(STORAGE_KEY, String(deadline))
      }
      setLabel(formatRemaining(deadline - Date.now()))
    }

    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="sticky top-0 z-50 w-full bg-primary py-2.5 text-primary-foreground shadow-sm">
      <p className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 text-center text-xs font-semibold tracking-wide sm:text-sm">
        <span>ÚLTIMAS VAGAS GRATUITAS NO GRUPO!</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="font-bold">ENCERRA EM:</span>
          <span className="inline-flex items-center rounded-full bg-black/15 px-2.5 py-0.5 font-bold tabular-nums">
            {label}
          </span>
        </span>
      </p>
    </div>
  )
}
