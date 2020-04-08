import React from 'react'
const ListeTache = (props)=>(
    <table>
      <thead>
        <tr>
          <th>Taches</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {props.tt.length > 0 ? (
          props.tt.map(e => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>
                  <button onClick={() => {props.editRow(e)}}className="button muted-button">Edit</button>
                <button onClick={() => props.deleteTache(e.id)} className="button muted-button">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  )
export default ListeTache;