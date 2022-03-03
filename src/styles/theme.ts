import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		light: {
			primary: "#F82929",
			secondary: "#0677AA",
			gray: "#4A4A4A",
			error: "#F82929",
			warning: "#F82929",
			info: "#0677AA",
			success: "#1B9E5F",
			background: "#F2F2F2",
			white: "#F2F2F2",
			text: "#222222"
		},
		dark: {
			primary: "#0677AA",
			secondary: "#F82929",
			gray: "#4A4A4A",
			error: "#0677AA",
			warning: "#0677AA",
			info: "#F82929",
			success: "#1B9E5F",
			background: "#222222",
			white: "#F2F2F2",
			text: "#222222"
		}
	}
});

export { theme };
