import React from 'react'
import {
    AppBar,
    Drawer,
    Button,
    TextField
} from '@material-ui/core'
import {useState} from 'react'
//import Settings from './Settings'

const Style={

    padding:'.5em',
    backgroundColor:'black',
    position:'fixed',
    bottom:'0',
    right:'0',
    top:'auto',
    display:'flex',
    'align-items':'center'
}
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
    'grid-template-columns':'2fr 1fr 1fr ',
    margin: '1em .4em'
}

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
        props.getIngredients(itext)//send to parent
        setText('')
        setDrawer(false)
    }
    return(
        <div>
            <AppBar style={Style}>
            <Button style={btn} onClick={toggleDrawer(true)}>Settings</Button>
            <Drawer anchor="bottom" open={drawerState} onClose={toggleDrawer(false)}>
                <div style={layout}>
                <TextField
                    label='Ingredients' 
                    variant='outlined'
                    multiline
                    rows='2'
                    value={itext}
                    onChange={handleChange}
                    name='itext'
                />
                <p style={{textAlign:'center'}}>...</p>
                <Button onClick={handleSubmit}>
                    Load
                </Button>
                </div>

            </Drawer>
            </AppBar >
        </div>
    )
}
export default BottomBar