import React from 'react';
import { BlueBoxes } from '../logic/BlueBox';
import { LinePlot } from './GraphComponent/LinePlot';
import Grid from '@mui/material/Unstable_Grid2';

const LineGraph = (props: { blueBoxes: BlueBoxes }) => {

    const latestsum:number = props.blueBoxes.getLatestHihi().reduce((sum, element) => sum + element, 0)

    return (
        <>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <LinePlot title="Cumulative Distribution" latestNum={latestsum} />
                </Grid>
            </Grid>
        </>
    );
}

export default LineGraph;