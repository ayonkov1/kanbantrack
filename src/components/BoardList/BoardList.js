import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBoard } from '../../features/board/boardSlice'

const BoardList = () => {
    const dispatch = useDispatch()
    const boards = useSelector((state) => {
        return state.board.boards
    })

    const handleAddBoard = () => {
        const newBoard = { id: Date.now(), name: `Board ${boards.length + 1}` }
        dispatch(addBoard(newBoard))
        console.log(boards)
    }

    return (
        <div>
            <h2>Boards</h2>
            <button onClick={handleAddBoard}>Add Board</button>
            <ul>
                {boards.map((board) => (
                    <li key={board.id}>{board.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default BoardList
