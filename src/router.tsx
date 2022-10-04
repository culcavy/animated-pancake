import { Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./routes/contact";
import Root from "./routes/root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <NotFound/>
    },
    {
        path: "contacts/:contractId",
        element: <Contact />
    }
], {
    basename: import.meta.env.BASE_URL
});


export const Router = () => {
    return (
        <RouterProvider router={router}/>
    );
};