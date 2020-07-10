import React, {useRef, useEffect} from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import {Container, Messages, InputWrapper, Input, InputIcon} from './styles';

//Exportação em typescript
const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

    return(
        <Container>
            <Messages>

            <ChannelMessage
            author="Macaco"
            date="09/07/2020"
            content="Hoje é o meu aniversário!"
            />

            <ChannelMessage
                author="Orangotango"
                date="09/07/2020"
                content={
                    <>
                    Parabéns <Mention>@Macaco</Mention> !!!
                    </>
                }
                hasMention
                isBot
            />

            <ChannelMessage
                author="Bugio branco"
                date="09/07/2020"
                content="eu quero praticar magia sexual mastubsrotria
                convencer as meninas a quererem me dar con a foça do pensamento"
            />

            <ChannelMessage
            author="Macaco"
            date="09/07/2020"
            content="?"
            />
            
            <ChannelMessage
                author="Gorila"
                date="09/07/2020"
                content="BATA BATA AGORA
                        PARA PORNOGRAFIA
                        NO XVIDEOS
                        E DEPOIS COMA MAIS BESTEIRAS
                        E SE PUSSIVEL FUMA E BEBA TAMBÉM"
            />

            <ChannelMessage
                author="Roberto"
                date="09/07/2020"
                content="EU fiquei triste quyando voce nao viu minha copypasta criada diretinho do forno e só foi ver varias horas depois eu acho que assim...
                um pouco de humor não faz mal em uma conversa mundana e ionformal como essa que temos diaraiamnete na ODE, porém contudo todavia no entanto pra
                tudo NÃO há limite e NÃO devemos respeita.,"
            />

            <ChannelMessage
                author="Bugio branco"
                date="09/07/2020"
                content="E AÍ MULATO PRETO DO CU ROXO. ME REMOVEU, NÉ FILHA DA PUTA. NÃO TEM ARGUMENTAÇÃO, NÉ O FILHA DA PUTA. GÓI DE MERDA, PAGÃO. TU É GÓI,
                BICHO, TU É GÓI, TU SE AJOELHA PRA UM JUDEU, SEU FILHA DUMA PUTA. FILHO DA PUTA. QUEBRAR ESSA TUA CARA NA PORRADA, SEU MERDA."
            />

            <ChannelMessage
            author="Macaco"
            date="09/07/2020"
            content="O que tá acontecendo com vocês?"
            />

            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-geral" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;