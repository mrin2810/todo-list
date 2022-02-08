import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// add
// toggle
// delete

const GET_TODOS = gql`
query fetchTodos {
  Todos_Mrin_todos {
    done
    id
    text
  }
}`

function App() {
  const {data, loading, error} = useQuery(GET_TODOS);
  if(loading) return (<div>Loading...</div>)
  if(error) return (<div>Error Fetching Data</div>)
  // console.log(data.Todos_Mrin_todos);
  return (
    <div className='vh-100 code flex flex-column items-center bg-purple white pa3 fl-1'>
      <h1 className='f2-l'>
        GraphQL Checklist
        {" "}<span role='img' aria-label='Checkmark'>✅</span>
      </h1>
      {/* Todo Form */}
      <form className='mb3'>
        <input
          className='pa2 f4 b--dashed'
          type='text'
          placeholder='Things ToDo'
        />
        <button
          className='pa2 f4 bg-green' 
          type='Submit'
        >Create</button>
      </form>
      <div className='flex items-center justify-center flex-column'>
        {data.Todos_Mrin_todos.map( (todo, id) => (
          <p key={id}>
            <span className='pointer pa1 list f3'>{todo.text}</span>
            <button className='bg-transparent bn f4'><span className='red'>&times;</span></button>
          </p>
        ))}
      </div>
    </div>  
  );
}

export default App;
