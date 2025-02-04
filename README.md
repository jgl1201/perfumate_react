# Perfume Store with REACT.

## `FUNCTIONALITY`

## `Requirements`

- [x] Login and users' validation.

  > Managed using JSON.
  >
  > Includes `admin` and `client` users.

- [x] Choose a specific theme and view an online catalog with products and their description.

- [x] Implement a shopping cart

- [x] Include images.

- [x] Provide a registration form for users.

  > User data should be stored and persist within the app (JSON).

- [x] Use of components to implement the app's different sections.

- [x] Utilize Hooks (`useEffect`, `useState`, `useContext`).

  > Their usage must be justified.

## `Dependencies`

```bash
npm install react@18 react-dom@18 webvitals
npm install json-server
npm install bootstrap
npm install react-router-dom
```

## `Structure`
> 
    ├── node_modules

    ├── public/

    │   ├── images/

    │   ├── index.html

    ├── src/

    │   ├── components/

    │   │   ├── forms/

    │   │   │   ├── LoginForm.js

    │   │   │   ├── RegisterForm.js

    │   ├── App.js

    │   ├── index.js

    ├── db.json (Base de datos JSON para json-server)

    ├── package.json

    ├── README.md
>

## `Code`

1. Import `Bootstrap`, `Router` and the required components in **App.js**

    ```js
    import "bootstrap/dist/css/bootstrap.min.css";

    import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
    ```

2. Define, inside App.js, the routes we want for the app. For example: 

    ```js

    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<RegisterForm/>} />
        </Routes>
      </div>
    </Router>

    ```