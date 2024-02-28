import sveltePreprocess from "svelte-preprocess";

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),

  // get rid of unused css error
  compilerOptions: {
    css: false,
  },
};
