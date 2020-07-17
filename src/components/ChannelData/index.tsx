import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() =>{ 
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>

        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Weslei Dias"
            date="01/08/2020"
            content="Está é a data do meu aniversário!"
          />
        ))}


        <ChannelMessage
          author="Jose Silva"
          date="17/07/2020"
          content={<>
            <Mention>@Weslei Dias</Mention>,"Vai ter festa?"
            </>
          }
        />
      </Messages>
      

      <InputWrapper>
      <InputIcon />
      <Input type="text" placeholder="Conversar em #chat-livre" />
        
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
