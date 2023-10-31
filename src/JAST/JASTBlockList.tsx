import {List, ListItem} from '@mui/material'
import JASTBlock, {JASTBlockElement} from './JASTBlock.tsx'
import JASTElement from './JASTElement.ts'

export interface JASTBlockListProps {
  children?: JASTBlockElement[]
}

export type JASTBlockListElement = JASTElement<'list', JASTBlockListProps>

export default function JASTBlockList({children}: JASTBlockListProps) {
  return (
    <List disablePadding>
      {children?.map((value, index) =>
        <ListItem key={index} disablePadding sx={{pl: 2, ':before': {content: `"${index + 1}.\\00a0"`}}}>
          <JASTBlock>{value}</JASTBlock>
        </ListItem>)}
    </List>
  )
}
