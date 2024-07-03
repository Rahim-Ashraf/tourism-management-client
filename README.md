## Website name: Modern House
## live link: https://dream-tour1.netlify.app
### Features:
*   This wbsite is a tourist managment website
*   This wbsite have firebase login and registration auth
*   You can view tour details by clicking on view property button
*   You can Add your Tourist spot data
*   You can Update your Tourist spot data
*   This website also contain privete route

### Technologies used:
React, Tailwind CSS, Firebase, Express JS, MongoDB

## How to Start the project:

### Installation
1. Clone the repository
2. Install dependencies:
    ```sh
   npm install
    ```

### Configuration
1. Set up Firebase:
    - Create a project in [Firebase Console](https://console.firebase.google.com/) and add a web app.
    - Copy the Firebase config.

2. Create a `.env.local` file in the root directory:
    ```plaintext
    VITE_apiKey=your-api-key
    VITE_authDomain=your-auth-domain
    VITE_projectId=your-project-id
    VITE_storageBucket=your-storage-bucket
    VITE_messagingSenderId=your-messaging-sender-id
    VITE_appId=your-app-id
    ```

## Usage

1. Run the development server:
    ```sh
    npm start
    ```
2. Build for production:
    ```sh
    npm run build
    ```
