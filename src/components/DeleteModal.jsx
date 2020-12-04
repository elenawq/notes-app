import React from 'react'
import {Delete, Text, Buttons, DeleteNote, CheckButton} from './styled-components/DeleteModal.styles'
import { darkenColor } from './utils/darkenColor'
import { useDeleteTodo } from './useFetchTodos'
export const DeleteModal = ({ setAllNotes, color, setShowModal, id, notes, setList, list }) => {
  const { deleteTodo } = useDeleteTodo(id)
  const deleteNote = () => {
    deleteTodo(id)
   // const deleteN = list.filter(elem =>  elem.id !== id )
   // setList(deleteN)
  }
  return (
    <Delete color={color} id='modalContainer'>
      <Text style={() => darkenColor(color, -50)}>
        Are you sure you want to delete this note?
      </Text>
      <Buttons id='buttons'>
        <DeleteNote style={() => darkenColor(color, -50)} onClick={() => setShowModal(false)}/>
        <CheckButton style={() => darkenColor(color, -50)} onClick={deleteNote} />
      </Buttons>
    </Delete>
  )
}
