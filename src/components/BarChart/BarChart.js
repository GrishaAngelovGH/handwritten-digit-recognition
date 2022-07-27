import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'
ChartJS.register(...registerables)

const BarChart = ({ data }) => {
  const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  return (
    <Bar
      data={{
        labels,
        datasets: [{
          label: 'Prediction',
          backgroundColor: 'dodgerblue',
          data: data
        }]
      }}
    />
  )
}

export default BarChart