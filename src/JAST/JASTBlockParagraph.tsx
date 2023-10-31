import {Typography} from '@mui/material'
import JASTElement from './JASTElement.ts'
import JASTInline, {JASTInlineElement} from './JASTInline.tsx'

export interface JASTBlockParagraphProps {
  children?: JASTInlineElement
}

export type JASTBlockParagraphElement = JASTElement<'paragraph', JASTBlockParagraphProps>

export default function JASTBlockParagraph({children}: JASTBlockParagraphProps) {
  return <Typography gutterBottom sx={{wordBreak: 'break-all'}}><JASTInline>{children}</JASTInline></Typography>
}
