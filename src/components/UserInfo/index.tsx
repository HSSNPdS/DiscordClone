import React from 'react';

import {Container, Title, ExpandIcon} from './styles';

//Exportação em typescript
const ServerName: React.FC = () => { 
    return(
        <Container>
            <Title>ODE</Title>

            <ExpandIcon/>
        </Container>
    );
};

export default ServerName;