import React from 'react'
import {
    AppBar,
    Drawer,
    Button,
    TextField
} from '@material-ui/core'
import {useState} from 'react'
import './BottomBar.css'
//import Settings from './Settings'

const Style={

    padding:'.5em',
    backgroundColor:'black',
    position:'fixed',
    bottom:'0',
    right:'0',
    top:'auto',
    display:'flex',
    alignItems:'center'
}
/*
const btn=
{

    border:'solid white',
    color:'white',
    textTransform:'none'
}
const layout=
{
    height:'6em',
    display:'grid',
    gridTemplateColumns:'2fr 1fr 1fr',
    margin: '1em .4em'
}
*/

function BottomBar(props)
{
    const [ drawerState, setDrawer ] = useState(false);
    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setDrawer(!drawerState);
      };

    const [ itext, setText ]=useState('')
    const handleChange=(e)=>
    {
        const { name, value } = e.target
        setText(value)
    }

    const handleSubmit=()=>
    {
        if(itext)
        {
            props.getIngredients(itext)//send to parent
        }
        setText('')
        setDrawer(false)
    }
    return(
        <div>
            <AppBar style={Style}>
            <Button className='btn' onClick={toggleDrawer(true)}>Settings</Button>
            <Drawer anchor="bottom" open={drawerState} onClose={toggleDrawer(false)}>
                <div className='layout'>
                <TextField
                    label='Ingredients' 
                    variant='outlined'
                    multiline
                    rows='2'
                    value={itext}
                    onChange={handleChange}
                    name='itext'
                    autoFocus
                />
                <p style={{textAlign:'center'}}>...</p>
                <Button className='load' onClick={handleSubmit}>
                    Load
                </Button>
                </div>

            </Drawer>
            </AppBar >
        </div>
    )
}
export default BottomBar