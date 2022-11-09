import { Button } from '@mui/material';
import React from 'react';

function BlueBoxButton(props: { name: string, img: string, addBlueBox: (dropItem: number) => void, itemId: number }) {

    const onclick = (e: React.MouseEvent) => {
        props.addBlueBox(props.itemId)
    }

    return (
        <Button onClick={onclick} >
            <img src={props.img} width="100%" height="100%"/>
        </Button>
    );
}

export default BlueBoxButton;