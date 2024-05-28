import { useState } from "react";
import { Header } from "./Header/index";
import { ModalLogin } from "./ModalLogin";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [modalLogin, setModalLogin] = useState(false);

  function OpenMModal(){
    setModalLogin(true);
  }

  function CloseModalLogin() {
    setModalLogin(false);
  }
  return (
    <>
      <Header OpenModal={OpenMModal}/>
      <ModalLogin isOpen={modalLogin}
        onRequestClose={CloseModalLogin}
        
      />
      <GlobalStyle />
    </>
  );
}
