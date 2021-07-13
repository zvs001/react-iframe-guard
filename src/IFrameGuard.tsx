import { isInIFrame } from 'is-iframe'
import React, { ReactElement } from 'react'
import IFrameRejectedComponent from './IFrameRejectedComponent'

interface Props {
  children: ReactElement
  rejectComponent?: ReactElement
}

function IFrameGuard(props: Props): ReactElement {
  const { children, rejectComponent } = props

  const isIframe = isInIFrame()

  if (isIframe) {
    if (rejectComponent) return rejectComponent
    return <IFrameRejectedComponent />
  }

  return children
}

export default IFrameGuard
