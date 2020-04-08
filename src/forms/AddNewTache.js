import React, { useState } from 'react'

const AddNewTache = props => {
  const initialFormState = { id: null, name: ''}
  const [tache, setTache] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setTache({ ...tache, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!tache.name) return

        props.addT(tache)
        setTache(initialFormState)
      }}
    >
      <input placeholder="Tache" type="text" name="name" value={tache.name} onChange={handleInputChange} />
      <button>Add Tache</button>
    </form>
  )
}

export default AddNewTache;