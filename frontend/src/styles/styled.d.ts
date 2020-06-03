import 'styled-components'
declare module 'styled-components' {
	export interface DefaultTheme {
		title: string
		colors: {
			primary: string
			secondary: string
			background: string
			layer1: string
			layer2: string
			layer3: string
			text: string
		}
	}
}
