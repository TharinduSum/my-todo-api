This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## API Endpoints

This project includes a REST API for managing todos. Below are the available endpoints and how to test them using [Insomnia](https://insomnia.rest/).

### Base URL
`http://localhost:3000/api/todos`

### 1. Get All Todos
- **Method:** GET  
- **URL:** `http://localhost:3000/api/todos`  
- **Response:** List of all todos in JSON format.  
- **Screenshot:** `readme_images/RequestAllCollections.png`

### 2. Create a New Todo
- **Method:** POST  
- **URL:** `http://localhost:3000/api/todos`  
- **Body (JSON):**
  ```json
  {
    "title": "Learn Insomnia"
  }
  ```
- **Response:** The newly created todo item.  
- **Screenshot:** `readme_images/CreateTodo.png`

### 3. Get a Single Todo
- **Method:** GET  
- **URL:** `http://localhost:3000/api/todos/1`  
- **Response:** Details of the todo with ID `1`.  
- **Screenshot:** `readme_images/GetSingleTodo.png`

### 4. Update a Todo
- **Method:** PUT  
- **URL:** `http://localhost:3000/api/todos/1`  
- **Body (JSON):**
  ```json
  {
    "completed": true
  }
  ```
- **Response:** The updated todo item.  
- **Screenshot:** `readme_images/UpdateTodo.png`

### 5. Delete a Todo
- **Method:** DELETE  
- **URL:** `http://localhost:3000/api/todos/1`  
- **Response:** `204 No Content` (Successful deletion).  
- **Screenshot:** `readme_images/DeleteTodo.png`

### API Testing Screenshots
All API testing screenshots are available in the `readme_images` folder. The images included are:
- `CreateTodo.png`
- `DeleteTodo.png`
- `GetSingleTodo.png`
- `RequestAllCollections.png`
- `UpdateTodo.png`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
