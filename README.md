Perfumes' storewith REACT.

## `FUNCTIONALITY`

## `Requirements`

- [x] Login and users' validation.

  > Managed in json.
  >
  > Admin and client users.

- [x] Choose a particular theme and visualize an online catalog with products and their description.

- [x] Implement a shopping cart

- [x] Include images.

- [x] Existence of a form where users can register.

  > Save the data and make it persistent on the app (json).

- [x] Use of components to implement the app's different sections.

- [x] Use of Hooks (useEffect, useState, useContext).

  > Their use must be justified.

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

    │   ├── images/ (Aquí irán las imágenes de los productos)

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

1. Importar `Bootstrap`, `Router` y los componentes en **App.js**

    ```js
    import "bootstrap/dist/css/bootstrap.min.css";

    import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
    ```

2. Definir, dentro de App.js, las rutas que va a tener la web. Por ejemplo: 

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