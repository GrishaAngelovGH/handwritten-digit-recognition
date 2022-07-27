import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const DigitRecognition = () => {
  return (
    <div className="row g-0 justify-content-center">
      <h1 className="bg-primary text-white rounded p-2 text-center">Handwritten Digit Recognition with Tensorflow.js</h1>

      <div className="col-md-10">
        <div className="row">
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default DigitRecognition