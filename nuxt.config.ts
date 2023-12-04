// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    app: {
        baseURL: '/',
        buildAssetsDir: 'assets',
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    devtools: { enabled: true },
    components: true,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@invictus.codes/nuxt-vuetify',
        '@nuxt/image',
    ],
    vuetify: {
        /* vuetify options */
        vuetifyOptions: {
        },
        moduleOptions: {
            treeshaking: false,
            useIconCDN: false,
            styles: true,
            autoImport: true,
            useVuetifyLabs: false,
        }
    }
})
