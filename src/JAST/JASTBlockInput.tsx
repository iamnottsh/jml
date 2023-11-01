import {TextField} from '@mui/material'
import JASTElement from './JASTElement.ts'
import JASTBlock, {JASTBlockElement} from './JASTBlock.tsx'

export interface JASTBlockInputProps {
  children?: JASTBlockElement
  value?: string
  disabled?: boolean
}

export type JASTBlockInputElement = JASTElement<'input', JASTBlockInputProps>

export default function JASTBlockInput({children, value, disabled}: JASTBlockInputProps) {
  return <TextField variant="standard" label={<JASTBlock>{children}</JASTBlock>} fullWidth value={value} disabled={disabled}/>
}
