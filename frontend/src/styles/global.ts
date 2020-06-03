import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html,body{
		width: 100%;
		height: 100%;

	}


	body{
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background: ${(props) => props.theme.colors.background};
		color: ${(props) => props.theme.colors.text};
	}

	body, input, button {
		font-family: Roboto, Arial, Helvetica, sans-serif;
	}


	h1,h2,h3,h4,h5,h6 {
		color: ${(prosp) => prosp.theme.colors.title};
		font-family: Ubuntu;
	}



`;
