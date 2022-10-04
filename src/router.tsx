import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./routes/NotFound";
import Root from "./routes/root";
import Input from './input.mdx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <NotFound/>
    },
    {
        "path": "/input",
        element: <Input/>
    }
], {
    basename: import.meta.env.BASE_URL
});


export const Router = () => {
    return (
        <RouterProvider router={router}/>
    );
};