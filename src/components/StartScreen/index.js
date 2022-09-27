import style from './style.module.css'
import USESWR from 'swr'
import axios from 'axios'

const index = () => {
  const QUERY = `
    query {
      songs {
        songs {
          image
          name
          author {name}
          description
        }
      }
    }
  `
  const fetcher = query => 
    axios
      .post('https://api-frontend-challenge.herokuapp.com/graphql', { query })
      .then(res => res.data)
      
  const { data } = USESWR(QUERY, fetcher)

  return (
    <div className={style.start}>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button>Começar a jogar</button>
      <pre>{JSON.stringify(data, null, 2)}</pre> 
    </div>
  )
}

export default index