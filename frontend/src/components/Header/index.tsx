import React from "react";
import Style from "./styles";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowDownLeft } from "react-icons/fi";
import Switch from "react-switch";
import usePersistedState from "../../utils/PersistedState";
import { light, dark } from "../../styles/themes";
import { useTheme } from "../ThemeToggleProvider";
/// import { Container } from './styles';

interface Props {
	linkBack: boolean;
}

const Header: React.FC<Props> = (props) => {
	const [theme, setTheme] = usePersistedState("theme", light);
	const [checked, setChecked] = usePersistedState("checked", false);
	const changeTheme = useTheme();

	const toogleTheme = () => {
		setChecked(!checked);
		setTheme(theme.title === "light" ? dark : light);
		changeTheme.toggle();
	};
	return (
		<Style.Header>
			<Link to={"/"}>
				<img src={logo} alt="Ecoleta" />
			</Link>
			{props.linkBack ? (
				<Link to={"/"}>
					<FiArrowDownLeft /> Voltar para Home
				</Link>
			) : null}
			<Switch
				onChange={toogleTheme}
				checked={checked}
				height={10}
				width={40}
				handleDiameter={20}
				onColor={theme.colors.pimary}
				offColor={theme.colors.layer3}
				offHandleColor={"#333"}
				onHandleColor={theme.colors.primary}
				uncheckedIcon={false}
				checkedIcon={false}
			/>
		</Style.Header>
	);
};

export default Header;
