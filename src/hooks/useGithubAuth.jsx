import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useFetch from './useFetch';
import { GITHUB_AUTH, GITHUB_CLIENT_ID, GITHUB_REDIRECT } from '../config';

const useGithubAuth = (login, page) => {
    const [githubLoading, setGithubLoading] = useState(false);
    const [url, setGithubUrl] = useState("");
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const {
        data: githubData,
        error: githubError,
        fetch: executeGithubFetch,
    } = useFetch(url, { method: "POST" }, false);

    const handleGithubLogin = () => {
        window.location.href = GITHUB_REDIRECT
            .replace("${clientID}", GITHUB_CLIENT_ID)
            .replace("${redirectURI}", page);
    };

    useEffect(() => {
        const code = searchParams.get('code');
        if (code) {
            setGithubLoading(true);
            setGithubUrl(GITHUB_AUTH.replace('${code}', code)); 
        }
    }, [searchParams]);

    useEffect(() => {
        const fetchGitHubData = async () => {
            const code = searchParams.get('code');
            if (code) {
                setGithubLoading(true);
                setGithubUrl(GITHUB_AUTH.replace('${code}', code)); 
                try {
                    await executeGithubFetch({
                        headers: { 'Content-Type': 'application/json' },
                    });
                } catch (error) {
                    console.error('Error fetching GitHub data:', error);
                } finally {
                    setGithubLoading(false);
                }
            }
        };
        fetchGitHubData();
    }, [url, executeGithubFetch]);

    useEffect(() => {
        if (githubData && githubData.token) {
            login(githubData.token);
        } else if (githubError) {
            console.error('Error en la autenticación con GitHub:', githubError);
        }
        setGithubLoading(false);
    }, [githubData, githubError, login, navigate]);

    return { handleGithubLogin, githubLoading };
}

export default useGithubAuth
