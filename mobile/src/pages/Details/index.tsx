import React from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { FontAwesome as FaIcon } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import styles from "./styles";

const Details = () => {
	const navigate = useNavigation();
	function handelNavigateBack() {
		navigate.goBack();
	}
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<TouchableOpacity onPress={handelNavigateBack}>
					<Icon name="arrow-left" size={24} color="#34cb79" />
				</TouchableOpacity>
				<Image
					style={styles.pointImage}
					source={{
						uri:
							"http://www.odiariodemogi.net.br/wp-content/uploads/2019/07/batman.jpg",
					}}
				/>
				<Text style={styles.pointName}>Batcaverna</Text>
				<Text style={styles.pointItems}>Lampadas, Oleo de Cozinha</Text>
				<View style={styles.address}>
					<Text style={styles.addressTitle}> Endereço</Text>
					<Text style={styles.addressContent}> Presidente Prudente, SP</Text>
				</View>
			</View>
			<View style={styles.footer}>
				<RectButton style={styles.button} onPress={() => {}}>
					<FaIcon name="whatsapp" size={20} color="#fff" />
					<Text style={styles.buttonText}> Whatsapp</Text>
				</RectButton>
				<RectButton style={styles.button} onPress={() => {}}>
					<Icon name="mail" size={20} color="#fff" />
					<Text style={styles.buttonText}> Email</Text>
				</RectButton>
			</View>
		</SafeAreaView>
	);
};

export default Details;
