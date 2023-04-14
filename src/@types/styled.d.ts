import styled from "styled-components"

import { defaultTheme } from "../Styles/themes/deafult"

type ThemeType = typeof defaultTheme

declare module 'styled-components' {

    export interface DefaultTheme extends ThemeType{}
}