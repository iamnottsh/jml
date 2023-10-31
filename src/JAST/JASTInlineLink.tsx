import {Link} from '@mui/material'
import {HTMLAttributeAnchorTarget} from 'react'
import JASTElement from './JASTElement.ts'
import JASTInline, {JASTInlineElement} from './JASTInline.tsx'

export interface JASTInlineLinkProps {
  children?: JASTInlineElement
  href?: string
  target?: HTMLAttributeAnchorTarget
}

export type JASTInlineLinkElement = JASTElement<'link', JASTInlineLinkProps>

export default function JASTInlineLink({children, href, target}: JASTInlineLinkProps) {
  return <Link href={href} target={target} rel="noreferrer"><JASTInline>{children}</JASTInline></Link>
}
