# clean_code_practice

> Practice exercise for students of the clean code course

## Start

### Local dependencies :

```bash
# npm
npm i
# yarn
yarn
```

## Your Task

Refactor `./src/main.ts`, so at the end you could remove the disabled es-lint rules

```ts
/* eslint-disable complexity */
/* eslint-disable max-depth */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-nested-callbacks */
```

Follow clean principles:

- Good names
- Small functions
- Solid clases

### Scripts :

```bash
# npm
npm start

# yarn
yarn start
```

### 🧩 Extensions recommendations

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Prettier](https://github.com/prettier/prettier-vscode)
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

## Pre configured tools:

> feel free to adapt the configuration to your needs

### Prettier

`.prettierrc`

```json
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "printWidth": 120,
  "proseWrap": "preserve",
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false
}
```

`.editorconfig`

```
root = true
[*]
end_of_line = lf
charset = utf-8
```

### EsLint

See `.eslintrc` file

## Credits

### [Clean Code course](https://www.trainingit.es/index.php/producto/curso-clean-code/)

Based on these theory and demos

[Course documentation _in Spanish_](https://github.com/cleancodeTrIT/CleanCodeLab)

---

<footer>
  <h3>By Alberto Basalo</h3>
  <p>
   <a href="https://twitter.com/albertobasalo" target="blank"><img src="https://img.shields.io/twitter/follow/albertobasalo?logo=twitter&style=for-the-badge" alt="albertobasalo" /></a>
  </p>
</footer>
