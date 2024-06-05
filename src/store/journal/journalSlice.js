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
   setPhotosToActiveNote: (state, action) => {
    state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
    state.isSaving = false;
   },
   deleteNoteById: (state, action) => {
    state.active = null;
    state.notes = state.notes.filter( note => note.id !== action.payload);
   },
   clearNotesLogout : (state) => {
     state.notes = [];
     state.active = null;
     state.isSaving = false;
      state.savedMessage = '';
   }
}
});
export const { 
  increment, 
  addNewEmptyNote, 
  setActiveNote, 
  setNotes, 
  setSaving, 
  noteUpdated, 
  deleteNoteById, 
  savingNewNote,
  setPhotosToActiveNote,
  clearNotesLogout
} = journalSlice.actions;