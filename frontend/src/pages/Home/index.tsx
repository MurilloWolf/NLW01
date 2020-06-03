import React from "react";
import Styles from "./styles";
import logo from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
const Home: React.FC = () => {
	return (
		<Styles.PageHome>
			<Styles.Content>
				<header>
					<img src={logo} alt="Ecoleta" />
				</header>
				<main>
					<h1>Seu Marketplace de coleta de resíduos.</h1>
					<p>
						Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
					</p>
					<a>
						<span>
							{" "}
							<FiLogIn />
						</span>
						<strong>Cadastre um ponto de coleta</strong>
					</a>
				</main>
			</Styles.Content>
		</Styles.PageHome>
	);
};

export default Home;
