# Posts
i made this api just to practice and fun, my idea was made a system like Twitter or Facebook. Made this api especially to practice CRUDS with Typescript and Prisma, so i made crud to user, posts, profiles etc. I don't know if that api it would have a frontend. Propably, not.

<img src="api-pics/Captura de ecrã 2024-12-12 155932.png"> 

### Technologies used 
- Typescript
- Fastify
- MongoDB
- Prisma

### Features
- __User__: CRUD to create a new user with his profile, get specific user, update and delete some user.
- __Post__: CRUD to user can create a post with some specific category, get all posts, update and delete some post you want.
- __Profile__: CRUD to search profiles by username, get all profiles, update and delete profiles.
- __Category__: CRUD to get all categories, get all posts of specific category, create a new category, update and delete.
- __Comments__: CRUD to get all comments of specific post, create a new comment, update and delete comments.

### Clone repository
```
git clone https://github.com/NuneszG/posts.git
```

> [!TIP]
> if you have Make installed in your machine, you can run api with 
>```
>make dev    
>```

### Run api
```
npm run dev
```

### Technologies to test
- Insomnia
- Postman

### Api running on
```
http://localhost:8000
```

