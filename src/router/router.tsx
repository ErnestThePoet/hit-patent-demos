import { createBrowserRouter } from "react-router-dom";
import S3TD from "../pages/S3TD";
import Index from "../pages/Index/Index";
import Sjcq from "../pages/Sjcq/Sjcq";

const customRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <Index />
        },
        {
            path: "/s3td",
            element: <S3TD />
        },
        {
            path: "/sjcq",
            element: <Sjcq />
        }
    ],
    { basename: "/hit-patent-demos" }
);

export default customRouter;
