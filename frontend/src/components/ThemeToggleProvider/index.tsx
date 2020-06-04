import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../../styles/themes";
import usePersistedState from "../../utils/PersistedState";
const ThemeToggleContext = React.createContext({ toggle: () => {} });

export const useTheme = () => React.useContext(ThemeToggleContext);

interface Props {
	children?: ReactNode;
}
export const MyThemeProvider: React.FC<Props> = (props: Props) => {
	const [theme, setTheme] = usePersistedState("theme", light);

	const toggleTheme = () => {
		setTheme(theme.title === "light" ? dark : light);
	};

	return (
		<ThemeToggleContext.Provider value={{ toggle: toggleTheme }}>
			<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
		</ThemeToggleContext.Provider>
	);
};

export default ThemeProvider;
