import React from 'react';
import styled from 'styled-components';
import CharacterInfos from './CharacterInfo';
import RoomDescription from './RoomDescription';
import MessageLog from './MessageLog';
import InputCommand from './InputCommand';


const GameControl = styled.div`
    width: 70%;
`

const GameInfomation = styled.div`
    width: 20%;
`

const Content = styled.div`
    display: flex;
    justify-content: space-around;
`

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Content className="container">
                <GameControl className="game-control">
                    <MessageLog/>
                    <InputCommand/>
                </GameControl>
                <GameInfomation className="game-information">
                    <CharacterInfos user={this.props.user}/>
                    <RoomDescription room={this.props.room}/>
                </GameInfomation>
            </Content>
         );
    }
}
 
export default Container;