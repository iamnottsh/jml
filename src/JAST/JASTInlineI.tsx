import {Box} from '@mui/material'
import JASTElement from './JASTElement.ts'
import JASTInline, {JASTInlineElement} from './JASTInline.tsx'

export const JASTInlineIType = 'i'

export interface JASTInlineIProps {
  children?: JASTInlineElement
}

export type JASTInlineIElement = JASTElement<typeof JASTInlineIType, JASTInlineIProps>

export default function JASTInlineI({children}: JASTInlineIProps) {
  return <Box component={JASTInlineIType}><JASTInline>{children}</JASTInline></Box>
}
