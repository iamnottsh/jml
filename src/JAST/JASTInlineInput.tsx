import {TextField} from '@mui/material'
import JASTElement from './JASTElement.ts'
import JASTInline, {JASTInlineElement} from './JASTInline.tsx'

export interface JASTInlineInputProps {
  children?: JASTInlineElement
  value?: string
  disabled?: boolean
}

export type JASTInlineInputElement = JASTElement<'input', JASTInlineInputProps>

export default function JASTInlineInput({children, value, disabled}: JASTInlineInputProps) {
  return <TextField variant="standard" label={<JASTInline>{children}</JASTInline>} fullWidth value={value} disabled={disabled}/>
}
