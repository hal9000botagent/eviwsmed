// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://evidenzbasierte-wirbelsaeulenmedizin.de',
	integrations: [
		starlight({
			title: 'EviWsMed',
			description: 'Evidenzbasierte Wirbelsäulenmedizin – Fachartikel, Enzyklopädie und Patienteninformation zur Wirbelsäule',
			defaultLocale: 'de',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
			customCss: [
				'./src/styles/custom.css',
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'robots',
						content: 'index, follow',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: 'Evidenzbasierte Wirbelsäulenmedizin',
					},
				},
				{
					tag: 'script',
					attrs: {
						type: 'application/ld+json',
					},
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'MedicalWebPage',
						name: 'Evidenzbasierte Wirbelsäulenmedizin',
						url: 'https://evidenzbasierte-wirbelsaeulenmedizin.de',
						description: 'Evidenzbasierte Fachartikel und Patienteninformationen zur Wirbelsäulenmedizin',
						inLanguage: 'de',
						medicalAudience: {
							'@type': 'MedicalAudience',
							audienceType: 'Patient',
						},
						publisher: {
							'@type': 'Organization',
							name: 'EviWsMed',
						},
					}),
				},
			],
			sidebar: [
				{
					label: 'Startseite',
					link: '/',
				},
				{
					label: 'Erkrankungen',
					autogenerate: { directory: 'erkrankungen' },
				},
				{
					label: 'Glossar',
					autogenerate: { directory: 'glossar' },
				},
				{
					label: 'Häufige Fragen',
					autogenerate: { directory: 'faq' },
				},
				{
					label: 'Videos',
					autogenerate: { directory: 'videos' },
				},
				{
					label: 'Rechtliches',
					items: [
						{ label: 'Impressum', link: '/impressum' },
						{ label: 'Datenschutz', link: '/datenschutz' },
						{ label: 'Hinweis', link: '/hinweis-medizinische-information' },
					],
				},
			],
		}),
	],
});
