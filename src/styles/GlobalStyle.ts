import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;

		body, #root {
			min-height: 100vh;
			background: #f5f5f5;
			color: #403f5b;
		}

		body {
			font-family: 'Montserrat', 'Roboto', 'Segoe UI','Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif, -apple-system, BlinkMacSystemFont;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}

		a {
			text-decoration: none;
		}

		li {
			list-style: none;
		}

		button {
			cursor: pointer;
			border: none;
		}

		input, textarea {
			font-family: 'Montserrat', 'Roboto', 'Segoe UI','Oxygen';
		}

		code {
			font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
				monospace;
	}
`;

export { GlobalStyle };
