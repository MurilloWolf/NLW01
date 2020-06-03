import React, { ReactNode } from "react";
import { ThemeContext } from "styled-components";
import Style from "./styles";
import usePersistedState from "../../utils/PersistedState";
import { dark, light } from "../../styles/themes";

interface Props {
	onChange(): void;
	children?: ReactNode;
}

const Switch: React.FC<Props> = (props) => {
	const { colors } = React.useContext(ThemeContext);

	return (
		<Style.Switch>
			<Style.Checkbox type="checkbox" onChange={props.onChange} />
			<Style.Slider></Style.Slider>
		</Style.Switch>
	);
};

export default Switch;
