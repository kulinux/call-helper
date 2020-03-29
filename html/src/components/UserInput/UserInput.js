import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, TextField, DialogActions } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



function SimpleTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(props.rows || []).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



const SignupSchema = Yup.object().shape({
    q: Yup.string()
      .required('Required'),
  });

class Basic extends React.Component { 
    constructor(props) 
    { 
      super(props); 
      this.state = { attribute : "value" }; 
    } 

    render() {
      return (
        <div>
          <h1>Any place in your app!</h1>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
                fetch('/api/search?q=' + values.q)
                .then(res => res.json())
                .then((data) => {
                    setSubmitting(false);
                    this.setState({rows: data.result})
                });
            }}
          >
            {({
              errors,
              isSubmitting,
              touched,
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
              <form onSubmit={handleSubmit}>
                <TextField id="q" 
                  name="q"
                  label="Query" 
                  helperText={errors.q}
                  onChange={handleChange}
                  onBlur={handleBlur}/>

                  <Button variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting}>
                    Submit
                  </Button>
              </form>
            )}
          </Formik>
          <SimpleTable rows={this.state.rows}/>
        </div>
      );
    }


  } 
  


function UserInput(props) {
    return <div>
        <Basic/>
    </div>
}

export default UserInput;