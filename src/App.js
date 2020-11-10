import React from 'react'
import axios from 'axios'
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      monsters: [],
      error: '',
      searchTerm: ''
    }

  }

  searchHandler = (value) => {
    this.setState({
      searchTerm: value
    })
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      this.setState(() => {
        return {
          monsters: response.data
        }
      })
    } catch (error) {
      this.setState(() => {
        return {
          error: 'Unable to fetch data'
        }
      })
    }
  }

  render() {
    const { monsters, searchTerm } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
      <div className='App'>
        {this.state.error && <h3 class="error">{this.state.error}</h3>}
        <h2>Monsters Rolodex</h2>
        <SearchBox searchHandler={this.searchHandler} placeholder="Search Monsters" />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
