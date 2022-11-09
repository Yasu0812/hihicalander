import React from 'react';
import eikanImg from '../images/eikan.svg'
import hagyouImg from '../images/hagyou.svg'
import shigokuImg from '../images/shigoku.svg'
import hihiImg from '../images/hihi.svg'
import BlueBoxButton from './BlueBoxButton';
import { getDateStr } from '../logic/Util';
import { BlueBoxes } from '../logic/BlueBox';
import { getShiftDate } from '../logic/Util';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from '@mui/material/Typography';

function ButtonAndCount(props: {
    writeLocal: (data: BlueBoxes) => void
    blueBoxes: BlueBoxes
    setBlueBoxes: (blueBoxes: BlueBoxes) => void
    showDate: Date
    setShowDate: React.Dispatch<React.SetStateAction<Date>>
}) {

    const { year, month, day } = getDateStr(props.showDate)

    const blueBoxes = props.blueBoxes

    const today = { name: "Day", "data": blueBoxes.getTotalOfDay(year, month, day) }
    const thisMonth = { name: "Month", "data": blueBoxes.getTotalOfMonth(year, month) }
    const thisYear = { name: "Year", "data": blueBoxes.getTotalOfYear(year) }
    const total = { name: "Total", "data": blueBoxes.getTotalOfAll() }
    const latest = { name: "Latest", "data": blueBoxes.getLatestHihi() }

    const rows = [today, thisMonth, thisYear, total, latest]

    const addBlueBox = (dropItem: number) => {
        const { year, month, day } = getDateStr()
        const newBlueBoxes = blueBoxes.copy()
        newBlueBoxes.getDropListOfDay(year, month, day).push(dropItem)

        props.writeLocal(newBlueBoxes)
        props.setBlueBoxes(newBlueBoxes)
        props.setShowDate(new Date())

    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell>
                            <Typography>
                                <IconButton onClick={() => { props.setShowDate((n) => getShiftDate(n, -1)) }}>
                                    <NavigateBeforeIcon />
                                </IconButton>
                                {year}/{month}/{day}
                                <IconButton onClick={() => { props.setShowDate((n) => getShiftDate(n, 1)) }}>
                                    <NavigateNextIcon />
                                </IconButton>
                            </Typography>
                        </TableCell>
                        <TableCell align="right" padding="none"><BlueBoxButton name="栄冠" img={eikanImg} addBlueBox={addBlueBox} itemId={0} /></TableCell>
                        <TableCell align="right" padding="none"><BlueBoxButton name="覇業" img={hagyouImg} addBlueBox={addBlueBox} itemId={1} /></TableCell>
                        <TableCell align="right" padding="none"><BlueBoxButton name="至極" img={shigokuImg} addBlueBox={addBlueBox} itemId={2} /></TableCell>
                        <TableCell align="right" padding="none"><BlueBoxButton name="ヒヒイロカネ" img={hihiImg} addBlueBox={addBlueBox} itemId={3} /></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" >
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.data[0]}</TableCell>
                            <TableCell align="right">{row.data[1]}</TableCell>
                            <TableCell align="right">{row.data[2]}</TableCell>
                            <TableCell align="right">{row.data[3]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ButtonAndCount;