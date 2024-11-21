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
  ]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' />
        <input name='idade' type='number' />
        <input name='email' type='email' />
        <button type='button'>Cadastro</button>
      </form>

      {users.map(user => (
        <div>
          <div>
            <p>Nome:</p>
            <p>Idade</p>
            <p>Email</p>
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
