import React from 'react'

export default function EntryDetails({key, content}) {
  return (
    <React.Fragment key={key}>
        <div className="text-sm">
            {content}
        </div>
    </React.Fragment>
  )
}

