import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      margin: '0 5px',
      marginTop: '-3px',
    },
    selectEmpty: {
      color: 'white'
    },
  }),
);

 /*eslint-disable*/
type Props = {
  subDomain?: string;
}

const SelectComponent = ({subDomain}: Props) => {
  const data = require(`../assets/${subDomain}/Database`);
  const classes = useStyles();

  const [state, setState] = useState<{ lang: string; }>({
    lang: 'en-us'
  });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const la = event.target.value as keyof typeof state;
    setState({ lang: la });
  };

  return (
    <div>      
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={state.lang}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <option value={'en-us'} style={{color: 'black'}}>ENGLISH</option>
          <option value={'en-ca'} style={{color: 'black'}}>CANADIAN</option>
        </NativeSelect>
      </FormControl>      
    </div>
  );
}

export default SelectComponent;
