import { Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);


export const Router = () => {
    return (
        <RouterProvider router={router}/>
    );
};