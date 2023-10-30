import {useMediaQuery} from '@mui/material'

export default function useDark() {
  return useMediaQuery('(prefers-color-scheme: dark)')
}
