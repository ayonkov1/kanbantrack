import React from 'react'

const Column = ({ columnName, children }) => {
    return (
        <div className="column">
            <h3>{columnName}</h3>
            <div>{children}</div>
        </div>
    )
}

export default Column
