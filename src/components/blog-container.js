import React from "react"

export default function BlogContainer({ children }) {
  return (
    <div
      style={{
        margin: `3rem auto`,
        maxWidth: `800px`,
        padding: `0 1rem`,
      }}
    >
      {children}
    </div>
  )
}
