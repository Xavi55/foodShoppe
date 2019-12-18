import React from 'react'
import{
    Drawer,
    Button,
    List,
    Divider,
    ListItem,
} from '@material-ui/core'

function Bottom()
{
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

      const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };

    return(
        <div>
        <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button>
        <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
            inside
        </Drawer>
       
      </div>
    )
}
export default Bottom