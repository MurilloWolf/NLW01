import styled from "styled-components";

type onOff = {
	onColor?: string;
	offColor?: string;
};

const Switch = styled.label`
	opacity: 0.5;

	width: 0;
	height: 0;
	background: #212121;
`;

const Checkbox = styled.input`
	opacity: 0;
	width: 0;
	height: 0;

	:checked {
		background-color: #2196f3;
	}
	:checked + :before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
`;

const Slider = styled.span`
	max-width: 3rem;
	max-height: 1rem;
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #333;
	-webkit-transition: 0.4s;
	transition: 0.4s;
	border-radius: 34px;

	:before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
	}

	:checked {
		background-color: #2196f3;
	}
`;

const Style = { Switch, Checkbox, Slider };
export default Style;
