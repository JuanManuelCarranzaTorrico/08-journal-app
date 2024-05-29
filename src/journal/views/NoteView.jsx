import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { setActiveNote, startSaveNote } from "../../store/journal"
import Swal from "sweetalert2"


export const NoteView = () => {
    const dispatch = useDispatch();
    const { active:note, savedMessage, isSaving } = useSelector(state => state.jornal)
    const {body, title, onInputChange, formState, date} = useForm( note );
    const dateString = useMemo(()=>{
        const newDate = new Date(date)
        return newDate.toUTCString();
    }, [date])
    useEffect(()=>{
        dispatch( setActiveNote(formState))
    }, [formState])
    useEffect(() => {
        if(savedMessage.length > 0){
            Swal.fire({
                title: 'Guardado',
                text: savedMessage,
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }
      
    }, [savedMessage])
    

    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }
  return (
    <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{mb: 1}} className='animate__animated animate__fadeIn animate__faster'>
        <Grid item>
            <Typography fontSize={39} fontWeight={'light'}>{dateString}</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2 }} onClick={ onSaveNote } disabled={isSaving}>
                <SaveOutlined sx={{ fontSize:30, mr: 1}} />
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un titulo"
                label="Titulo"
                sx={{mb: 1, border: 'none'}}
                name="title"
                value={title}
                onChange={onInputChange}
                />
                <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="Que secedio hoy?"
                minRows={5}
                name="body"
                value={body}
                onChange={onInputChange}
                />
        </Grid>
        {/* Galeria de imagenes */}
        <ImageGalery/>
    </Grid>
  )
}
