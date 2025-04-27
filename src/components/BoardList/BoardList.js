import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBoard } from '../../features/board/boardSlice'
import Column from './Column'
import '../../styles/Kanban.css'

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
            {boards.map((board) => (
                <div key={board.id}>
                    <h3>{board.name}</h3>
                    <div className="board-layout">
                        <Column columnName="To Do"></Column>
                        <Column columnName="In Progress"></Column>
                        <Column columnName="Done"></Column>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BoardList
