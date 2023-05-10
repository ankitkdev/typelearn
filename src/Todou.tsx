import React, { useState } from 'react'

function Todou() {
    const [todo, setTodo] = useState('')
    const [todolist, setTodolist] = useState<string[]>([])

    const addTodo = () => {
        setTodolist([...todolist, todo])
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setTodo(e.target.value);
    }
    return (
        <div>
            <input
                type='text'
                placeholder='type todo'
                value={todo}
                onChange={(e) => handleChange(e)} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {
                    todolist.map(item => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todou