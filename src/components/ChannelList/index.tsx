import React from 'react';

import ChannelButton from '../ChannelButton';

import {Container, Category, AddCategoryIcon} from './styles';

//Exportação em typescript
const ChannelList: React.FC = () => { 
    return(
        <Container>
            <Category>
                <span>geral</span>
                <AddCategoryIcon/>
            </Category>
            <ChannelButton channelName="chat-geral"/>
            <ChannelButton channelName="vapovapo"/>
            <ChannelButton channelName="tomatoma"/>
            <ChannelButton channelName="morrer"/>
            <ChannelButton channelName="dor"/>
            <ChannelButton channelName="dormir"/>
            <ChannelButton channelName="jogo"/>
        </Container>
    );
};

export default ChannelList;