import './App.css'

function App() {
  
  return (
    <>
    <Text display={"Hello"}/>
    <Text display={"whats up"}/>
    </>
  )
}

function Text({display}){
  return (
    <div>
      <h1>{display}</h1>
    </div>
  )
}

export default App
