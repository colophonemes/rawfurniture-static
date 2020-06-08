import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import { useForm } from '@statickit/react';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert'

export const getError = (field, fieldName, errors) => {
  const fieldErrors = errors.filter(error => error.field === field)
  if (fieldErrors.length) {
    const error = fieldErrors[0]
    return {
      error: true,
      helperText: `${fieldName} ${error.message}`
    }
  }
}


const nameErrors = errors => getError('name', 'Name', errors)
const emailErrors = errors => getError('email', 'Email address', errors)
const messageErrors = errors => getError('message', 'Message', errors)

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(6)
  },
  textArea: {
    minHeight: '4em'
  }
}))

const ContactForm = props => {
  const classes = useStyles()
  const [state, handleSubmit] = useForm('contact')
  const { submitting, succeeded, errors } = state
  if (succeeded) return <Alert severity='info'>Thanks for your email, we'll be in touch soon!</Alert>
  return <div className={classes.root}>
    <form onSubmit={handleSubmit} noValidate>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TextField label='Name' name='name' variant='filled' id='contact-form-name' fullWidth {...nameErrors(errors)} />
        </Grid>
        <Grid item xs={12}>
          <TextField label='Email address' name='email' variant='filled' id='contact-form-email' fullWidth {...emailErrors(errors)} />
        </Grid>
        <Grid item xs={12}>
          <TextField label='Message' name='message' variant='filled' id='contact-form-message' inputProps={{ className: classes.textArea }} multiline fullWidth {...messageErrors(errors)} />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Button variant='contained' color='primary' fullWidth type='submit' disabled={submitting}>Send</Button>
        </Grid>
      </Grid>
    </form>
  </div>
}

export default ContactForm
