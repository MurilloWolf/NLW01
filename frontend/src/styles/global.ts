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

		max-height:100vh;
		max-height:1920px;
		overflow:hidden;
	}


	body{
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background: ${(props) => props.theme.colors.background}
	}


`;
