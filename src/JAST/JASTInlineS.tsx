import {Box} from '@mui/material'
import JASTElement from './JASTElement.ts'
import JASTInline, {JASTInlineElement} from './JASTInline.tsx'
import {JASTInlineIType} from './JASTInlineI.tsx'

export const JASTInlineSType = 's'

export interface JASTInlineSProps {
  children?: JASTInlineElement
}

export type JASTInlineSElement = JASTElement<typeof JASTInlineSType, JASTInlineSProps>

export default function JASTInlineS({children}: JASTInlineSProps) {
  return <Box component={JASTInlineIType}><JASTInline>{children}</JASTInline></Box>
}
