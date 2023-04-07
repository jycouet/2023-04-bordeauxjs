import { kitql } from '@kitql/all-in';
import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';

import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [kitql(), houdini(), sveltekit()],
	ssr: { external: ['micromatch'] }
};

export default config;
