import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

export const useGithubLogin = () => {
    const [githubLoading, setGithubLoading] = useState(false);

    const navigate = useNavigate()

    const clientID = "Ov23li8Mgk1hbihsVQKk";
    const redirectURI = 'http://localhost:5174/home/'
    const { fetchData, loading: fetchLoading } = useFetch('/auth/github/callback', {}, false)

    const handleGithubLogin = () => {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}`
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code')

        if (code) {
            setGithubLoading(true)

            fetchData({
                method: 'POST',
                body: JSON.stringify({ code }),
                headers: { 'Content-Type': 'application/json' }
            })
                .then(userData => {
                    if (userData && userData.token) {
                        const date = new Date()
                        date.setTime(date.getTime() + 24 * 60 * 60 * 1000)
                        let expires = "expires=" + date.toUTCString()
                        document.cookie = `authToken=${userData.token}; ${expires}; path=/`
                        document.cookie = `userId=${userData.user.id}; ${expires}; path=/`
                        document.cookie = `userName=${userData.user.name}; ${expires}; path=/`
                        document.cookie = `userEmail=${userData.user.email}; ${expires}; path=/`
                        document.cookie = `userProfilePicture=${userData.user.avatarUrl}; ${expires}; path=/`
                        navigate('/home')
                    } else {
                        console.error("No se recibió un token válido.")
                    }
                    setGithubLoading(false)
                })
                .catch(error => {
                    setGithubLoading(false)
                    console.error('Error en la autenticación con GitHub:', error)
                });
        }
    }, [fetchData, navigate]);

    const loading = githubLoading || fetchLoading;


    return { handleGithubLogin, loading };
}
