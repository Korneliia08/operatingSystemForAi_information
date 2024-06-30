import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation/Documentation";
import AIIntroduction from "./pages/Documentation/cards/AI-Introduction/AI-Introduction";
import Main from "./pages/Documentation/cards/main/Main";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "*",
            element: <Home/>,
        },
        {
            path: "documentation",
            element: <Documentation/>,
            children: [
                {
                    path: '',
                    element: <Main/>
                }, {
                    path: 'AI-Introduction',
                    element: <AIIntroduction/>
                }
            ]
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
