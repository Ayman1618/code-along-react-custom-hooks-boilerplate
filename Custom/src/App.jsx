import './App.css'
import useStorage from './hooks/useCustom'

function App(){

  const { setStorage } = useStorage()

  return(
    <div>
      <h1>Custom Hooks</h1>
        <input type="text" placeholder='Enter data' onChange={(e)=> 
        setStorage(e.target.value)} />
    </div>
  )
}

export default App