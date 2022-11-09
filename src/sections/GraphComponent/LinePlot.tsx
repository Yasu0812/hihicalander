import { Line } from 'react-chartjs-2'
import { getDropRateData } from '../../logic/Util'
import { Typography } from '@mui/material';
import { Chart as ChartJS, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler } from 'chart.js';
ChartJS.register(Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler);


export const LinePlot = (props: { title: string, latestNum: number }) => {

    const data = {
        labels: [...Array(Math.max(200, props.latestNum))].map((v, i) => i),
        datasets: [
            {
                label: 'Expected',
                borderColor: 'rgb(75, 192, 192)',
                data: getDropRateData(),
                pointRadius: 0,
            },
            {
                label: 'drop',
                drawActiveElementsOnTop: true,
                fill: true,
                borderColor: 'rgb(238, 215, 23)',
                backgroundColor: 'rgba(238, 215, 23, 0.5)',
                data: getDropRateData().slice(0, props.latestNum),
                pointRadius: 0,

            }
        ]
    }

    return (
        <div>
            <Typography>{props.title}</Typography>
            <Line data={data}
            />
        </div>
    )
}