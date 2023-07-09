import { createBrowserRouter } from "react-router-dom";
import S3TD from "../pages/S3TD";

const customRouter = createBrowserRouter(
    [
        {
            path: "/s3td",
            element: <S3TD />
        }
    ],
    { basename: "/hit-patent-demos" }
);

export default customRouter;
