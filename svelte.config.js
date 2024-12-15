import adapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: adapter({
      runtime: 'nodejs18.x'
    }),
    paths: {
      base: process.env.BASE_PATH || ''
    }
  }
};