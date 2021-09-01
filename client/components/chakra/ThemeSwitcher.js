import { IconButton, useColorMode, Tooltip } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      backgroundColor="transparent"
      aria-label="Toggle Theme"
      onClick={toggleColorMode}
      icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
    >
    </IconButton>
  )
}