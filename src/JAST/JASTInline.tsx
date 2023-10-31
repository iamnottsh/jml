import JASTInlineInput, {JASTInlineInputElement} from './JASTInlineInput.tsx'
import JASTInlineLink, {JASTInlineLinkElement} from './JASTInlineLink.tsx'

export type JASTInlineElement = string | JASTInlineElement[] |
  JASTInlineLinkElement |
  JASTInlineInputElement

export interface JASTInlineProps {
  children?: JASTInlineElement
}

export default function JASTInline({children}: JASTInlineProps) {
  if (children === undefined) return null
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map((value, index) => <JASTInline key={index}>{value}</JASTInline>)
  const {type, props} = children
  switch (type) {
    case 'link':
      return <JASTInlineLink {...props}/>
    case 'input':
      return <JASTInlineInput {...props}/>
  }
}

