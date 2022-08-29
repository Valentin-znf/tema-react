import React from "react";
import{Button, Grid} from "@mui/material";
import { useState } from "react"

export function Counter() {
    const [value, setValue] = useState(0);

    const handleIncreaseValue = () => {
        setValue(value+1 );
    };
const handleDescreaseValue = () =>{
    if (value > 0) {
        setValue(value - 1);
    }

};
    return (
        <Grid>
            <button onClick={handleIncreaseValue}>+</button>
            <h2>{value}</h2>
            <button onClick={handleDescreaseValue}>-</button>
        </Grid>
    );
}