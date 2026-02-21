import useSwitch from "../hooks/useSwitch";

function App() {

  const { isOn, toggle } = useSwitch();

  return (
    <>
      <h1>Custom Hooks</h1>

      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
    </>
  )
}

export default App
