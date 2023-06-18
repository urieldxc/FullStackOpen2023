import React from 'react'

const Content = ({parts}) => {
    
    const total = parts.reduce((sum, el)=> {
        return sum + el.exercises
        
    }, 0)
    
  return (
    <div>
        {parts.map(part => <p key={part.id}>{part.name}: {part.exercises}</p>)}
        <p>Total of {total} exercises</p>
    </div>
  )
}

export default Content