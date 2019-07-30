import React from 'react'

function Todos(props:any) {
   console.log("=====" , props)
   return (
      <div>
         {
            props.todos.map((item:any, index: number) => <h2 key={index}>{item.text}</h2>)
         }
      </div>)
}

export default Todos