import { useEffect } from "react";
import { Content } from "./Content/index";
import {
    StyledSubject,
    StyledPortfolioWrapper,
    StyledPortfolioHeader,
    StyledTitle,
    GithubIcon,
} from "./styled";
import { githubUserName } from "./githubUserName";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../personalHomepageSlice";

export const Portfolio = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories(githubUserName))
    }, [dispatch]);

    return (
        <StyledPortfolioWrapper>
            <StyledPortfolioHeader>
                <GithubIcon />
                <StyledTitle>
                    Portfolio
                </StyledTitle>
                <StyledSubject>
                    My recent projects
                </StyledSubject>
            </StyledPortfolioHeader>
            <Content
                status={repositoriesStatus}
                repositories={repositories}
            />
        </StyledPortfolioWrapper>
    );
};