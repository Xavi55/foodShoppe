import React, { useState } from 'react';
import { Typography, Slider } from '@material-ui/core';
import { getThemeProps } from '@material-ui/styles';
const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 20,
    label: '200',
  },
  {
    value: 60,
    label: '600',
  },
  {
    value: 100,
    label: 'Any',
  },
];

export default function VertSlider(props) {
const handleChange=(event,value)=>
{
  props.setCalories(value)//send the calories upwards
}

  return (
    <div>
      <Typography style={{textAlign:'center'}} gutterBottom>
        Calories
      </Typography>
      <div style={{margin:'.2em'}}>
        <Slider
          value={props.currCalories}
          onChange={handleChange}
          marks={marks}
        />
      </div>
      {/*<p>{value}</p>*/}
    </div>
  );
}