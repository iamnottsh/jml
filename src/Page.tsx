import {Box} from '@mui/material'
import chapters from './chapters'
import JAST from './JAST/JAST.tsx'
import JASTCompile from './JAST/JASTCompile.ts'

const article = JASTCompile(chapters)

export default function Page() {
  return <Box height="100vh"><JAST article={article} main/></Box>
}
