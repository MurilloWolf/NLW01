import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import styles from "./styles";

function Home() {
	const navigation = useNavigation();
	function handleNavigateToPoints() {
		navigation.navigate("Points");
	}

	return (
		<ImageBackground
			source={require("../../assets/home-background.png")}
			style={styles.container}
			imageStyle={{ width: 274, height: 268 }}
		>
			<View style={styles.main}>
				<Image source={require("../../assets/logo.png")} />
				<Text style={styles.title}>
					Seu Marketplace de coleta de resíduos.{" "}
				</Text>
				<Text style={styles.description}>
					Ajudamos pessoas a encotrarem pontos de coleta de forma eficiente.
				</Text>
			</View>
			<View style={styles.footer}>
				<RectButton style={styles.button} onPress={handleNavigateToPoints}>
					<View style={styles.buttonIcon}>
						<Text>
							<Icon name="arrow-right" color="#fff" size={24} />
						</Text>
					</View>
					<Text style={styles.buttonText}>Entrar</Text>
				</RectButton>
			</View>
		</ImageBackground>
	);
}
export default Home;
