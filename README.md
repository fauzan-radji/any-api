<h1 align="center">Any Api</h1>

<p align="center">
  Contains any rest apis that I need, and maybe you need too.
</p>
<p align="center">
  <a href="https://any-apis.vercel.app">View Docs</a>
  ·
  <a href="https://github.com/fauzan-radji/any-api/issues">Report Bug</a>
  ·
  <a href="https://github.com/fauzan-radji/any-api/issues">Request Feature</a>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
- [APIs](#apis)
- [Technologies](#technologies)
- [Installation](#installation)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## About the Project

Any Api is a project that contains any rest apis that I need, and maybe you need too. This project is built using Next.js and deployed on Vercel. See the [list of APIs](#apis) below.

<p align="right"><a href="#table-of-contents">⬆️ Back to table of contents</a></p>

## APIs

- [ ] [Movie API](./docs/movie.md)

<p align="right"><a href="#table-of-contents">⬆️ Back to table of contents</a></p>

## Technologies

- [![Next.js][nextjs-badge]][nextjs-url]
- [![Vercel][vercel-badge]][vercel-url]

<p align="right"><a href="#table-of-contents">⬆️ Back to table of contents</a></p>

## Installation

1. Clone the repository

   ```bash
   # https
   git clone https://github.com/fauzan-radji/any-api.git

   # ssh
   git clone git@github.com:fauzan-radji/any-api.git
   ```

2. Copy `.env.local.example` and rename to `.env.local`

   ```bash
   cp .env.local.example .env.local
   ```

3. Fill in the environment variables in the `.env.local` file

   ```env
   DB_SEED_KEY=your_seed_key
   JWT_SECRET=your_jwt_secret
   SALT_ROUNDS=10
   ENVIRONMENT=development
   ```

   Change `your_seed_key` with your own seed key. You can put literally anything here, but make sure it's a secret because it will be used to seed the database via the API. If you have better suggestions for this, please [let me know][issue]. The `JWT_SECRET` is used to sign the JWT token. The `SALT_ROUNDS` is used to hash the password. The `ENVIRONMENT` is used to determine the environment of the app change it to `production` when deploying to production.

4. If you deploy this to vercel, you need to set the `JSON_MODELIZER_DATAPATH` to `/tmp/data` since vercel doesn't allow writing to the filesystem.

   ```env
   JSON_MODELIZER_DATAPATH=/tmp/data
   ```

5. Install the dependencies

   ```bash
   cd any-api
   npm install
   ```

6. Run the development server

   ```bash
   npm run dev
   ```

7. Create a `POST` request to `http://localhost:3000/seed` with the following body to seed the database. Change `your_seed_key` with the seed key you set in the `.env.local` file. If you have better suggestions for this, please [let me know][issue].

   ```json
   {
     "key": "your_seed_key"
   }
   ```

8. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<p align="right"><a href="#table-of-contents">⬆️ Back to table of contents</a></p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please [fork the repo][fork] and [create a pull request][pull-request]. You can also simply [open an issue][issue] with the tag `enhancement`.
Don't forget to give the project a star! Thanks again!

1. [Fork the Project][fork]
2. Create your Feature Branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your Changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the Branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. [Open a Pull Request][pull-request]

<p align="right"><a href="#table-of-contents">⬆️ Back to table of contents</a></p>

## Acknowledgements

- [![Next.js][nextjs-badge]][nextjs-url]
- [![Vercel][vercel-badge]][vercel-url]

<p align="right"><a href="#table-of-contents">⬆️ Back to table of contents</a></p>

## Contact

Fauzan Radji - [LinkedIn](https://www.linkedin.com/in/tri-putra-fauzan-h-radji-404810257/)

Project Link: [https://any-api.vercel.app](https://any-api.vercel.app)

<p align="right"><a href="#table-of-contents">⬆️ Back to table of contents</a></p>

[fork]: https://github.com/fauzan-radji/any-api/fork/
[pull-request]: https://github.com/fauzan-radji/any-api/pulls/
[issue]: https://github.com/fauzan-radji/any-api/issues/
[firebase-console]: https://console.firebase.google.com/
[nextjs-url]: https://nextjs.org/
[vercel-url]: https://vercel.com/
[nextjs-badge]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[vercel-badge]: https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
