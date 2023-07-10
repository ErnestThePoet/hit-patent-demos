import { createBrowserRouter } from "react-router-dom";
import S3TD from "../pages/S3TD";
import Index from "../pages/Index/Index";

const customRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <Index />
        },
        {
            path: "/s3td",
            element: <S3TD />
        }
    ],
    { basename: "/hit-patent-demos" }
);

export default customRouter;
