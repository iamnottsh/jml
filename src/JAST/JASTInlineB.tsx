import {Box} from '@mui/material'
import JASTElement from './JASTElement.ts'
import JASTInline, {JASTInlineElement} from './JASTInline.tsx'

export const JASTInlineBType = 'b'

export interface JASTInlineBProps {
  children?: JASTInlineElement
}

export type JASTInlineBElement = JASTElement<typeof JASTInlineBType, JASTInlineBProps>

export default function JASTInlineB({children}: JASTInlineBProps) {
  return <Box component={JASTInlineBType}><JASTInline>{children}</JASTInline></Box>
}
