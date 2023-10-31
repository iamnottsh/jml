import {Grid} from '@mui/material'
import JASTBlock, {JASTBlockElement} from './JASTBlock.tsx'
import JASTElement from './JASTElement.ts'

export interface JASTBlockCompareProps {
  children?: JASTBlockElement[]
}

export type JASTBlockCompareElement = JASTElement<'compare', JASTBlockCompareProps>

export default function JASTBlockCompare({children}: JASTBlockCompareProps) {
  return (
    <Grid container columns={children?.length} rowSpacing={2}>
      {children?.map((value, index) =>
        <Grid key={index} item xs={1}>
          <JASTBlock>{value}</JASTBlock>
        </Grid>)}
    </Grid>
  )
}
