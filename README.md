```markdown
# nodejs-mongodb-crud-api

A Node.js API for user management, utilizing MongoDB as the database. This API enables basic CRUD operations (Create, Read, Update, Delete) for user data, including name, email, and password. It provides a straightforward solution for storing and managing user information in a scalable and efficient manner.

## Getting Started

To get started with the API, follow the steps below:

### Prerequisites

- Node.js (version X.X.X or higher)
- MongoDB (installed and running)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shaffaprawira/nodejs-mongodb-crud-api.git
   ```

2. Navigate to the project's root directory:

   ```bash
   cd nodejs-mongodb-crud-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project's root directory and provide the necessary environment variables. Here's an example:

   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/userdb
   ```

   - `PORT`: The port number on which the API will run (e.g., 3000).
   - `MONGO_URI`: The connection URI for your MongoDB database.

   Note: Replace the values with your desired configuration.

5. Start the API:

   ```bash
   npm run dev
   ```

## Usage

Once the API is up and running, you can interact with it using HTTP requests. Here are the available endpoints:

- `POST /users`: Create a new user.
- `GET /users`: Get all users.
- `GET /users/:id`: Get a specific user by ID.
- `PUT /users/:id`: Update a specific user by ID.
- `DELETE /users/:id`: Delete a specific user by ID.

Make sure to use an API testing tool like Postman or cURL to send requests to the API endpoints.
