import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ListGroup, Button, Container } from 'react-bootstrap'; 

import '../App.css'; 

import OrderList from './OrderList';
import NavBar from './NavBar';

export class CharacterList extends Component {
   
    constructor(){
        super();
        this.state = {
            characters: [],
            selectedCharacterId: null,
        }
        this.selectCharacter = this.selectCharacter.bind(this); 
    }

    componentDidMount(){
       
        const fetchedCharacters = [
            { id: 1, name: 'Edwin'},
            { id: 2, name: 'Alexa'},
            { id: 3, name: 'Mary'}
        ]
       
        this.setState({ characters: fetchedCharacters })
    }
    
    
  
    selectCharacter =  (id) => {
        console.log(id)
        this.setState({ selectedCharacterId: id })
  
    }
    
  
    componentWillUnmount(){
       
        console.log('CharacterList Component is being unmounted')
    }
    
    
  render() {
    
    const myCharacters = this.state.characters
    return (
        <div>
        <NavBar />
            <ListGroup className="border rounded mx-auto my-4 w-50" defaultActiveKey="#link1">
               {myCharacters.map( character  => (
                <ListGroup.Item className="d-flex justify-content-around align-items-center"action onClick={() => this.selectCharacter(character.id)}>
                    {character.name}
                    <Button className='ms-4 w-50' as={Link} to={`../edit-character/${character.id}`} variant='outline-success'>Edit</Button>
                </ListGroup.Item>
               ))}
            </ListGroup>
            { this.state.selectedCharacterId &&
                <Container fluid className='d-flex flex-column align-items-center'>
                    <h2>Selected Character: {this.state.selectedCharacterId}</h2> 
                    <OrderList characterId={this.state.selectedCharacterId} />
                </Container>
            }
      </div>
    )
  }
}


export default CharacterList

