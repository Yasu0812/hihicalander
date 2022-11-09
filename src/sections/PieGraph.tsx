import React from 'react';
import { BlueBoxes } from '../logic/BlueBox';
import { PiePlot } from './GraphComponent/PiePlot';
import { getDateStr } from '../logic/Util'
import Grid from '@mui/material/Unstable_Grid2';

const PieGraph = (props: {
    blueBoxes: BlueBoxes
    showDate: Date
}) => {

    const { year, month, day } = getDateStr(props.showDate)

    return (
        <>
            <Grid container spacing={2}>
                <Grid xs={3}>
                    <PiePlot title="Month" dropList={props.blueBoxes.getTotalOfMonth(year, month)} />
                </Grid>
                <Grid xs={3}>
                    <PiePlot title="Year" dropList={props.blueBoxes.getTotalOfYear(year)} />
                </Grid>
                <Grid xs={3}>
                    <PiePlot title="Total" dropList={props.blueBoxes.getTotalOfAll()} />
                </Grid>
                <Grid xs={3}>
                    <PiePlot title="Latest" dropList={props.blueBoxes.getLatestHihi()} />
                </Grid>
            </Grid>
        </>
    );
}

export default PieGraph;