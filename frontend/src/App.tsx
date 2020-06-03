import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import { dark, light } from "./styles/themes";
import Switch from "./components/Switch";
import usePersistedState from "./utils/PersistedState";

import Home from "./pages/Home";
function App() {
	const [theme, setTheme] = usePersistedState("theme", light);

	const toogleTheme = () => {
		setTheme(theme.title === "light" ? dark : light);
		console.log("change theme");
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<div className="App">
				<Home />
				<Switch onChange={toogleTheme} />
			</div>
		</ThemeProvider>
	);
}

export default App;
