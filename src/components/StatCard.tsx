import { useEffect, useState } from "react"

type StatCardProps = {
  end: number
  label: string
  suffix?: string
}

function StatCard({ end, label, suffix = "" }: StatCardProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0

    const duration = 2000
    const incrementTime = 30
    const step = Math.ceil(end / (duration / incrementTime))

    const timer = setInterval(() => {
      start += step

      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, incrementTime)

    return () => clearInterval(timer)
  }, [end])

  return (
    <div className="stat">
      <h2>
        {count}
        {suffix}
      </h2>
      <p>{label}</p>
    </div>
  )
}

export default StatCard