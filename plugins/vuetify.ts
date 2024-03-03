import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {defineNuxtPlugin} from "nuxt/app";
import 'vuetify/styles/main.sass'
import '@mdi/font/css/materialdesignicons.css'

const Theme = {
    dark: false,
    colors: {
        background: '#FBFCFE',
        primary: '#ea7508',
        'primary-gray-blue': '#B1E3FF',
        secondary: '#2C2D2E',
        'secondary-gray': '#626C77',
        'secondary-blue': '#151D48',
        'body-color': '#343B55',
        'title-color': '#1C1C1C',
        error: '#000000',
        info: '#000000',
        success: '#000000',
        warning: '#000000',
        'green': '#90C84B',
        'on-green': '#fff',
        'chart-primary': "#B1E3FF",
        'chart-secondary': "#D1D3D5",
        'chart-third': "#C1F680",
        'chart-fourth': "#FF8E6C",
        'chart-fifth': "#FFBC79",
        'chart-sixth': "#F7D794",
        'chart-seventh': "#778BEB",
        'chart-eighth': "#EB8686",
        'chart-ninth': "#F8A5C2",
        'chart-tenth': "#596174",
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'Theme',
            themes: {
                Theme,
            }
        },
    })

    nuxtApp.vueApp.use(vuetify);
});