import {JASTInlineAElement} from './JASTInlineA.tsx'
import JASTInlineB, {JASTInlineBElement, JASTInlineBType} from './JASTInlineB.tsx'
import JASTInlineI, {JASTInlineIElement, JASTInlineIType} from './JASTInlineI.tsx'
import JASTInlineS, {JASTInlineSElement, JASTInlineSType} from './JASTInlineS.tsx'

export type JASTInlineElement = string | JASTInlineElement[] |
  JASTInlineBElement |
  JASTInlineIElement |
  JASTInlineSElement |
  JASTInlineAElement

export interface JASTInlineProps {
  children?: JASTInlineElement
}

export default function JASTInline({children}: JASTInlineProps) {
  if (children === undefined) return null
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map((value, index) => <JASTInline key={index}>{value}</JASTInline>)
  const {type, props} = children
  switch (type) {
    case JASTInlineBType:
      return <JASTInlineB {...props}/>
    case JASTInlineIType:
      return <JASTInlineI {...props}/>
    case JASTInlineSType:
      return <JASTInlineS {...props}/>
  }
}

