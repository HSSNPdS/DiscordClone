import React from 'react';

import {
    Container,
    HashtagIcon,
    Title,
    Separator,
    Description,
 } from './styles';

//Exportação em typescript
const ChannelInfo: React.FC = () => { 
    return(
        <Container>
            <HashtagIcon/>

            <Title>geral</Title>

            <Separator/>
            
            <Description>ODE É AMOR!</Description>
        </Container>
    );
};

export default ChannelInfo;