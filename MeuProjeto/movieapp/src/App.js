import { useState } from "react";
import { Header } from "./Header/index";
import { ModalLogin } from "./ModalLogin";
import { GlobalStyle } from "./styles/global";
import { ModalSing } from "./ModalSing";
import { Dashboard } from "./Dashboard";

export function App() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalSing, setModalSing] = useState(false);

  const OpenModal = () => {
    setModalLogin(true);
    setModalSing(false);
  }

  function CloseModalLogin() {
    setModalLogin(false);
  }

  const OpenSingModal = () => {
    setModalSing(true);
    setModalLogin(false);
  }

  function CloseSing() {
    setModalSing(false);
  }



  return (
    <>
      <Header OpenModal={OpenModal} />
      <ModalLogin isOpen={modalLogin}
        onSingRequest={OpenSingModal}
        onRequestClose={CloseModalLogin}
      />
      <ModalSing isOpen={modalSing}
        onRequestClose={CloseSing}
      />
      <Dashboard />
      {/* <Footer /> */}
      <GlobalStyle />
    </>
  );
}
