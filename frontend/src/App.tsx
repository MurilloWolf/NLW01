import React from "react";
import GlobalStyles from "./styles/global";
import { MyThemeProvider } from "./components/ThemeToggleProvider";
import Routes from "./routes";

function App() {
	return (
		<MyThemeProvider>
			<GlobalStyles />
			<div className="App">
				<Routes />
			</div>
		</MyThemeProvider>
	);
}

export default App;
