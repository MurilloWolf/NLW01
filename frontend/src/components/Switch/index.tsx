import React, { ReactNode } from "react";
import Style from "./styles";

interface Props {
	onChange(): void;
	children?: ReactNode;
}

const Switch: React.FC<Props> = (props) => {
	return (
		<Style.Switch>
			<Style.Checkbox type="checkbox" onChange={props.onChange} />
			<Style.Slider></Style.Slider>
		</Style.Switch>
	);
};

export default Switch;
