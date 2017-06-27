import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    }
  }

  onChangeType(type) {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  findPets() {
    const type = this.state.filters.type
    var url = '/api/pets'
    if (type !== 'all') {
      url = '/api/pets' + '?type=' + type
    }
    this.setState({
      pets: fetch(url)
    })
  }

  onAdoptPet(id) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                filters={this.state.filters}
                onChangeType={this.onChangeType.bind(this)}
                onFindPetsClick={this.findPets.bind(this)}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet.bind(this)}
                adoptedPets={this.adoptPets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App