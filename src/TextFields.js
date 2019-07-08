import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    // flexWrap: 'wrap',
    position: 'relative'
  },
  textField: {
    //marginLeft: theme.spacing(1),
    //marginRight: theme.spacing(1),
    width: '30vw',
    position: 'relative',
    top: -20,
  },
  nameField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: '10vw',
    position: 'relative',
    top: 0,
  },
  div: {
    textAlign: 'center'
  },
  inner: {
    position: 'absolute'
}

}));

export default function TextFields(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    blog: 'Begin writing about your day...',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const keyPress = (e) => {
    if(e.keyCode === 13 && !e.shiftKey){
      props.addBlog(values.name, values.blog)
    }
  };
  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <div className={"outer"}>
          <div className={"inner"}>
            <TextField
              id="standard-dense"
              label="Name"
              className={clsx(classes.nameField, classes.dense)}
              onChange={handleChange('name')}
              margin="normal"
              placeholder="Enter text..."
            />
          </div>
          <div className={"inner"}>
            <TextField
              id="standard-multiline-flexible"
              label="Tell us about your day"
              multiline
              rowsMax="16"
              placeholder="Enter text..."
              onChange={handleChange('blog')}
              className={classes.textField}
              margin="normal"
              onKeyDown={keyPress}
            />
          </div>
        </div>
      </form>
      <button onClick={()=>props.addBlog(values.name, values.blog)}>
        Submit blog
      </button>
    </div>
  );
}