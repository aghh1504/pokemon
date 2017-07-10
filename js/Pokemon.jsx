import React from 'react';
import MorePokeInfo from './MorePokeInfo.jsx';

export default class Pokemon extends React.Component {
    state = {
        pokemonSprite: []
    };
    componentDidMount() {
        fetch(this.props.details.url)
          .then(response => response.json())
            .then(data => {
              this.setState({pokemonSprite: this.state.pokemonSprite.concat(data)});
          });
    }
    renderSprite = () => {
        return this.state.pokemonSprite.map((a, index) => {
            return (
                <div key={index}>
                    <img src={a.sprites.front_default}/>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
            {this.renderSprite()}
            <MorePokeInfo details={this.props.details}/>
        </div>;)
    }
}
