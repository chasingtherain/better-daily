import React from 'react'

export default function EntryDetails({key, content}) {
  return (
      <div key={key} className="text-sm">
          {content}
      </div>
  )
}

