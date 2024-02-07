# Authentication System with Login Redirect

This project implements a basic authentication system using React and React Router. It provides a login feature and automatically redirects users to the appropriate page after successful authentication.

## Features

- **Login Functionality**: Users can log in using their credentials.
- **Redirect After Login**: Upon successful login, users are redirected to the appropriate page.

## Technologies Used

- React
- React Router Dom

## Setup Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

## Usage

1. Start the server using `npm start`
2. You will be redirected to `signIn` page.
3. On click the signIn button, you will be redirected to `home` page.
4. if you load the page after adding any search param to the `home` page, and the click logout button, you will be redirected to `signIn` page with the corresponding redirect url with parameter `rdUrl`.
5. If you now signIn, you will be redirected to to the corresponding `rdUrl` url directly.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.