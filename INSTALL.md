# Installation d'un projet VueJS 3 / Typescript

1) Installation avec Vue-CLI

`npm install -g @vue/cli`
`vue create my-app-name`

Vue CLI v4.5.15
? Please pick a preset: `Manually select features`
? Check the features needed for your project: `Choose Vue version, Babel, TS, Router, Vuex, CSS Pre-processors, Linter`
? Choose a version of Vue.js that you want to start the project with `3.x`
? Use class-style component syntax? `No`
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? `Yes`
? Use history mode for router? (Requires proper server setup for index fallback in production) `Yes`
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): `Sass/SCSS (with node-sass)`
? Pick a linter / formatter config: `Prettier`
? Pick additional lint features: `Lint on save`
? Where do you prefer placing config for Babel, ESLint, etc.? `In dedicated config files`
? Save this as a preset for future projects? (y/N) `No`

`cd my-app-name`

2) On ajoute cette configuration dans le `tsconfig.json` à la racine.
```json
{
  "compilerOptions": {
	// ...
	// Options intéressantes pour le code
	// Allow Unreachable Code (par défaut : undefined)
	"allowUnreachableCode": false,
	// Allow Unused Labels  (par défaut : undefined)
	"allowUnusedLabels": false,
	// No Implicit Any (par défaut: true if strict)
	"noImplicitAny": true,
	// No Implicit Override (par défaut : ???)
	"noImplicitOverride": true,
	// No Implicit Returns (par défaut : false)
	"noImplicitReturns": true,
	// No Implicit This (différence entre this de la classe, et this des fonctions) (par défaut: true if strict)
	"noImplicitThis": true,
	// No Unused Locals (par défaut : false)
	"noUnusedLocals": true,
	// No Unused Parameters (par défaut : false)
	"noUnusedParameters": true,
	// Strict Bind Call Apply (par défaut: true if strict)
	"strictBindCallApply": true,
	// Strict Function Types (par défaut: true if strict)
	"strictFunctionTypes": true,
	// Strict Null Checks (par défaut: true if strict)
	"strictNullChecks": true,
	// Strict Property Initialization  (par défaut: true if strict)
	"strictPropertyInitialization": true,
  }
}
```

3) On ajoute cette configuration dans le `.eslintrc.js` à la racine.

```js
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "no-console": "warn",
    "no-debugger": "warn",
  },
```

4) On ajoute les extensions suivantes :
- ESLint, Prettier, SCSS Formatter
- TypeScript Import Sorter
- Vetur

On ajoute la configuration / préférences dans le `.vscode/settings.json` à la racine.

5) On vérifie les erreurs possibles et on teste l'application
`npm run serve`
