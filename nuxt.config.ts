// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	modules: ["@tresjs/nuxt"],
	devtools: { enabled: false },
	css: ["~/assets/style.css"],
});
