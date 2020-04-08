import React , { useState }from 'react'
import EditTache from './forms/EditTache'
import AddNewTache from './forms/AddNewTache'
import ListeTache from './listes/ListeTache'
const App = () => {
  const tachesData = [
    { id: 1, name: 'Tache 1'},
    { id: 2, name: 'Tache 2'},
    { id: 3, name: 'Tache 3'},
  ]

  const [taches, setTaches] = useState(tachesData)

  const addTache = t => {
    t.id = taches.length + 1
    setTaches([...taches, t])
  }
  const deleteTache = id => {
    setTaches(taches.filter(e => e.id !== id))
  }
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: ''}
  const [currentTache, setCurrentTache] = useState(initialFormState)
  const editRow = e => {
    setEditing(true)
  
    setCurrentTache({ id: e.id, name: e.name})
  }
  const updateTache = (id, updatedTache) => {
    setEditing(false)
  
    setTaches(taches.map(e => (e.id === id ? updatedTache : e)))
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <div className="flex-row">
      <div className="flex-large">
  {editing ? (
    <div>
      <h2>Edit</h2>
      <EditTache setEditing={setEditing}
      currentTache={currentTache}
      updateTache={updateTache}/>
       </div>
  ) : (
    <div>
      <h2>Ajouter une Tache</h2>
      <AddNewTache addT={addTache} />
    </div>
  )}
</div>
        <div className="flex-large">
          <h2>Afficher liste des taches</h2>
          <ListeTache tt={taches} editRow={editRow} deleteTache={deleteTache} />
        </div>
      </div>
    </div>
  )
}

export default App;