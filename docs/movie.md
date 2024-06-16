# Movie API

## Base URL

```
https://any-apis.vercel.app/movies
```

## Endpoints

<details>
  <summary><h3>Movies</h3></summary>

<!-- Start | Get all movies -->

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
        "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "price": 10000,
        "releaseDate": "2009-12-18T00:00:00.000Z",
        "ageRating": 13,
        "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "seats": [
          {
            "id": 1,
            "number": 2,
            "isReserved": true,
            "movieId": 1,
            "createdAt": "2024-06-06T17:49:28.854Z",
            "updatedAt": "2024-06-06T17:49:28.854Z"
          },
          {
            "id": 2,
            "number": 3,
            "isReserved": true,
            "movieId": 1,
            "createdAt": "2024-06-06T17:49:28.876Z",
            "updatedAt": "2024-06-06T17:49:28.876Z"
          },
        ],
        "createdAt": "2024-06-06T12:00:26.003Z",
        "updatedAt": "2024-06-06T12:00:26.003Z"
      },
      {
        "id": 2,
        "title": "I Am Legend",
        "description": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
        "price": 10000,
        "releaseDate": "2007-12-14T00:00:00.000Z",
        "ageRating": 13,
        "poster": "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "seats": [
          {
            "id": 3,
            "number": 4,
            "isReserved": true,
            "movieId": 2,
            "createdAt": "2024-06-06T17:50:46.676Z",
            "updatedAt": "2024-06-06T17:50:46.676Z"
          },
          {
            "id": 4,
            "number": 5,
            "isReserved": true,
            "movieId": 2,
            "createdAt": "2024-06-06T17:50:46.715Z",
            "updatedAt": "2024-06-06T17:50:46.715Z"
          }
        ]
        "createdAt": "2024-06-01T17:29:39.301Z",
        "updatedAt": "2024-06-01T17:29:39.301Z"
      }
    ]
  }
  ```

  </details>

<!-- End | Get all movies -->

<!-- Start | Get a movie -->

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
      "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "price": 10000,
      "releaseDate": "2009-12-18T00:00:00.000Z",
      "ageRating": 13,
      "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "seats": [
        {
          "id": 1,
          "number": 2,
          "isReserved": true,
          "movieId": 1,
          "createdAt": "2024-06-06T17:49:28.854Z",
          "updatedAt": "2024-06-06T17:49:28.854Z"
        },
        {
          "id": 2,
          "number": 3,
          "isReserved": true,
          "movieId": 1,
          "createdAt": "2024-06-06T17:49:28.876Z",
          "updatedAt": "2024-06-06T17:49:28.876Z"
        }
      ],
      "createdAt": "2024-06-06T12:00:26.003Z",
      "updatedAt": "2024-06-06T12:00:26.003Z"
    }
  }
  ```

  ##### Error Response

  - Movie not found

    **Status:** 404\
     **Status Text:** Movie not found

  </details>

<!-- End | Get a movie -->

<!-- Start | Get seats movie -->

- <details>
    <summary><h4>Get seats of a movie</h4></summary>

  Returns seats of a movie.

  ```http
  GET /movies/:id/seats
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
      "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "price": 10000,
      "releaseDate": "2009-12-18T00:00:00.000Z",
      "ageRating": 13,
      "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "seats": [
        {
          "id": 1,
          "number": 2,
          "isReserved": true,
          "movieId": 1,
          "createdAt": "2024-06-06T17:49:28.854Z",
          "updatedAt": "2024-06-06T17:49:28.854Z"
        },
        {
          "id": 2,
          "number": 3,
          "isReserved": true,
          "movieId": 1,
          "createdAt": "2024-06-06T17:49:28.876Z",
          "updatedAt": "2024-06-06T17:49:28.876Z"
        }
      ],
      "createdAt": "2024-06-06T12:00:26.003Z",
      "updatedAt": "2024-06-06T12:00:26.003Z"
    }
  }
  ```

  ##### Error Response

  - Movie not found

    **Status:** 404\
    **Status Text:** Movie not found

  </details>

<!-- End | Get seats movie -->

<!-- Start | Books seats of a movie -->

