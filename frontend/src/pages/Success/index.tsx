import React from "react";
import Header from "../../components/Header";
import Styles from "./styles";
import { ThemeContext } from "styled-components";
import { FiCheckCircle } from "react-icons/fi";
const Success: React.FC = () => {
	const theme = React.useContext(ThemeContext);
	return (
		<>
			<Header linkBack />
			<Styles.Container>
				<FiCheckCircle size={64} color={theme.colors.primary} />

				<h1>Cadastro Concluido !</h1>
			</Styles.Container>
		</>
	);
};

export default Success;
