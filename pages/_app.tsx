import { useState } from "react";
import { Container, DarkSwitch, Header, Logo, Menu } from "../styles/pages/app";
import { darkTheme } from "../styles/themes/dark";
import DarkModeToggle from "react-dark-mode-toggle";
import { globalStyles } from "../styles/global";
import Link from "next/link";


export default function App({ Component, pageProps }) {
globalStyles()
  
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const darkMode = isDarkMode ? darkTheme : ''

  return (
    <Container className={darkMode}>
      <Header>
        <Logo>

        </Logo>
        <Menu>
          <Link href={"asd"} prefetch={false}>Home</Link>
          <Link href={"asd"} prefetch={false}>Meus Links</Link>
        </Menu>
        <DarkSwitch>
          <DarkModeToggle
            className="toogle-dark-mode"
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={60}
          />          
        </DarkSwitch>        
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
