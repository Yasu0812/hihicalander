import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Typography } from '@mui/material';
ChartJS.register(ArcElement, Tooltip, Legend);


export const PiePlot = (props: { title: string, dropList: number[] }) => {

    const data = {

        datasets: [
            {
                data: props.dropList,
                backgroundColor: ["#a9a9a9", "#444444", "#dd0000", "#ffd700"],
                borderColor: ["transparent", "transparent", "transparent", "transparent"]
            }
        ]
    }

    return (
        <>
            <Typography>{props.title}</Typography>
            <div>
                <Pie data={data}
                    options={{ maintainAspectRatio: false }} />
            </div>
        </>
    )
}