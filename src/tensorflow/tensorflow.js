import * as tf from '@tensorflow/tfjs'
import { toast } from 'react-toastify'

export let model

const loadModel = async () => {
  toast.success('Data model is loading...')

  model = undefined
  model = await tf.loadLayersModel('models/model.json')

  toast.success('Data model is successfully loaded')
}

export const processCanvas = canvas => {
  // resize the input image to target size of (1, 28, 28)
  const tensor = tf.browser.fromPixels(canvas)
    .resizeNearestNeighbor([28, 28])
    .mean(2)
    .expandDims(2)
    .expandDims()
    .toFloat()

  return tensor.div(255.0)
}

loadModel()