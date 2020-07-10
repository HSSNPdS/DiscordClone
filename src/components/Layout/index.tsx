import React from 'react';

import {Grid} from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import ChannelButton from '../ChannelButton';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';

//Exportação em typescript
const Layout: React.FC = () => { 
    return(
        <Grid>
            <ServerList/>
            <ServerName/>
            <ChannelInfo/>
            <ChannelList/>
            <ChannelData/>
            <UserInfo/>
            <div/>
            <UserList/>
        </Grid>
    );
};

export default Layout;