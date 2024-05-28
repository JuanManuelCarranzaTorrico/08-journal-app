import { AddOutlined, MailOutline } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'

export const JournalPage = () => {
  const { isSaving, active } = useSelector(state => state.jornal )
  const dispatch = useDispatch();
  const onClickAddNewNote = () => {
    dispatch( startNewNote() );
  }
  return (
    <JournalLayout>
      {
        active
        ? <NoteView/>
        :
      <NothingSelectedView/>
      }
      {/* <NoteView/> */}
      <IconButton
      onClick={onClickAddNewNote}
      disabled={isSaving}
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': { backgroundColor: 'error.main', opacity: 0.8},
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}
