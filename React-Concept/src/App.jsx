
import Parent from './Components/Parent'
import Welcome from './Components/Welcome'
import WelcomeMessage from './Components/WelcomeMessage'


function App() {
  const user = "Fatemeh Motamed"
 

  return (
    <>
      <h1>React Concept</h1>
      <Welcome >
        <WelcomeMessage user={user} />
      </Welcome>
      <Parent />

    </>
  )
}

export default App
