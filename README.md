# ZARA WEB CHALLENGE
This project is deployed [here](https://zara-web-challenge-marvel.vercel.app/)

## Development
### Env variables
<details>
  <summary>Expand</summary>

```bash
MARVEL_PUBLIC_KEY="8c7a0326ecf5c36f3d3aaa51e3996bb6"
MARVEL_PRIVATE_KEY="80718026b8dbb764ac02058d12dd81751ca7f704"
```

</details>

Steps to start app on development

1. Clone repository and open it
2. Copy **.env.template** and rename to **.env**
3. Replace environment variables
4. Install dependencies
```bash
npm install
```
5. Run the development server:
```bash
npm run dev
```
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker
Steps to build docker image and run it

1. Clone repository and open it
2. Copy **.env.template** and rename to **.env**
3. Replace environment variables
4. Run this commands
```
docker build -t marvel-characters-zara .

docker run -p 3000:3000 --name characters-nextjs marvel-characters-zara
```

# About the project
## Technologies used
- [React v18](https://react.dev/)
- [Next.js v14](https://nextjs.org/) (app router)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Styled components](https://styled-components.com/)
- [use-debounce](https://www.npmjs.com/package/use-debounce)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)


## Folder structure
<details>
  <summary>Expand</summary>

```bash
└── 📁zara-web-challenge-marvel
    └── .dockerignore
    └── .env.template # Template for .env file
    └── .eslintrc.json
    └── .gitignore
    └── Dockerfile
    └── README.md
    └── next.config.mjs
    └── package-lock.json
    └── package.json
    └── postcss.config.js
    └── 📁public # Static assets
        └── marvel.svg
    └── 📁src # Application code
        └── 📁app # App router folder
            └── 📁characters
                └── 📁[id]
                    └── page.tsx # Details Page
                └── 📁__tests__
                    └── CharactersLayout.test.tsx
                └── 📁favorites
                    └── page.tsx 
                └── layout.tsx
                └── page.tsx
            └── error.tsx
            └── favicon.ico
            └── globals.css
            └── layout.tsx
            └── not-found.tsx
            └── page.tsx
            └── providers.tsx
        └── 📁components # Shared components between features
            └── Counter.tsx
            └── HeartIconFilled.tsx
            └── HeartIconOutline.tsx
            └── SearchBar.tsx
            └── SearchIcon.tsx
            └── TopMenu.tsx
            └── 📁__tests__
                └── Counter.test.tsx
                └── HeartIconFilled.test.tsx
                └── HeartIconOutline.test.tsx
                └── SearchIcon.test.tsx
                └── TopMenu.test.tsx
            └── index.ts
        └── 📁features # Features folder to separate features in the future
            └── 📁characters
                └── 📁adapters # Adapters between api response and app entities
                    └── 📁__tests__
                        └── character.test.ts
                        └── comics.test.ts
                    └── character.ts
                    └── comics.ts
                    └── constants.ts
                    └── index.ts
                └── 📁api # Code to connect to api endpoints
                    └── 📁__mocks__
                        └── characters.ts
                        └── comics.ts
                    └── 📁__tests__
                        └── helpers.test.ts
                    └── constants.ts
                    └── helpers.ts
                    └── 📁interfaces
                        └── characters.interface.ts
                        └── comics.interface.ts
                    └── marvel-api.ts
                └── 📁components # Characters only components
                    └── CharacterCard.tsx
                    └── CharacterResume.tsx
                    └── CharactersGrid.tsx
                    └── ComicCard.tsx
                    └── ComicsList.tsx
                    └── FavoriteIcon.tsx
                    └── FavoritesCounter.tsx
                    └── 📁__tests__
                        └── CharacterCard.test.tsx
                        └── CharacterResume.test.tsx
                        └── CharactersGrid.test.tsx
                        └── ComicCard.test.tsx
                        └── ComicsList.test.tsx
                        └── FavoriteIcon.test.tsx
                        └── FavoritesCounter.test.tsx
                    └── index.ts
                    └── 📁styles # Styled components
                        └── StyledCharacterCard.tsx
                        └── StyledCharacterResume.tsx
                        └── StyledComicCard.tsx
                └── 📁context # Contexts
                    └── favorites.tsx
                └── 📁hooks # Custom hooks
                    └── useSearch.tsx
                └── 📁models # Model entities
                    └── character.ts
                    └── comic.ts
                    └── index.ts
        └── 📁styles # Global styles utils and constants
            └── globals.ts
            └── registry.tsx
            └── styled.d.ts
            └── theme.ts
        └── 📁utils # Utils for tests
            └── setupTest.ts
            └── test-utils.tsx
    └── tailwind.config.ts
    └── tsconfig.json
    └── vitest.config.mts # Vitest config
```
Folders named `__tests__` are for tests of that section

Folders named `__mocks__` are for mocks of that section

</details>

## Tradeoffs
- With more time I would have added pagination for the characters, adding a pagination component below the page or a load more button