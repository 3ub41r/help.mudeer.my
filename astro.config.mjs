// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MUDEER',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/3ub41r/help.mudeer.my' }],
			sidebar: [
				{
					label: 'Mula Sini',
					slug: 'mula-sini',
				},
				{
					label: 'Pemula',
					items: [{ autogenerate: { directory: 'pemula' } }],
				},
				{
					label: 'Panduan',
					items: [{ autogenerate: { directory: 'panduan' } }],
				},
				{
					label: 'Panduan Lain',
					items: [{ autogenerate: { directory: 'panduan-lain' } }],
				},
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				// {
				// 	label: 'Reference',
				// 	items: [{ autogenerate: { directory: 'reference' } }],
				// },
				// {
				// 	label: 'MUDEER App',
				// 	items: [
				// 		{
				// 			label: 'Log Masuk',
				// 			link: 'https://app.mudeer.my',
				// 			attrs: { target: '_blank' },
				// 		}
				// 	],
				// },
			],
		}),
	],
});