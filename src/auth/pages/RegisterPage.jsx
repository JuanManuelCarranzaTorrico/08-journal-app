import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks"

const formData = {
  displayName: '',
  email: '',
  password: ''
}
const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [FormSubmitted, setFormSubmitted] = useState(false);
  const {status, errorMessage } = useSelector( state => state.auth);
  const isCheckingAuthentication = useMemo(()=> status === 'checking', [status]);

  const { 
    formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid
        } = useForm(formData, formValidations);


  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if(!isFormValid) return;
    console.log(formState);
    dispatch( startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title="Crear una cuenta">
      {/* <h1>FormValid {isFormValid? 'Valido' : 'incorrecto' }</h1> */}
        <form onSubmit={onSubmit}>
          <Grid container >
          <Grid item xs={12} sx={{mt: 2}}>
              <TextField
               label="Nombre completo" 
               type="text" 
               placeholder="Tu nombre" 
               fullWidth 
               value={displayName}
                name="displayName"
                onChange={onInputChange}
                error={!!displayNameValid && FormSubmitted}
                helperText={displayNameValid}
               />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
               label="Correo" 
               type="email" 
               placeholder="correo@google.com" 
               fullWidth 
               value={email}
                name="email"
                onChange={onInputChange}
                error={!!emailValid && FormSubmitted}
                helperText={emailValid}
                />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
               label="Contraseña" 
               type="password" 
               placeholder="contraseña" 
               fullWidth 
               value={password}
                name="password"
                onChange={onInputChange}
                error={!!passwordValid && FormSubmitted}
                helperText={passwordValid}
               />
            </Grid>
            <Grid 
            item 
            xs={12}
            display={!!errorMessage? '': 'none'}>
              <Alert severity="error">{ errorMessage }</Alert>
            </Grid>
            <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
              <Grid item xs={12} sm={12}>
                <Button variant="contained" fullWidth type="submit" disabled={isCheckingAuthentication}>
                   Crear cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction={"row"} justifyContent="end">
              <Link component={ RouterLink } color='inherit' to="/auth/login">
              Ya tengo una cuenta
              </Link>
            </Grid>
              
          </Grid>
          
          </form>
          </AuthLayout>

  )
}
