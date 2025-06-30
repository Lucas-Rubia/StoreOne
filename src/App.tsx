import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { Router } from "./router/router"

export default function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="StoreOne-theme">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

