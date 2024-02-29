import { useEffect, useState } from "react"
import './styles.css'


export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    function randomColorUtility(length) {
      return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColor() {
      //#678765
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
      let hexColor = "#"

      for(let i = 0; i < 6; i++){
        hexColor += hex[randomColorUtility(hex.length)]
      }

      setColor(hexColor)
      //console.log(hexColor)
    }

    function handleCreateRandomRgbColor() {
      const r = randomColorUtility(256)
      const g = randomColorUtility(256)
      const b = randomColorUtility(256)

      setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
      if(typeOfColor === 'rgb'){
        handleCreateRandomRgbColor()
      }else{
        handleCreateRandomHexColor()
      }
    }, [typeOfColor])

  return (
    <div style={{
        width: '100vw',
        height: '100vh',
        background: color,
    }}>
        <div className="btn-container">
          <button className="btn-1" onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
          <button className="btn-2" onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
          <button className="btn-3" onClick={typeOfColor === 'hex' ?
           handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>

          <div className="type-of-color">
            <h3> {typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
            <h1>{color}</h1> 
          </div>
        </div>
    </div>
  )
}
