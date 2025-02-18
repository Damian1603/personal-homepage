import { StyledLoading, StyledInfo, StyledElipse } from "./styled";

export const LoadingState = () => (
    <StyledLoading>
        <StyledInfo>
            Please wait, projects are being loaded...
        </StyledInfo>
        <StyledElipse />
    </StyledLoading>
);