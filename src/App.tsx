import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button/Button";
import {defaultTheme} from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
    </ThemeProvider>
  )
}