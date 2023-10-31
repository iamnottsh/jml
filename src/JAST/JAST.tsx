import {Typography} from '@mui/material'
import {JASTOutput} from './JASTOutput.ts'

export function JASTContents({title, elements, children, id, level}: JASTOutput) {
  return (
    <div id={id}>
      <Typography gutterBottom>
      
      </Typography>
    </div>
  )
}

export function JASTTableOfContents({title, children, id, level}: JASTOutput) {

}
