import React from 'react';

import Macaco from '../../assets/macaco.jpg';

import {
    Container,
    Profile, 
    Avatar,
    UserData,
    Icons, 
    MicIcon, 
    HeadphoneIcon, 
    SettingsIcon,
} from './styles';

//Exportação em typescript
const UserInfo: React.FC = () => { 
    return(
        <Container>
           <Profile>
               <Avatar>
                   <img src={Macaco} alt="Macaco"/>
               </Avatar>
               <UserData>
                   <strong>Macaco</strong>
                   <span>#45245</span>
               </UserData>
           </Profile>

           <Icons>
               <MicIcon/>
               <HeadphoneIcon/>
               <SettingsIcon/>
           </Icons>
        </Container>
    );
};

export default UserInfo;