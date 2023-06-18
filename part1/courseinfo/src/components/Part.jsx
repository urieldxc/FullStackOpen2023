import React from 'react'

const Part = ({part}) => {
  return (
    <div>
        <ul>
            <li>{part.name} - {part.exercises} exercises</li>
        </ul>
    </div>
  )
}

export default Part