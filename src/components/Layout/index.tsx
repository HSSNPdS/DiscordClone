import React from 'react';

import {Grid} from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';

//Exportação em typescript
const Layout: React.FC = () => { 
    return(
        <Grid>
            <ServerList/>
            <ServerName/>
        </Grid>
    );
};

export default Layout;