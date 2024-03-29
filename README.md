# <img src="https://github.com/dlcastillop/dlcastillop/blob/main/logos/hook-crafter.png" width="40" height="40" /> Hook Crafter

Build your own React custom hooks faster.

## Project structure

```text
├── src/
│   └── hooks/
│       ├── useYourHook.ts
│       └── index.ts
├── package.json
└── vite.config.ts
```

## Getting started

### Install the dependencies

Download the last release and install the dependencies with npm, yarn o pnpm:

```bash
npm install
```

```bash
yarn
```

```bash
pnpm install
```

### Update the `package.json` file

Go to the `package.json` file and change the `name`, `description`, `repository`, `keywords`, `author`, `license`, `private` and `version` props to the ones of your library.

Also replace the substring `hook-crafter` with the name of your library in the `main`, `modules`, `types` and `exports`.

```diff
{
-// "name": "hook-crafter",
+// "name": "your-library-name",
-// "description": "Build your own React custom hooks faster",
+// "description": "Your library description",
    "repository": {
        "type": "git",
-//     "url": "https://github.com/dlcastillop/hook-crafter"
+//     "url": "your-repository-url"
    },
-// "keywords": ["react-hooks", "react-custom-hook", "react-custom-hooks", "vite", "typescript"],
+// "keywords": ["keyword-one", "keyword-two"],
-// "author": "Daniel Castillo <daniel@dlcastillop.com>",
+// "author": "Your Name <your-email@domain.com>",
-// "license": "MIT",
+// "license": "license-name",
-// "private": false,
+// "private": true || false,
-// "version": "1.1.0",
+// "version": "0.1.0",
    "type": "module",
-// "main": "dist/hook-crafter.umd.js",
+// "main": "dist/your-library-name.umd.js",
-// "module": "dist/hook-crafter.es.js",
+// "module": "dist/your-library-name.es.js",
-// "types": "dist/hook-crafter.d.ts",
+// "types": "dist/your-library-name.d.ts",
    "scripts": {
        "dev": "vite",
        "build": "tsc && vite build",
        "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview"
    },
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "vite-plugin-dts": "^3.6.4"
    },
    "devDependencies": {
        "@types/react": "^18.2.45",
        "@types/react-dom": "^18.2.18",
        "@typescript-eslint/eslint-plugin": "^6.9.1",
        "@typescript-eslint/parser": "^6.14.0",
        "@vitejs/plugin-react": "^4.2.1",
        "eslint": "^8.56.0",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-refresh": "^0.4.5",
        "typescript": "^5.3.3",
        "vite": "^4.5.0"
    },
    "exports": {
        ".": {
        "import": {
-//         "default": "./dist/hook-crafter.es.js",
+//         "default": "./dist/your-library-name.es.js",
-//         "types": "./dist/hook-crafter.d.ts"
+//         "types": "./dist/your-library-name.d.ts"
        },
        "require": {
-//         "default": "./dist/hook-crafter.umd.js",
+//         "default": "./dist/your-library-name.umd.js",
-//         "types": "./dist/hook-crafter.d.ts"
+//         "types": "./dist/your-library-name.d.ts"
        }
        }
    },
    "files": [
        "dist",
        "package.json"
    ]
}
```

### Create your hooks

Create all your hooks inside the `src/hooks` folder and export them in the `index.ts` file. For reference, you can check the example hook in the `src/hooks` folder.

> Do you need hooks for your project? Try [Nova.js: a collection of dependency-free React hooks](https://novajs.co/).

## Publish your library to NPM

### Generate the build

Generate the build using npm, yarn or pnpm.

```bash
npm run build
```

```bash
yarn build
```

```bash
pnpm build
```

### Login to npm

```bash
npm login
```

### Publish your library

```bash
npm publish
```

## Contributions

If you're interested in contributing to Hook Crafter, please read our [contributing docs](https://github.com/dlcastillop/hook-crafter/blob/main/CONTRIBUTING.md) before submitting a pull request.

## Support

Don't forget to leave a star!
