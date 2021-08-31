import RoomIcon from '@material-ui/icons/Room';
import ListIcon from '@material-ui/icons/List';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '2.2rem',
  },
});

const MapToggleButton = ({alignment, handleAlignment}) => {
  const classes = useStyles();

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      className={classes.root}
    >
      <ToggleButton value="left" aria-label="left aligned">
        <ListIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <RoomIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default MapToggleButton;