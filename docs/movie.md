# Movie API

## Base URL

```
https://any-api.vercel.app/movies
```

## Endpoints

<details>
  <summary><h3>Movies</h3></summary>

- <details>
    <summary><h4>Get all movies</h4></summary>

  Returns all movies with pagination. You can also search for movies by providing a query parameter.

  ```http
  GET /movies
  ```

  ##### Parameters

  |  Name   |   Type   | Description                  | Required | Default |
  | :-----: | :------: | ---------------------------- | :------: | :-----: |
  | `page`  | `number` | The page number              |   :x:    |   `1`   |
  | `limit` | `number` | The number of items per page |   :x:    |  `10`   |
  | `query` | `string` | The search query             |   :x:    |    -    |

  ##### Success Response

  ```json
  {
    "message": "Movies fetched successfully",
    "page": 1,
    "limit": 2,
    "totalPages": 4,
    "totalData": 8,
    "data": [
      {
        "id": 1,
        "title": "Avatar",
        "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission...",
        "price": 10000,
        "releaseDate": "2009-12-18",
        "ageRating": 13,
        "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "createdAt": "2024-01-03T05:36:01.819Z",
        "updatedAt": "2024-01-03T05:36:01.819Z"
      },
      {
        "id": 2,
        "title": "I Am Legend",
        "description": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
        "price": 10000,
        "releaseDate": "2007-12-14T00:00:00.000Z",
        "ageRating": 13,
        "poster": "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "createdAt": "2024-06-01T17:29:39.301Z",
        "updatedAt": "2024-06-01T17:29:39.301Z"
      }
    ]
  }
  ```

  </details>

- <details>
    <summary><h4>Get a movie</h4></summary>

  Returns a movie by its ID.

  ```http
  GET /movies/:id
  ```

  ##### Parameters

  | Name |   Type   | Description  |      Required      | Default |
  | :--: | :------: | ------------ | :----------------: | :-----: |
  | `id` | `number` | The movie ID | :heavy_check_mark: |    -    |

  ##### Success Response

  ```json
  {
    "message": "Movie fetched successfully",
    "data": {
      "id": 1,
      "title": "Avatar",
      "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission...",
      "price": 10000,
      "releaseDate": "2009-12-18",
      "ageRating": 13,
      "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "createdAt": "2024-01-03T05:36:01.819Z",
      "updatedAt": "2024-01-03T05:36:01.819Z"
    }
  }
  ```

  ##### Error Response

  - Movie not found

    **Status:** 404\
    **Status Text:** Movie not found

    </details>

</details>

<details>
  <summary><h3>Auth</h3></summary>

- <details>
    <summary><h4>Login</h4></summary>

  Authenticating user

  ```http
  POST /login
  ```

  ##### Body

  **Content-Type:** `application/json`

  |    Name    |   Type   | Description |      Required      | Default |
  | :--------: | :------: | ----------- | :----------------: | :-----: |
  | `username` | `string` | Username    | :white_check_mark: |    -    |
  | `password` | `string` | Password    | :white_check_mark: |    -    |

  ##### Success Response

  ```json
  {
    "message": "User login successfully",
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE3NTkyMjI3fQ.6NPkITZXL88T7KiGGDFZmUvO0glw7FodkqACRZiC0dg"
  }
  ```

  ##### Error Response

  - Invalid username or password

    **Status:** 401\
    **Status Text:** Invalid username or password

  </details>

- <details>
      <summary><h4>Signup</h4></summary>

  Registering a new user

  ```http
  POST /signup
  ```

  ##### Body

  **Content-Type:** `application/json`

  |    Name     |   Type   | Description |      Required      | Default |
  | :---------: | :------: | ----------- | :----------------: | :-----: |
  |   `name`    | `string` | Name        | :white_check_mark  |    -    |
  | `username`  | `string` | Username    | :white_check_mark: |    -    |
  |   `email`   | `string` | Email       | :white_check_mark: |    -    |
  | `password`  | `string` | Password    | :white_check_mark: |    -    |
  | `birthDate` | `string` | Birth date  | :white_check_mark: |    -    |

  ##### Success Response

  ```json
  {
    "message": "User created successfully",
    "data": {
      "id": 2,
      "name": "Malik Matoha",
      "username": "malik",
      "email": "malik@email.com",
      "birthDate": "2003-10-04T00:00:00.000Z",
      "balance": 100000,
      "orders": [],
      "createdAt": "2024-06-06T11:39:52.427Z",
      "updatedAt": "2024-06-06T11:39:52.427Z"
    }
  }
  ```

  ##### Error Response

  - Empty fields

    **Status:** 400\
    **Status Text:** All fields are required

  - Username already taken

    **Status:** 400\
    **Status Text:** Username is already taken

  - Email already taken

    **Status:** 400\
    **Status Text:** Email is already taken

    </details>

</details>

<details>
  <summary><h3>User</h3></summary>

- <details>
    <summary><h4>Profile</h4></summary>

  Returns the user profile

  ```http
  GET /me
  ```

  ##### Body

  **Authorization:** `Bearer <token>`

  ##### Success Response

  ```json
  {
    "message": "User fetched successfully",
    "data": {
      "id": 1,
      "name": "Fauzan",
      "username": "fauzan",
      "email": "fauzan@email.com",
      "birthDate": "2003-10-04T00:00:00.000Z",
      "balance": 100000,
      "orders": [],
      "createdAt": "2024-06-06T11:17:43.794Z",
      "updatedAt": "2024-06-06T11:17:43.794Z"
    }
  }
  ```

  ##### Error Response

  - Token not provided

    **Status:** 401\
    **Status Text:** Token not provided

  - User not found

    **Status:** 401\
    **Status Text:** User not found

  </details>

</details>

## Schema

<details>
  <summary><h3>Movie</h3></summary>

```typescript
type Movie = {
  id: number;
  title: string;
  description: string;
  price: number;
  releaseDate: Date;
  ageRating: number;
  poster: string;
  createdAt: string;
  updatedAt: string;
};
```

</details>

<details>
  <summary><h3>User</h3></summary>

```typescript
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  password: number;
  birthDate: Date;
  balance: number;
  createdAt: string;
  updatedAt: string;
};
```

</details>
