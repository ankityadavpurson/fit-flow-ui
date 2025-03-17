# FitFlow-UI

A modern fitness management application built with React.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- Yarn (v1.22.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ankityadavpurson/fit-flow-ui
cd fit-flow-ui
```

2. Install dependencies:
```bash
yarn install
```

## Development

To run the application in development mode:

```bash
yarn dev
```

This will start the development server on [http://localhost:3000](http://localhost:3000).

## Building for Production

To create a production build:

```bash
yarn build
```

This will create an optimized build in the `build` folder.

To serve the production build locally:

```bash
yarn global add serve
serve -s build
```

## API Configuration

The application expects a backend API running at `/api`. Make sure your backend server is running and accessible. You can modify the API base URL in `src/helper/apis.js` if needed.

## Available API Endpoints

The application interacts with the following endpoints:

### User Management
- `GET /api/allUsers` - Fetch all users
- `POST /api/saveUser` - Create new user
- `PUT /api/updateUser/:phoneNo` - Update user details
- `DELETE /api/deleteUser/:phoneNo` - Delete user
- `GET /api/getUser/:phoneNo` - Get specific user details

### Subscription Management
- `GET /api/getSubscriptions` - Fetch all subscriptions
- `POST /api/saveSubscription` - Create new subscription
- `PUT /api/updateSubscription` - Update subscription
- `DELETE /api/deleteSubscription/:id` - Delete subscription
- `GET /api/getSubscription/:id` - Get specific subscription
- `GET /api/userSubDetails/:phoneNo` - Get user subscription details

### Financial Management
- `GET /api/totalAmount` - Get total amount
- `GET /api/amount/:month` - Get amount by month

## Error Handling

The application includes built-in error handling for API requests. Failed requests will:
- Log errors to the console
- Return appropriate fallback values ([], false, null, or 0)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
