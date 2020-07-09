import React from 'react';

import {Container, Role, User, Avatar} from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>

            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    )
};

const UserList: React.FC = () => { 
    return(
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Bugio branco"/>
            <UserRow nickname="Bonobo"/>
            <UserRow nickname="Chimpanzé"/>
            <UserRow nickname="Gorila"/>
            <UserRow nickname="Macaco"/>
            <UserRow nickname="Mico dourado"/>
            <UserRow nickname="Uacari marrom"/>
            <UserRow nickname="Macaco da noite"/>
            <UserRow nickname="Macaco prego"/>
            <UserRow nickname="Roberto"/>
            
            <Role>Offline - 10</Role>
            <UserRow nickname="Babuíno"/>
            <UserRow nickname="Bugio preto"/>
            <UserRow nickname="Macaco esquilo"/>
            <UserRow nickname="Macaco japonês"/>
            <UserRow nickname="Mandril"/>  
            <UserRow nickname="Narigudo"/>
            <UserRow nickname="Orangotango" isBot/>
        </Container>
    );
};

export default UserList;