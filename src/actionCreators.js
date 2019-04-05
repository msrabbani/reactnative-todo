export const getTodos=()=>(
    dispatch => (
        fetch('http://localhost:3000/todos', {
            headers: {
                'Accept': 'applications/json'
            }
        })
        .then(res => res.json())
        .then(todos => dispatch({
            type: 'GET_TODOS',
            payload: todos
        }))
    )
)

export const createTodos=()=>(
    dispatch => (
        fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type':'applications/json'
                'Accept': 'applications/json'
            },
            body:JSON.stringify(todo)
        })
        .then(res => res.json())
        .then(todos => dispatch({
            type: 'CREATE_TODO',
            payload: todos
        }))
    )
)
