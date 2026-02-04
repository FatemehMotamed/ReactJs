import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import HomePage from "./components/HomePage"

import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Routes, Route } from "react-router-dom"
import Users from "./components/Users"


function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>

      {/* <HomePage />
      <ReactQueryDevtools /> */}


      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/users" element = {<Users />} />
      </Routes>

      <ReactQueryDevtools /> 

    </QueryClientProvider>
  )
}

export default App
