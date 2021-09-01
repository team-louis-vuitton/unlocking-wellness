import { IconButton, useColorMode, Tooltip } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import styles from '../../styles/Navbar.module.css';

export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className={styles.darkModeContainer}>
      <IconButton
        backgroundColor="transparent"
        aria-label="Toggle Theme"
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
      >
      </IconButton>
    </div>
  )
}