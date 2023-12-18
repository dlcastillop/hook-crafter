# Hook Crafter

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

### Clone the repo

```bash
git clone https://github.com/dlcastillop/hook-crafter
```

### Install the dependencies

```bash
npm install
```

## Personalize the project

### vite.config.ts

Go to the `vite.config.ts` file and change the `name` prop to the name of your library. Also replace the substring `hook-crafter` with the name of your library in the `fileName` prop.

### package.json

Go to the `package.json` file and change the `name`, `description`, `repository`, `keywords`, `author`, `license`, `private` and `version` props to the ones of your library.

Also replace the substring `hook-crafter` with the name of your library in the `main`, `modules`, `types` and `exports`.

## Development

All your hooks must be inside the `hooks` folder and you must export them in the `index.ts` file.

## Generate the build

```bash
npm run build
```
