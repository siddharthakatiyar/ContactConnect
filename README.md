# ContactConnect

ContactConnect is a web application that allows users to manage their contacts. It provides a secure and user-friendly platform for storing and organizing contact information. This application is built using Node.js and Express.js for the backend, along with MongoDB as the database.

## Features

- User Registration: Users can create an account by providing their information.
- User Login: Registered users can securely log in to their accounts.
- Contact Management: Users can add, update, and delete their contacts.
- Search Functionality: Users can search for specific contacts by name or other criteria.

## Technologies Used

- Node.js
- Express.js
- MongoDB

## Getting Started

To get started with the ContactConnect application, follow the instructions below:

### Prerequisites

- Node.js and npm should be installed on your system.
- MongoDB should be installed and running.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/ContactConnect.git
   ```

2. Navigate to the project directory:

   ```
   cd ContactConnect
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables to the `.env` file:

     ```
     PORT=3000
     MONGODB_URI=mongodb://localhost/contactconnect
     ```

5. Start the application:

   ```
   npm start
   ```

6. You can use the application using Thunder Client or Postman. The API endpoints are available at `http://localhost:3000/api`.

## API Endpoints

The following API endpoints are available in the ContactConnect application:

- `POST /api/register` - Register a new user.
- `POST /api/login` - Log in an existing user.
- `GET /api/contacts` - Get all contacts for the logged-in user.
- `GET /api/contacts/:id` - Get a specific contact for the logged-in user.
- `POST /api/contacts` - Add a new contact for the logged-in user.
- `PUT /api/contacts/:id` - Update an existing contact for the logged-in user.
- `DELETE /api/contacts/:id` - Delete an existing contact for the logged-in user.

## Contributing

Contributions to ContactConnect are welcome! If you find any issues or want to add new features, please submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)