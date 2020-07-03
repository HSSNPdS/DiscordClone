import React from 'react';

import ServerButton from '../ServerButton';

import {Container, Separator} from './styles';

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome/>

            <Separator/>

            <ServerButton hasNotifications/>
            <ServerButton mentions={3}/>
            <ServerButton mentions={1}/>
            <ServerButton hasNotifications/>
            <ServerButton hasNotifications/>
            <ServerButton hasNotifications/>
            <ServerButton hasNotifications/>
            <ServerButton mentions={5}/>
        </Container>
    );
};

export default ServerList;