import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {defineNuxtPlugin} from "nuxt/app";
import 'vuetify/styles/main.sass'
import {aliases as allAliases, mdi} from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css'

const Theme = {
    dark: false,
    colors: {
        background: '#2C2D2E',
        'background-secondary': '#191a1a',
        surface: '#3f4449',
        primary: '#ea7508',
        'primary-gray-blue': '#B1E3FF',
        secondary: '#2C2D2E',
        'secondary-gray': '#626C77',
        'secondary-blue': '#151D48',
        'body-color': '#343B55',
        'title-color': '#1C1C1C',
        error: '#ff2828',
        info: '#000000',
        success: '#000000',
        warning: '#000000',
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        icons: {
            defaultSet: 'mdi',
            aliases: allAliases,
            sets: {mdi},
        },
        theme: {
            defaultTheme: 'Theme',
            themes: {
                Theme,
            }
        },
    })

    nuxtApp.vueApp.use(vuetify);
});