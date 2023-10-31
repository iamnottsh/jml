import {Typography} from '@mui/material'
import JASTElement from './JASTElement.ts'
import JASTInline, {JASTInlineElement} from './JASTInline.tsx'

export const JASTBlockParagraphType = 'paragraph'

export interface JASTBlockParagraphProps {
  children?: JASTInlineElement
}

export type JASTBlockParagraphElement = JASTElement<typeof JASTBlockParagraphType, JASTBlockParagraphProps>

export default function JASTBlockParagraph({children}: JASTBlockParagraphProps) {
  return <Typography gutterBottom><JASTInline>{children}</JASTInline></Typography>
}
