import React, { useState } from 'react'

const EditTache = props => {
  const [tache, setTache] = useState(props.currentTache)

  const handleInputChange = event => {
    const { name, value } = event.target

    setTache({ ...tache, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateTache(tache.id, tache)
      }}
    >
      <input placeholder="Tache" type="text" name="name" value={tache.name} onChange={handleInputChange} />
      <button>Update Tache</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditTache;