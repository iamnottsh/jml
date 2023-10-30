import {Link} from '@mui/material'
import {HTMLAttributeAnchorTarget} from 'react'
import JASTElement from './JASTElement.ts'
import JASTInline, {JASTInlineElement} from './JASTInline.tsx'

export const JASTInlineAType = 'a'

export interface JASTInlineAProps {
  children?: JASTInlineElement
  href?: string
  target?: HTMLAttributeAnchorTarget
}

export type JASTInlineAElement = JASTElement<typeof JASTInlineAType, JASTInlineAProps>

export default function JASTInlineA({children, href, target}: JASTInlineAProps) {
  return <Link href={href} target={target} rel="noreferrer"><JASTInline>{children}</JASTInline></Link>
}
