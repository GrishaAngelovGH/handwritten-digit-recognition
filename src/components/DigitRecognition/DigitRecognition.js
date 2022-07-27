import { useState } from 'react'

import Canvas from '../Canvas'
import BarChart from '../BarChart'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const DigitRecognition = () => {
  const [data, setData] = useState([])
  const [message, setMessage] = useState('')

  const handleDataChange = predictionData => {
    setData(predictionData)

    const max = Math.max(...predictionData)
    const maxIndex = predictionData.indexOf(max)

    setMessage(`Predicting you draw ${maxIndex} with ${Math.trunc(max * 100)}% confidence`)
  }

  const handleClear = () => {
    setData([])
    setMessage('')
  }

  return (
    <div className="row g-0 justify-content-center">
      <h1 className="bg-primary text-white rounded p-2 text-center">Handwritten Digit Recognition with Tensorflow.js</h1>

      <div className="col-md-10">
        <div className="row">
          <div className="col-md-4">
            <Canvas width={150} height={150} onProcess={handleDataChange} onClear={handleClear} />
          </div>

          <div className="col-md-8 bg-white rounded">
            <BarChart data={data} />
          </div>

          {message.length > 0 && (<h1 className="alert alert-success text-center mt-3">{message}</h1>)}

          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default DigitRecognition