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
   },
   setNotes: (state, action) => {

   },
   setSaving: (state, action) => {

   },
   updateNote: (state, action) => {

   },
   deleteNote: (state, action) => {

   },
}
});
export const { increment, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNote, savingNewNote } = journalSlice.actions;