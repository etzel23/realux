// import adapter from '@sveltejs/adapter-static';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter({
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: null,
// 			precompress: false,
// 			strict: false
// 		})
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
		})
	}
};

export default config;