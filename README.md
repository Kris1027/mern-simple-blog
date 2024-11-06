# MERN Simple Blog

`live` : <https://mern-simple-blog-lks9.onrender.com/>

### Instance will spin down with inactivity, which can delay requests by 50 seconds or more.

### The MERN Simple Blog project is a full-stack application built using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. The application allows users to create, read, update, and delete articles, providing a simple blogging platform.

## Server-Side (Node.js and Express)

### 1. Project Structure

-   The server-side is built using Node.js and Express.js. The main entry point is `server/server.js`, which sets up the Express - application and connects to the MongoDB database.

### 2. Database Connection

-   The application connects to MongoDB using Mongoose, with the connection logic defined in `server/config/db.js`.

### 3. API Routes

-   The API routes for handling articles are defined in `server/routes/article.route.js`. The routes include:
-   GET `/api/articles` Fetch all articles.
-   GET `/api/articles/:id` Fetch a single article by ID.
-   POST `/api/articles` Create a new article.
-   PUT `/api/articles/:id` Update an existing article.
-   DELETE `/api/articles/:id` Delete an article.

### 4. Controllers

-   The logic for handling requests is separated into controllers defined in `server/controllers/article.controller.js`. Each controller function handles the respective CRUD operation, including error handling and response formatting.

### 5. Error Handling

-   The server includes error handling to manage potential issues during database operations, ensuring that users receive appropriate feedback.

## Client-Side (React)

### 1. Project Structure

-   The client-side is structured using React with Vite as the build tool. The main entry point is `src/main.jsx`, which sets up the React application and routing.

### 2. Routing

-   The application uses `react-router-dom` for navigation. The routes are defined in `src/router/routes.jsx`, allowing users to navigate between the home page, article creation, and individual article pages.

### 3. Components

-   `Navbar`: The Navbar component provides navigation links, including a link to create a new article.
-   `Footer`: The Footer component displays copyright information.
-   `Article Card`: The ArticleCard component displays individual articles with options to read more, edit, or delete.
-   `Article Create Form`: The ArticleCreateForm component allows users to input article details and submit them to the server.
-   `Loading Spinner`: A simple loading spinner is displayed while data is being fetched.

### 4. State Management

-   The application uses React's built-in state management with hooks like useState and useEffect to manage form data and loading states.

### 5. API Integration

-   The client communicates with the server using the Fetch API. API endpoints are defined in src/constants/api-endpoints.js, allowing for easy updates and maintenance.

### 6. Styling

-   The application uses Tailwind CSS for styling, providing a responsive and modern design.

## Conclusion

### The MERN Simple Blog project demonstrates a complete full-stack application, showcasing the integration of React for the front end and Node.js with Express for the back end. The use of MongoDB for data storage and Mongoose for object modeling provides a robust solution for managing articles in a blogging platform. The project is designed with a focus on user experience, performance, and maintainability.

## How to Run the Project

To run the MERN Simple Blog project, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

-   Node.js (version 14 or higher)
-   MongoDB (running locally or use a cloud service like MongoDB Atlas)

### Step 1: Clone the Repository

Clone the repository to your local machine using the following command:

````bash
git clone <repository-url>```
````

### Step 2: Set Up the Server

1. Navigate to the server directory:

    ```bash
    cd server
    ```

2. Install the server dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `server` directory and add your MongoDB connection string:

    ```plaintext
    MONGO_URI=<your_mongodb_connection_string>
    PORT=3000
    ```

4. Start the server:

    ```bash
    npm start
    ```

### Step 3: Set Up the Client

1. Open a new terminal window and navigate to the client directory:

    ```bash
    cd client
    ```

2. Install the client dependencies:

    ```bash
    npm install
    ```

3. Start the client:

    ```bash
    npm run dev
    ```

### Step 4: Access the Application

Once both the server and client are running, you can access the application in your web browser at:
`http://localhost:5173`

### Additional Notes

-   Ensure that your MongoDB server is running before starting the application.
-   If you encounter any issues, check the console for error messages and ensure all dependencies are correctly installed.
