import { RoughAnnotationType } from 'rough-notation/lib/model'
import React from 'react'

export interface LinkAnimation {
  type?: RoughAnnotationType
  color?: string
  strokeWidth?: number
  animationDuration?: number
}

export type SVGProps = React.SVGProps<SVGSVGElement>
