import { Container } from "./styles";
import Background from "../background";
const Layout = ({ children }) => {
  return (
    <Container>
      <Background>
        {children}
      </Background>
    </Container>
  );
};

export default Layout;
