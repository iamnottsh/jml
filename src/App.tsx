import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import {useMemo} from 'react'
import Page from './Page.tsx'
import useDark from './useDark.ts'

export default function App() {
  const dark = useDark()
  const theme = useMemo(() => createTheme({palette: {mode: dark ? 'dark' : 'light'}}), [dark])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Page/>
    </ThemeProvider>
  )
}
