import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation/Documentation";
import AIIntroduction from "./pages/Documentation/cards/AI-Introduction/AI-Introduction";
import Main from "./pages/Documentation/cards/main/Main";
import AIAlgorithms1 from "./pages/Documentation/cards/AI-Algorithms/AI-Algorithms_first_1";
import AIAlgorithms2 from "./pages/Documentation/cards/AI-Algorithms/AI-Algorithms_first_2";
import AIAlgorithms3 from "./pages/Documentation/cards/AI-Algorithms/AI-Algorithms_first_3";

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
                }, {
                    path: 'AI-Algorithms1',
                    element: <AIAlgorithms1/>
                }, {
                    path: 'AI-Algorithms2',
                    element: <AIAlgorithms2/>
                }, {
                    path: 'AI-Algorithms3',
                    element: <AIAlgorithms3/>
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
