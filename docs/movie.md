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

  - **404**

    ```json
    {
      "message": "Movie not found"
    }
    ```

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
