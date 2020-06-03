import React from "react";
import Header from "../../components/Header";
import Styles from "./styles";
import { Map, TileLayer, Marker } from "react-leaflet";
import api from "../../services/api";
import axios from "axios";
import { LeafletMouseEvent } from "leaflet";

interface Item {
	id: number;
	title: string;
	image_url: string;
}

interface IBGEUFResponse {
	sigla: string;
}
interface IBGECityResponse {
	nome: string;
}

const CreatePoint: React.FC = () => {
	const [selected, setSelected] = React.useState<Number[]>([]);
	const [items, setItems] = React.useState<Item[]>([]);
	const [ufs, setUfs] = React.useState<string[]>([]);
	const [cities, setCities] = React.useState<string[]>([]);
	const [selectedUf, setSelectedUf] = React.useState("0");

	const [selectedPosition, setSelectedPosition] = React.useState<
		[number, number]
	>([0, 0]);

	const [initialPosition, setInitialPosition] = React.useState<
		[number, number]
	>([0, 0]);

	function handleMapClick(event: LeafletMouseEvent) {
		setSelectedPosition([event.latlng.lat, event.latlng.lng]);
	}

	function handleSelectedUf(event: React.ChangeEvent<HTMLSelectElement>) {
		setSelectedUf(event.target.value);
	}

	function isSelected(value: number) {
		const isSelected = selected.indexOf(value);

		return isSelected >= 0 ? "selected" : "";
	}

	function handleSelected(event: React.MouseEvent<HTMLLIElement>) {
		const value = event.currentTarget.value;
		const haveItem = selected.indexOf(value);
		if (haveItem >= 0) {
			const newArr = selected.filter((item) => item !== value);
			setSelected(newArr);
		} else setSelected([...selected, value]);
	}

	React.useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			setInitialPosition([latitude, longitude]);
		});
	}, []);

	React.useEffect(() => {
		api.get("items").then((res) => {
			setItems(res.data);
		});
	}, []);

	React.useEffect(() => {
		axios
			.get<IBGEUFResponse[]>(
				"https://servicodados.ibge.gov.br/api/v1/localidades/estados"
			)
			.then((res) => {
				const initials = res.data.map((uf) => uf.sigla);
				setUfs(initials);
			});
	}, []);

	React.useEffect(() => {
		axios
			.get<IBGECityResponse[]>(
				`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
			)
			.then((res) => {
				const citiesName = res.data.map((city) => city.nome);
				setCities(citiesName);
			});
	}, [selectedUf]);

	return (
		<Styles.Container>
			<Header linkBack />
			<Styles.Form>
				<h1>
					Cadastro do <br /> ponto de coleta
				</h1>
				<fieldset>
					<legend>
						<h2>Dados</h2>
					</legend>
					<Styles.Field>
						<label htmlFor={"name"}>Nome da entidade</label>
						<input type={"text"} name={"name"} id={"name"} />
					</Styles.Field>

					<Styles.FieldGroup>
						<Styles.Field>
							<label htmlFor={"email"}>E-mail</label>
							<input type={"text"} name={"email"} id={"email"} />
						</Styles.Field>
						<Styles.Field>
							<label htmlFor={"whatsapp"}>Whatsapp</label>
							<input type={"text"} name={"whatsapp"} id={"whatsapp"} />
						</Styles.Field>
					</Styles.FieldGroup>
				</fieldset>

				<fieldset>
					<legend>
						<h2>Endereço</h2>
						<span>Selecione o endereço no mapa</span>
					</legend>
					<Styles.LeftContainer>
						<Map center={initialPosition} zoom={15} onClick={handleMapClick}>
							<TileLayer
								attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							<Marker position={selectedPosition} />
						</Map>
					</Styles.LeftContainer>
					<Styles.FieldGroup>
						<Styles.Field>
							<label htmlFor={"uf"}>Estado (UF)</label>
							<select
								name={"uf"}
								id={"uf"}
								value={selectedUf}
								onChange={handleSelectedUf}
							>
								<option value={0}>Seleciona uma UF</option>
								{ufs.map((item, key) => {
									return (
										<option key={key} value={item}>
											{item}
										</option>
									);
								})}
							</select>
						</Styles.Field>
						<Styles.Field>
							<label htmlFor={"city"}>Cidade</label>
							<select name={"city"} id={"city"}>
								<option value={0}>Seleciona uma cidade</option>
								{cities.map((item, key) => {
									return (
										<option key={key} value={item}>
											{item}
										</option>
									);
								})}
							</select>
						</Styles.Field>
					</Styles.FieldGroup>
				</fieldset>

				<fieldset>
					<legend>
						<h2>Itens de coleta</h2>
						<span>Selecione um ou mais itens abaixo </span>
					</legend>

					<Styles.ItemsGrid>
						{items.map((item, key) => {
							return (
								<li
									key={key}
									value={key}
									className={"" + isSelected(key)}
									onClick={handleSelected}
								>
									<img src={item.image_url} alt={item.title} />
									<span>{item.title}</span>
								</li>
							);
						})}
					</Styles.ItemsGrid>
				</fieldset>
				<Styles.Button type={"submit"}>Cadastrar ponto de coleta</Styles.Button>
			</Styles.Form>
		</Styles.Container>
	);
};

export default CreatePoint;
