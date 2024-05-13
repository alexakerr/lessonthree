import React, { useState, useEffect } from 'react';
import { ListGroup, Container } from 'react-bootstrap';

function OrderList(props) {
    // grab characterId from props
    const { characterId } = props;
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        // make an API call with the characterId to get the character info
        const fetchCharacterData = async (characterId) => {
            // Fake data from a fake API call below
            console.log('In the useEffect!');
            let fetchedCharacters = [];
            console.log(characterId);
            if (characterId === 1) {
                fetchedCharacters = [
                    { id: 100, name: 'Iron Man' },
                    { id: 101, name: 'Captain America' },
                    { id: 102, name: 'Thor' },
                ];
            } else if (characterId === 2) {
                fetchedCharacters = [
                    { id: 103, name: 'Hulk' },
                    { id: 104, name: 'Black Widow' },
                    { id: 105, name: 'Hawkeye' },
                ];
            } else if (characterId === 3) {
                fetchedCharacters = [
                    { id: 106, name: 'Spider-Man' },
                    { id: 107, name: 'Black Panther' },
                    { id: 108, name: 'Doctor Strange' },
                ];
            }
            console.log(fetchedCharacters);
            setCharacters(fetchedCharacters);
        };
        
        fetchCharacterData(characterId);
        
    }, [characterId]);
    
    
    return (
        <Container fluid className='text-center'>
            <h2>Your Characters</h2>
            <ListGroup className="border rounded mx-auto my-4 w-50" defaultActiveKey="#link1">
               {characters.map(character => (
                    <ListGroup.Item key={character.id} className="d-flex justify-content-around align-items-center p-4" action>
                        Character ID: {character.id} Name: {character.name}  
                    </ListGroup.Item>
               ))}
            </ListGroup>
        </Container>
    );
}

export default OrderList;
