import React,{useState} from 'react'
import { SketchPicker } from 'react-color'
import './style.css'

const App = () => {
  const [color,setColor] = useState("lightblue");
  const [hidden,setHidden] = useState(false)
 
  const pickerStyles = {
    default: {
      picker: {
        position: 'absolute',
        bottom: '30px',
        left: '100px'
      }
    }
  }

  return (
    <div style={{background: color}} className='App'>
      <div className='container'>
        {hidden && 
        <SketchPicker 
         styles={pickerStyles}
         color={color}
         onChange={(updatedColor)=> setColor(updatedColor.hex)}
        />
      }
        <button onClick={() => setHidden(!hidden)}>
          {hidden ? 'Close coler picker' : 'Open Color Picker'}
          </button>
      </div>
    </div>
  )
}

export default App