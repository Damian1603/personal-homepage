import { ErrorState } from "./ErrorState";
import { LoadingState } from "./LoadingState";
import { Repositories } from "./Repositories";

export const Content = ({ status, repositories }) => {

    switch (status) {
        case "pending":
            return null;

        case "loading":
            return <LoadingState />;

        case "error":
            return <ErrorState />;

        case "success":
            return <Repositories repositories={repositories} />
        default:
            throw new Error(`incorrect status: ${status}`)
    }
};