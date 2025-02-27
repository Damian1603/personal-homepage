import { StyledWrapper, StyledIcon, StyledStatement, StyledInfo, StyledButton } from "./styled"

export const ErrorState = () => (
    <StyledWrapper>
        <StyledIcon />
        <StyledStatement>
            Ooops! Something went wrong...
        </StyledStatement>
        <StyledInfo>
            Sorry, failed to load Github projects. You<br /> can check them directly on Github.
        </StyledInfo>
        <StyledButton>
            Go to Github
        </StyledButton>
    </StyledWrapper>
)