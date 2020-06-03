import React from "react";
import Styles from "./styles";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Home: React.FC = () => {
	return (
		<Styles.PageHome>
			<Styles.Content>
				<Header linkBack={false} />
				<main>
					<h1>Seu Marketplace de coleta de resíduos.</h1>
					<p>
						Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
					</p>
					<Link to={"/create-point"}>
						<span>
							<FiLogIn />
						</span>
						<strong>Cadastre um ponto de coleta</strong>
					</Link>
				</main>
			</Styles.Content>
		</Styles.PageHome>
	);
};

export default Home;
