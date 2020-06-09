import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Alert,
	ScrollView,
	Image,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import Emoji from "react-native-emoji";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { SvgUri } from "react-native-svg";
import api from "../../services/api";
import * as Location from "expo-location";
interface Item {
	id: number;
	title: string;
	image_url: string;
}

function Points() {
	const [selectedItems, setSelectedItems] = useState<number[]>([]);
	const [items, setItems] = useState<Item[]>([]);
	const [initialPosition, setInitialPosition] = useState<[number, number]>([
		0,
		0,
	]);
	const navigate = useNavigation();

	useEffect(() => {
		async function loadPosition() {
			const { status } = await Location.requestPermissionsAsync();
			if (status !== "granted") {
				Alert.alert(
					"Oooopss",
					"Precisamos de sua permissão para obter a localização"
				);
				return;
			}

			const location = await Location.getCurrentPositionAsync();
			const { latitude, longitude } = location.coords;
			setInitialPosition([latitude, longitude]);
		}
		loadPosition();
	}, []);

	useEffect(() => {
		api.get("items").then((response) => {
			setItems(response.data);
		});
	}, []);

	function handleSelectItem(id: number) {
		const alreadySelected = selectedItems.findIndex((item) => item === id);
		if (alreadySelected >= 0) {
			const filteredItems = selectedItems.filter((item) => item !== id);
			setSelectedItems(filteredItems);
		} else {
			setSelectedItems([...selectedItems, id]);
		}
	}

	function handelNavigateBack() {
		navigate.goBack();
	}
	function handleNavigateToDetail() {
		navigate.navigate("Details");
	}
	return (
		<>
			<View style={styles.container}>
				<TouchableOpacity onPress={handelNavigateBack}>
					<Icon name="arrow-left" size={24} color="#34cb79" />
				</TouchableOpacity>
				<Text style={styles.title}>
					<Emoji name="smiley" />
					Bem vindo.
				</Text>
				<Text style={styles.description}>
					Encontre no mapa um ponto de coleta.
				</Text>
				<View style={styles.mapContainer}>
					{initialPosition[0] !== 0 && (
						<MapView
							style={styles.map}
							initialRegion={{
								latitude: initialPosition[0],
								longitude: initialPosition[1],
								latitudeDelta: 0.014,
								longitudeDelta: 0.014,
							}}
						>
							<Marker
								onPress={handleNavigateToDetail}
								style={styles.mapMarker}
								coordinate={{ latitude: -22.1043692, longitude: -51.3784825 }}
							>
								<View style={styles.mapMarkerContainer}>
									<Image
										style={styles.mapMarkerImage}
										source={{
											uri:
												"http://www.odiariodemogi.net.br/wp-content/uploads/2019/07/batman.jpg",
										}}
									/>
									<Text style={styles.mapMarkerTitle}> Im Batman</Text>
								</View>
							</Marker>
						</MapView>
					)}
				</View>
			</View>
			<View style={styles.itemsContainer}>
				<ScrollView
					contentContainerStyle={{ paddingHorizontal: 20 }}
					horizontal
					showsHorizontalScrollIndicator={false}
				>
					{items.map((item) => (
						<TouchableOpacity
							activeOpacity={0.6}
							key={String(item.id)}
							style={[
								styles.item,
								selectedItems.includes(item.id) ? styles.selectedItem : {},
							]}
							onPress={() => handleSelectItem(item.id)}
						>
							<SvgUri width={42} height={42} uri={item.image_url} />
							<Text style={styles.itemTitle}> {item.title} </Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</>
	);
}
export default Points;
