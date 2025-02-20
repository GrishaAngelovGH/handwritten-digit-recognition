import { useState, useEffect, useRef } from 'react'

import { processCanvas, model } from 'tensorflow'

import './Canvas.css'

const Canvas = ({ width, height, onProcess, onClear }) => {
  const [isDraw, setIsDraw] = useState(false)
  const canvasRef = useRef()
  const ctxRef = useRef()

  // last known position
  const pos = { x: 0, y: 0 }

  const setPosition = useRef(({ clientX, clientY }) => {
    pos.x = clientX - canvasRef.current.offsetLeft
    pos.y = clientY - canvasRef.current.offsetTop
  })

  const draw = useRef((e) => {
    // mouse left button must be pressed
    if (e.buttons !== 1) return
    setIsDraw(true)

    ctxRef.current.beginPath() // begin

    ctxRef.current.lineWidth = 10
    ctxRef.current.lineCap = 'round'
    ctxRef.current.strokeStyle = 'dodgerblue'

    ctxRef.current.moveTo(pos.x, pos.y) // from
    setPosition.current(e)
    ctxRef.current.lineTo(pos.x, pos.y) // to

    ctxRef.current.stroke() // draw
  })

  const handleClear = () => {
    ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    setIsDraw(false)
    onClear()
  }

  const handleProcess = async () => {
    const tensor = processCanvas(canvasRef.current)
    const predictions = await model.predict(tensor).data()
    const results = Array.from(predictions)

    setIsDraw(false)
    onProcess(results)
  }

  useEffect(() => {
    ctxRef.current = canvasRef.current.getContext('2d')

    const currentSetPosition = setPosition.current
    const currentDraw = draw.current

    document.addEventListener('mousemove', currentDraw)
    document.addEventListener('mousedown', currentSetPosition)
    document.addEventListener('mouseenter', currentSetPosition)

    return () => {
      document.removeEventListener('mousemove', currentDraw)
      document.removeEventListener('mousedown', currentSetPosition)
      document.removeEventListener('mouseenter', currentSetPosition)
    }
  }, [])

  return (
    <div className='row justify-content-center'>
      <div className='col-md-10'>
        <div className='row text-center'>
          <div className='col-md-12'>
            <canvas ref={canvasRef} className='draw-canvas' width={width} height={height}></canvas>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <button disabled={!isDraw} className='btn btn-primary w-100 mt-1' onClick={handleProcess}><i className='bi bi-bar-chart-line h4'></i></button>
            <button className='btn btn-primary w-100 mt-1' onClick={handleClear}><i className='bi bi-arrow-clockwise h4'></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Canvas