Perfumes' storewith REACT.

## `FUNCTIONALITY`

## `Requirements`

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