- <details>
    <summary><h4>Books seats of a movie</h4></summary>

  Books seats of a movie.

  ```http
  POST /movies/:id/seats
  ```

  ##### Parameters

  | Name |   Type   | Description  |      Required      | Default |
  | :--: | :------: | ------------ | :----------------: | :-----: |
  | `id` | `number` | The movie ID | :heavy_check_mark: |    -    |

  ##### Header

  **Authorization:** `Bearer <token>`\
  **Content-Type:** `application/json`

  ##### Body

  |  Name   |    Type    | Description            |      Required      | Default |
  | :-----: | :--------: | ---------------------- | :----------------: | :-----: |
  | `seats` | `number[]` | Seat number to reserve | :white_check_mark: |    -    |

  ##### Success Response

  ```json
  {
    "message": "Success",
    "data": {
      "id": 3,
      "total": 20000,
      "tickets": [
        {
          "id": 11,
          "isCancelled": false,
          "seatId": 11,
          "seat": {
            "id": 11,
            "number": 20,
            "isReserved": true,
            "movieId": 1,
            "movie": {
              "id": 1,
              "title": "Avatar",
              "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
              "price": 10000,
              "releaseDate": "2009-12-18T00:00:00.000Z",
              "ageRating": 13,
              "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
              "createdAt": "2024-06-16T09:16:30.257Z",
              "updatedAt": "2024-06-16T09:16:30.257Z"
            },
            "createdAt": "2024-06-16T09:22:44.932Z",
            "updatedAt": "2024-06-16T09:22:44.932Z"
          },
          "orderId": 3,
          "createdAt": "2024-06-16T09:22:45.088Z",
          "updatedAt": "2024-06-16T09:22:45.088Z"
        },
        {
          "id": 12,
          "isCancelled": false,
          "seatId": 12,
          "seat": {
            "id": 12,
            "number": 21,
            "isReserved": true,
            "movieId": 1,
            "movie": {
              "id": 1,
              "title": "Avatar",
              "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
              "price": 10000,
              "releaseDate": "2009-12-18T00:00:00.000Z",
              "ageRating": 13,
              "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
              "createdAt": "2024-06-16T09:16:30.257Z",
              "updatedAt": "2024-06-16T09:16:30.257Z"
            },
            "createdAt": "2024-06-16T09:22:45.285Z",
            "updatedAt": "2024-06-16T09:22:45.285Z"
          },
          "orderId": 3,
          "createdAt": "2024-06-16T09:22:45.391Z",
          "updatedAt": "2024-06-16T09:22:45.391Z"
        }
      ],
      "userId": 1,
      "user": {
        "id": 1,
        "name": "Fauzan",
        "username": "fauzan",
        "email": "fauzan@email.com",
        "birthDate": "2003-10-04T00:00:00.000Z",
        "balance": 0,
        "createdAt": "2024-06-16T09:16:30.542Z",
        "updatedAt": "2024-06-16T09:22:44.827Z"
      },
      "createdAt": "2024-06-16T09:22:44.842Z",
      "updatedAt": "2024-06-16T09:22:44.842Z"
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

  - Movie not found

    **Status:** 404\
    **Status Text:** Movie not found

  - Balance not enough

    **Status:** 400\
    **Status Text:** Balance not enough

  - Provided invalid or empty seats

    **Status:** 400\
    **Status Text:** Invalid seats

  - Seat's already reserved

    **Status:** 400\
    **Status Text:** Seat 1 of movie Avatar is already reserved

  </details>

<!-- End | Books seats of a movie -->

</details>

<details>
  <summary><h3>Auth</h3></summary>

<!-- Start | Login -->

- <details>
    <summary><h4>Login</h4></summary>

  Authenticating user

  ```http
  POST /login
  ```

  ##### Header

  **Content-Type:** `application/json`

  ##### Body

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

<!-- End | Login -->

<!-- Start | Register -->

- <details>
    <summary><h4>Register</h4></summary>

  Registering a new user

  ```http
  POST /register
  ```

  ##### Header

  **Content-Type:** `application/json`

  ##### Body

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

<!-- End | Register -->

</details>

<details>
  <summary><h3>User</h3></summary>

<!-- Start | Profile -->

- <details>
    <summary><h4>Profile</h4></summary>

  Returns the user profile

  ```http
  GET /me
  ```

  ##### Headers

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

<!-- End | Profile -->

</details>

<details>
  <summary><h3>Orders</h3></summary>

<!-- Start | Get all orders -->

- <details>
    <summary><h4>Get all orders</h4></summary>

  Returns all orders.

  ```http
  GET /orders
  ```

  ##### Header

  **Authorization:** `Bearer <token>`

  ##### Success Response

  ```json
  {
    "message": "Orders fetched successfully",
    "data": [
      {
        "id": 1,
        "tickets": [
          {
            "id": 1,
            "isCancelled": false,
            "seatId": 1,
            "seat": {
              "id": 1,
              "number": 4,
              "isReserved": true,
              "movieId": 2,
              "movie": {
                "id": 2,
                "title": "I Am Legend",
                "description": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
                "price": 10000,
                "releaseDate": "2007-12-14T00:00:00.000Z",
                "ageRating": 13,
                "poster": "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
                "createdAt": "2024-06-10T08:14:50.737Z",
                "updatedAt": "2024-06-10T08:14:50.737Z"
              },
              "tickets": [
                {
                  "id": 1,
                  "isCancelled": false,
                  "seatId": 1,
                  "orderId": 1,
                  "createdAt": "2024-06-10T10:48:29.778Z",
                  "updatedAt": "2024-06-10T10:48:29.778Z"
                }
              ],
              "createdAt": "2024-06-10T10:48:29.774Z",
              "updatedAt": "2024-06-10T10:48:29.774Z"
            },
            "orderId": 1,
            "createdAt": "2024-06-10T10:48:29.778Z",
            "updatedAt": "2024-06-10T10:48:29.778Z"
          },
          {
            "id": 2,
            "isCancelled": false,
            "seatId": 2,
            "seat": {
              "id": 2,
              "number": 5,
              "isReserved": true,
              "movieId": 2,
              "movie": {
                "id": 2,
                "title": "I Am Legend",
                "description": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
                "price": 10000,
                "releaseDate": "2007-12-14T00:00:00.000Z",
                "ageRating": 13,
                "poster": "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
                "createdAt": "2024-06-10T08:14:50.737Z",
                "updatedAt": "2024-06-10T08:14:50.737Z"
              },
              "tickets": [
                {
                  "id": 2,
                  "isCancelled": false,
                  "seatId": 2,
                  "orderId": 1,
                  "createdAt": "2024-06-10T10:48:29.792Z",
                  "updatedAt": "2024-06-10T10:48:29.792Z"
                }
              ],
              "createdAt": "2024-06-10T10:48:29.784Z",
              "updatedAt": "2024-06-10T10:48:29.784Z"
            },
            "orderId": 1,
            "createdAt": "2024-06-10T10:48:29.792Z",
            "updatedAt": "2024-06-10T10:48:29.792Z"
          }
        ],
        "userId": 1,
        "user": {
          "id": 1,
          "name": "Fauzan Radji",
          "username": "fauzan",
          "email": "fauzan@email.com",
          "birthDate": "2024-06-10T00:00:00.000Z",
          "balance": 100000,
          "createdAt": "2024-06-10T11:38:37.220Z",
          "updatedAt": "2024-06-10T11:38:37.220Z"
        },
        "createdAt": "2024-06-10T10:48:29.770Z",
        "updatedAt": "2024-06-10T10:48:29.770Z"
      }
    ]
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

<!-- End | Get all orders -->

<!-- Start | Get an order -->

- <details>
    <summary><h4>Get an order</h4></summary>

  Returns an order by its ID.

  ```http
  GET /orders/:id
  ```

  ##### Parameters

  | Name |   Type   | Description |      Required      | Default |
  | :--: | :------: | ----------- | :----------------: | :-----: |
  | `id` | `number` | Order ID    | :heavy_check_mark: |    -    |

  ##### Header

  **Authorization:** `Bearer <token>`

  ##### Success Response

  ```json
  {
    "message": "Order fetched successfully",
    "data": {
      "id": 1,
      "total": 100000,
      "tickets": [
        {
          "id": 1,
          "isCancelled": false,
          "seatId": 1,
          "seat": {
            "id": 1,
            "number": 1,
            "isReserved": true,
            "movieId": 1,
            "movie": {
              "id": 1,
              "title": "Avatar",
              "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
              "price": 10000,
              "releaseDate": "2009-12-18T00:00:00.000Z",
              "ageRating": 13,
              "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
              "createdAt": "2024-06-11T00:43:19.750Z",
              "updatedAt": "2024-06-11T00:43:19.750Z"
            },
            "createdAt": "2024-06-11T00:51:23.470Z",
            "updatedAt": "2024-06-11T00:51:23.470Z"
          },
          "orderId": 1,
          "createdAt": "2024-06-11T00:51:23.481Z",
          "updatedAt": "2024-06-11T00:51:23.481Z"
        }
      ],
      "userId": 1,
      "user": {
        "id": 1,
        "name": "fauzan",
        "username": "fauzan",
        "email": "fauzan@email.com",
        "birthDate": "2024-06-11T00:00:00.000Z",
        "balance": 100000,
        "createdAt": "2024-06-11T00:46:12.151Z",
        "updatedAt": "2024-06-11T00:46:12.151Z"
      },
      "createdAt": "2024-06-11T00:51:23.464Z",
      "updatedAt": "2024-06-11T00:51:23.464Z"
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

  - Invalid id or user doesn't have access to the order

    **Status:** 404\
    **Status Text:** Order not found

  </details>

<!-- End | Get an order -->

</details>

<details>
  <summary><h3>Tickets</h3></summary>

<!-- Start | Get all tickets -->

- <details>
  <summary><h4>Get all tickets</h4></summary>

  Returns all tickets.

  ```http
  GET /tickets
  ```

  ##### Header

  **Authorization:** `Bearer <token>`

  ##### Success Response

  ```json
  {
    "message": "Tickets fetched successfully",
    "data": [
      {
        "id": 1,
        "isCancelled": false,
        "seatId": 1,
        "seat": {
          "id": 1,
          "number": 1,
          "isReserved": true,
          "movieId": 1,
          "movie": {
            "id": 1,
            "title": "Avatar",
            "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            "price": 10000,
            "releaseDate": "2009-12-18T00:00:00.000Z",
            "ageRating": 13,
            "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
            "createdAt": "2024-06-11T00:43:19.750Z",
            "updatedAt": "2024-06-11T00:43:19.750Z"
          },
          "createdAt": "2024-06-11T00:51:23.470Z",
          "updatedAt": "2024-06-11T00:51:23.470Z"
        },
        "orderId": 1,
        "order": {
          "id": 1,
          "total": 100000,
          "userId": 1,
          "user": {
            "id": 1,
            "name": "fauzan",
            "username": "fauzan",
            "email": "fauzan@email.com",
            "birthDate": "2024-06-11T00:00:00.000Z",
            "balance": 100000,
            "createdAt": "2024-06-11T00:46:12.151Z",
            "updatedAt": "2024-06-11T00:46:12.151Z"
          },
          "createdAt": "2024-06-11T00:51:23.464Z",
          "updatedAt": "2024-06-11T00:51:23.464Z"
        },
        "createdAt": "2024-06-11T00:51:23.481Z",
        "updatedAt": "2024-06-11T00:51:23.481Z"
      }
    ]
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

<!-- End | Get all tickets -->

<!-- Start | Get a ticket -->

- <details>
  <summary><h4>Get a ticket</h4></summary>

  Returns a ticket by its ID.

  ```http
  GET /tickets/:id
  ```

  ##### Parameters

  | Name |   Type   | Description |      Required      | Default |
  | :--: | :------: | ----------- | :----------------: | :-----: |
  | `id` | `number` | Ticket ID   | :heavy_check_mark: |    -    |

  ##### Header

  **Authorization:** `Bearer <token>`

  ##### Success Response

  ```json
  {
    "message": "Ticket fetched successfully",
    "data": {
      "id": 1,
      "isCancelled": false,
      "seatId": 1,
      "seat": {
        "id": 1,
        "number": 1,
        "isReserved": true,
        "movieId": 1,
        "movie": {
          "id": 1,
          "title": "Avatar",
          "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
          "price": 10000,
          "releaseDate": "2009-12-18T00:00:00.000Z",
          "ageRating": 13,
          "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
          "createdAt": "2024-06-11T00:43:19.750Z",
          "updatedAt": "2024-06-11T00:43:19.750Z"
        },
        "createdAt": "2024-06-11T00:51:23.470Z",
        "updatedAt": "2024-06-11T00:51:23.470Z"
      },
      "orderId": 1,
      "order": {
        "id": 1,
        "total": 100000,
        "userId": 1,
        "user": {
          "id": 1,
          "name": "fauzan",
          "username": "fauzan",
          "email": "fauzan@email.com",
          "birthDate": "2024-06-11T00:00:00.000Z",
          "balance": 100000,
          "createdAt": "2024-06-11T00:46:12.151Z",
          "updatedAt": "2024-06-11T00:46:12.151Z"
        },
        "createdAt": "2024-06-11T00:51:23.464Z",
        "updatedAt": "2024-06-11T00:51:23.464Z"
      },
      "createdAt": "2024-06-11T00:51:23.481Z",
      "updatedAt": "2024-06-11T00:51:23.481Z"
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

  - Invalid id or user doesn't have access to the ticket

    **Status:** 404\
    **Status Text:** Ticket not found

  </details>

<!-- End | Get a ticket -->

<!-- Start | Cancel a ticket -->

- <details>
    <summary><h4>Cancel a ticket</h4></summary>

  Cancel a ticket by its ID.

  ```http
  DELETE /tickets/:id
  ```

  ##### Parameters

  | Name |   Type   | Description |      Required      | Default |
  | :--: | :------: | ----------- | :----------------: | :-----: |
  | `id` | `number` | Ticket ID   | :heavy_check_mark: |    -    |

  ##### Header

  **Authorization:** `Bearer <token>`

  ##### Success Response

  ```json
  {
    "message": "Ticket cancelled and refunded successfully",
    "data": {
      "id": 2,
      "isCancelled": true,
      "seatId": 11,
      "seat": {
        "id": 11,
        "number": 3,
        "isReserved": false,
        "movieId": 4,
        "movie": {
          "id": 4,
          "title": "The Avengers",
          "description": "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
          "price": 10000,
          "releaseDate": "2012-05-04T00:00:00.000Z",
          "ageRating": 13,
          "poster": "https://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
          "createdAt": "2024-06-11T00:43:19.764Z",
          "updatedAt": "2024-06-11T00:43:19.764Z"
        },
        "createdAt": "2024-06-16T08:51:42.442Z",
        "updatedAt": "2024-06-16T09:06:05.062Z"
      },
      "orderId": 2,
      "order": {
        "id": 2,
        "total": 40000,
        "userId": 1,
        "user": {
          "id": 1,
          "name": "fauzan",
          "username": "fauzan",
          "email": "fauzan@email.com",
          "birthDate": "2024-06-11T00:00:00.000Z",
          "balance": 170000,
          "createdAt": "2024-06-11T00:46:12.151Z",
          "updatedAt": "2024-06-16T09:06:05.180Z"
        },
        "createdAt": "2024-06-16T08:51:42.419Z",
        "updatedAt": "2024-06-16T08:51:42.419Z"
      },
      "createdAt": "2024-06-16T08:51:42.518Z",
      "updatedAt": "2024-06-16T08:51:42.518Z"
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

  - Invalid id or user doesn't have access to the ticket

    **Status:** 404\
    **Status Text:** Ticket not found

  - Ticket already cancelled

    **Status:** 400\
    **Status Text:** Ticket is already cancelled

  </details>

<!-- End | Cancel a ticket -->

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

  seats: Seat[];
};
```

</details>

<details>
  <summary><h3>Seat</h3></summary>

```typescript
type Seat = {
  id: number;
  number: number;
  isReserved: boolean;
  createdAt: string;
  updatedAt: string;

  movieId: number;
  movie: Movie;

  tickets: Ticket[];
};
```

</details>

<details>
  <summary><h3>Ticket</h3></summary>

```typescript
type Ticket = {
  id: number;
  isCancelled: boolean;
  createdAt: string;
  updatedAt: string;

  seatId: number;
  seat: Seat;

  orderId: number;
  order: Order;
};
```

</details>

<details>
  <summary><h3>Order</h3></summary>

```typescript
type Order = {
  id: number;
  createdAt: string;
  updatedAt: string;

  tickets: Ticket[];

  userId: number;
  user: User;
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

  orders: Order[];
};
```

</details>
