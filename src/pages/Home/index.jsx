import './style.css'
import Trash from '../../assets/trash.png'

function Home() {
  const users = [
    {
      id: 'ladklldfjkal',
      name: 'Carlos',
      age: 49,
      email: 'car@email.com',
    },
    {
      id: 'ladklltyruyiouyio',
      name: 'Bia',
      age: 40,
      email: 'bia@email.com',
    },
    {
      id: 'xzcvvbcvyruyiouyio',
      name: 'Lusia',
      age: 45,
      email: 'Lusia@email.com',
    },
  ]

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
