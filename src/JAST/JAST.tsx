import {Box, Container, Link, SxProps, Typography} from '@mui/material'
import {useMemo} from 'react'
import JASTBlock from './JASTBlock.tsx'
import {JASTOutput} from './JASTOutput.ts'

const hover = {py: 1, '&>*': {visibility: 'hidden'}, ':hover': {'&>*': {visibility: 'unset'}}}

function JASTContents({title, elements, children, id, level, main}: JASTOutput & {main?: true}) {
  const sx: SxProps = useMemo(() => ({opacity: 0.25 + 0.75 / Math.pow(1.5, level), fontSize: `${1.2 + 3.6 / (1 << level)}rem`}), [level])
  return (
    <Box id={main && id} sx={{breakBefore: 'always'}}>
      <Box sx={hover}><Link href={`#${id}`}>¶ {title}</Link></Box>
      <Typography sx={sx} fontWeight="bold" textAlign="center" gutterBottom>{title}</Typography>
      {elements?.map((value, index) => <JASTBlock key={index}>{value}</JASTBlock>)}
      {children?.map((value, index) => <JASTContents key={index} {...value} main={main}/>)}
      <Box sx={hover}><Link href={`#${id}`}>§ {title}</Link></Box>
    </Box>
  )
}

function JASTTableOfContents({title, children, id, level, main}: JASTOutput & {main?: true}) {
  return (
    <>
      <Typography sx={{whiteSpace: 'nowrap'}}>
        {'· '.repeat(level)}
        <Link href={`#${id}`} whiteSpace="nowrap" {...!main && {color: 'inherit', underline: 'none'}}>{title}</Link>
      </Typography>
      {children?.map((value, index) => <JASTTableOfContents key={index} {...value} main={main}/>)}
    </>
  )
}

const width = 25
const scroll: SxProps = {height: '100%', overflow: 'auto'}

export default function JAST({article, main}: {article: JASTOutput, main?: true}) {
  return (
    <>
      <Container maxWidth="md" sx={{display: 'none', displayPrint: 'block'}}>
        <Typography fontSize="4.8rem" fontWeight="bold" textAlign="center" gutterBottom>目录</Typography>
        <JASTTableOfContents {...article}/>
        <JASTContents {...article}/>
      </Container>
      <Box position="relative" height="100%" displayPrint="none">
        <Box
          position="absolute"
          right={0}
          width={`${width}%`}
          height="100%"
        >
          <Box sx={scroll}>
            <Typography fontSize="1.2rem" fontWeight="bold" textAlign="center" gutterBottom>目录</Typography>
            <JASTTableOfContents {...article} main={main}/>
          </Box>
        </Box>
        <Box
          position="absolute"
          right={`${width}%`}
          width={`${100 - width}%`}
          height="100%"
        >
          <Container maxWidth="md" sx={scroll}>
            <JASTContents {...article} main={main}/>
          </Container>
        </Box>
      </Box>
    </>
  )
}
