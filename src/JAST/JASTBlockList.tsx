import {List, ListItem} from '@mui/material'
import JASTElement from './JASTElement.ts'
import JASTBlock, {JASTBlockElement} from './JASTBlock.tsx'

export const JASTBlockListType = 'list'

export interface JASTBlockListProps {
  children?: JASTBlockElement[]
}

export type JASTBlockListElement = JASTElement<typeof JASTBlockListType, JASTBlockListProps>

export default function JASTBlockList({children}: JASTBlockListProps) {
  return <List>{children?.map((value, index) => <ListItem key={index}><JASTBlock>{value}</JASTBlock></ListItem>)}</List>
}
