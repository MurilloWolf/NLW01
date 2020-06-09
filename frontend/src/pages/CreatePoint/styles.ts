import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	max-width: 1100px;

	margin: 0 auto;
`;

const Form = styled.form`
	margin: 80px auto;
	padding: 64px;
	max-width: 730px;
	background: ${(props) => props.theme.colors.layer1};
	border-radius: 8px;

	display: flex;
	flex-direction: column;

	h1 {
		font-size: 36px;
	}
	fieldset {
		margin-top: 64px;
		min-inline-size: auto;
		border: 0;
	}
	legend {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40px;
		span {
			font-size: 14px;
			font-weight: normal;
			color: ${(props) => props.theme.colors.text};
		}
		h2 {
			font-size: 24px;
		}
	}
`;

const FieldGroup = styled.div`
	flex: 1;
	display: flex;
`;
const Field = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;
	margin-bottom: 24px;

	input[type="number"],
	input[type="text"],
	input[type="email"] {
		flex: 1;
		background: #f0f0f5;
		border-radius: 8px;
		border: 0;
		padding: 16px 24px;
		margin: 0 0 0 8px;
		font-size: 16px;
		color: ${(props) => props.theme.colors.secondary};
	}

	select {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		flex: 1;
		background: #f0f0f5;
		border-radius: 8px;
		border: 0;
		padding: 16px 24px;
		font-size: 16px;
		color: #6c6c80;
		margin: 0 0 0 8px;
	}
	label {
		font-size: 14px;
		margin-bottom: 8px;
	}
`;

const FieldCheck = styled.div`
	flex-direction: row;
	align-items: center;
	input[type="checkbox"] {
		background: ${(props) => props.theme.colors.background};
	}

	label {
		margin: 0 0 0 8px;
	}
`;

const LeftContainer = styled.div`
	.leaflet-container {
		width: 100%;
		height: 350px;
		border-radius: 8px;
		margin-bottom: 24px;
	}
`;

const ItemsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 16px;
	list-style: none;

	li {
		background: ${(props) => props.theme.colors.layer3};
		border: ${(props) => "2px solid " + props.theme.colors.layer3};
		height: 180px;
		border-radius: 8px;
		padding: 32px 24px 16px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		text-align: center;

		cursor: pointer;

		span {
			flex: 1;
			margin-top: 12px;

			display: flex;
			align-items: center;
			color: ${(props) => props.theme.colors.text};
		}
	}

	.selected {
		background: ${(props) => props.theme.colors.primary};

		color: ${(props) => props.theme.colors.text};
		border: 2px solid #34cb79;
	}
`;

const Button = styled.button`
	width: 260px;
	height: 56px;
	background: ${(props) => props.theme.colors.primary};
	border-radius: 8px;
	color: ${(props) => props.theme.colors.title};
	font-weight: bold;
	font-size: 16px;
	border: 0 !important;
	align-self: flex-end;
	margin-top: 40px;
	transition: background-color 0.2s;
	cursor: pointer;

	:hover {
		background: ${(props) => props.theme.colors.primaryLight};
	}
`;

const Styles = {
	Button,
	FieldCheck,
	FieldGroup,
	Form,
	Field,
	Container,
	ItemsGrid,
	LeftContainer,
};

export default Styles;
