import React from 'react'

interface Props {}

function IFrameRejectedComponent(props: Props) {
  return (
    <div>
      <p style={{ textAlign: 'center' }}>Access is restricted via iFrame</p>
    </div>
  )
}

export default IFrameRejectedComponent
