import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="ui cards">
        {this.props.pets.map(p => 
          <Pet 
            pet={p} 
            onAdoptPet={this.props.onAdoptPet} 
            isAdopted={this.props.adoptedPets.includes(p.id)}
          />
        )}
     </div>
    )
  }
}

export default PetBrowser