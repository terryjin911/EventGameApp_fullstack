import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonUI from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

      margin: theme.spacing(2),
}
)
);

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonUI variant="contained" color="primary">
        START
      </ButtonUI>

    </div>
  );
}
