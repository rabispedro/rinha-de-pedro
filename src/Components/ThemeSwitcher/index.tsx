import {
	IconButton,
	IconButtonProps, useColorMode,
	useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineToggleOff, MdOutlineToggleOn } from "react-icons/md";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

const ThemeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue("light", "dark");
	const SwitchIcon = useColorModeValue(MdOutlineToggleOff, MdOutlineToggleOn);

	return (
		<>
		<IconButton
			fontSize="lg"
			variant="ghost"
			color="current"
			marginLeft="2"
			onClick={toggleColorMode}
			icon={<SwitchIcon />}
			aria-label={`Switch to ${text} mode`}
			{...props}
		/>
		</>
	)
}

export { ThemeSwitcher };
