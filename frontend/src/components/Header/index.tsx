import React from "react";
import Style from "./styles";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowDownLeft } from "react-icons/fi";
// import { Container } from './styles';

interface Props {
	linkBack: boolean;
}

const Header: React.FC<Props> = (props) => {
	return (
		<Style.Header>
			<img src={logo} alt="Ecoleta" />
			{props.linkBack ? (
				<Link to={"/"}>
					<FiArrowDownLeft /> Voltar para Home
				</Link>
			) : null}
		</Style.Header>
	);
};

export default Header;
