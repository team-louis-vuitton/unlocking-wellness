import { IconButton, useColorMode, Tooltip } from "@chakra-ui/react";
import { useContext } from 'react';
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import styles from '../../styles/Navbar.module.css';
import SearchContext from '../SearchContext.js';


export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { darkMode , toggleDarkMode } = useContext(SearchContext);
  console.log(darkMode);
  return (
    <div className={styles.darkModeContainer}>
      <IconButton
        backgroundColor="transparent"
        aria-label="Toggle Theme"
        onClick={() => {
          toggleColorMode()
          toggleDarkMode()
        }}
        icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
      >
      </IconButton>
    </div>
  )
}