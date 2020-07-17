import React from "react";

import ServerButton from "../ServerButton";

import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={4} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={9} />
    </Container>
  );
};

export default ServerList;
