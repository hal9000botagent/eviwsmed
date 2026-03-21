// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
    site: 'https://evidenzbasierte-wirbelsaeulenmedizin.de',

    integrations: [
		starlight({
			title: 'EviWsMed',
			description: 'Evidenzbasierte Wirbelsäulenmedizin – Fachartikel, Enzyklopädie und Patienteninformation zur Wirbelsäule',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Deutsch',
					lang: 'de',
				},
			},
			logo: {
				src: './src/assets/logo.png',
				replacesTitle: true,
			},
			favicon: '/favicon.png',
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
					items: [
						{ label: 'Übersicht', link: '/erkrankungen/' },
						{
							label: 'Degenerativ',
							items: [
								{ label: 'Bandscheibenvorfall', link: '/erkrankungen/degenerativ/bandscheibenvorfall' },
								{ label: 'Ischialgien', link: '/erkrankungen/degenerativ/ischialgien' },
								{ label: 'Rückenschmerzen', link: '/erkrankungen/degenerativ/rueckenschmerzen' },
								{ label: 'Spinalkanalstenose', link: '/erkrankungen/degenerativ/spinalkanalstenose' },
							],
						},
						{ label: 'Entzündlich', link: '/erkrankungen/entzuendlich/' },
						{ label: 'Fehlbildungen', link: '/erkrankungen/fehlbildungen/' },
						{ label: 'Tumoren', link: '/erkrankungen/tumoren/' },
						{ label: 'Verletzungen', link: '/erkrankungen/verletzungen/' },
					],
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

    adapter: cloudflare()
});