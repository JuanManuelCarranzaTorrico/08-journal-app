import { createSlice } from '@reduxjs/toolkit';
import { set } from 'firebase/database';
export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
      isSaving: false,
      savedMessage: '',
      notes: [],
      active: null,
      
  },
  reducers: {
    savingNewNote: (state, action) => {
      state.isSaving = true;
    },
   addNewEmptyNote: (state, action ) =>{
    state.notes.push( action.payload );
    state.isSaving = false;
   },
   setActiveNote: (state, action) => {
    state.active = action.payload;
    state.savedMessage = '';
   },
   setNotes: (state, action) => {
    state.notes = action.payload;

   },
   setSaving: (state, action) => {
    state.savedMessage = '';
    state.isSaving = true;
    // todo mensage de error

   },
   noteUpdated: (state, action) => {
    state.isSaving = false;
    state.notes = state.notes.map( note => {
      if( note.id === action.payload.id){
        return action.payload;
      }
      return note;
    });

    state.savedMessage = `${action.payload.title} actualizado con exito!`

   },
   deleteNote: (state, action) => {

   },
}
});
export const { increment, addNewEmptyNote, setActiveNote, setNotes, setSaving, noteUpdated, deleteNote, savingNewNote } = journalSlice.actions;