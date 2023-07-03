# POC - TS

## Routes

Routes with `*` must be authenticated with header:

```json
{
  "Authentication": "Bearer token"
}
```

### POST `/signup`

- Body:

```json
{
  "username": "username",
  "password": "password",
  "image": "https://example.png"
}
```

- Response:

```json
Created
```

### POST `/signin`

- Body:

```json
{
  "username": "username",
  "password": "password"
}
```

- Response:

```json
{
  "token": "token"
}
```

### POST `/posts` *

- Body:

```json
{
  "content": "content"
} 
```

- Response:

```json
Created
```

### GET `/posts`

- Response:

```json
[
  {
    "id": 1,
    "content": "content",
    "likes": 10,
    "createdAt": "2023-07-03T15:51:07.493Z",
    "updatedAt": "2023-07-03T15:51:07.493Z",
    "author": {
      "username": "username",
      "image": "https://example.png"
    },
    "replies": [
      {
        "id": 1,
        "content": "content",
        "likes": 3,
        "createdAt": "2023-07-03T16:15:15.451Z",
        "updatedAt": "2023-07-03T16:15:15.451Z",
        "author": {
          "username": "username",
          "image": "https://example.png"
        }
      }
    ]
  }
]
```

### GET `/posts/:idPost`

- Response:

```json
{
  "id": 1,
  "content": "content",
  "likes": 10,
  "createdAt": "2023-07-03T15:51:07.493Z",
  "updatedAt": "2023-07-03T15:51:07.493Z",
  "author": {
    "username": "username",
    "image": "https://example.png"
  },
  "replies": [
    {
      "id": 1,
      "content": "content",
      "likes": 3,
      "createdAt": "2023-07-03T16:15:15.451Z",
      "updatedAt": "2023-07-03T16:15:15.451Z",
      "author": {
        "username": "username",
        "image": "https://example.png"
      }
    }
  ]
}
```

### PATCH `/posts/like/:idPost`

- Increase like count for post

### DELETE `/posts/:idPost` *

- Delete post

### POST `/reply/:idPost` *

- Body:

```json
{
  "content": "content"
} 
```

- Response:

```json
Created
```

### GET `/reply/:idPost`

- Response:

```json
[
  {
    "id": 1,
    "content": "content",
    "likes": 0,
    "createdAt": "2023-07-03T16:15:16.167Z",
    "updatedAt": "2023-07-03T16:15:16.167Z",
    "author": {
      "username": "username",
      "image": "https://example.png"
    }
  }
]
```

### PATCH `/reply/like/:idPost`

- Increase like count for reply

### DELETE `/reply/:idPost` *

- Delete reply
