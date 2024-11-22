import { useEffect, useState } from 'react'
import './style.css'
import Trash from '../../assets/trash.png'
import api from '../../../services/api'

function Home() {
  const [users, setUsers] = useState([])

  async function getUsers(){
   const usersFromApi = await api.get('/usuarios')

   setUsers(usersFromApi.data)
  }

  useEffect(() => {
    getUsers()
  }, [])
  

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='nome' type='text' />
        <input placeholder='Idade' name='idade' type='number' />
        <input placeholder='Email' name='email' type='email' />
        <button type='button'>Cadastro</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      )

      )}

    </div>
  )
}

export default Home
