import React, { useEffect, useState } from 'react'
import './Git.css'
import Repos from './Repos'
import '../App.css'
function GitHub() {
    const [user, setUser] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://api.github.com/users/Raghvendrasingh-Rv")
            const resJ = await response.json()

            setUser(resJ);
        }
        fetchData()
    }, [])


    return (
        <section className="my-git" id="github">
            <div className="gits">
                <div className="git">
                    <h1>Github Info</h1>
                    <div className="container1">
                        <div className="img">
                            <img src={user.avatar_url} alt=""></img>
                        </div>
                        <div className="info">
                            <h2>{user.login}</h2>
                            <ul>
                                <li>Repo :-{user.public_repos} </li>
                                <li>following:- {user.following}</li>
                                <li>followers:- {user.followers}</li>
                            </ul>
                        </div>
                        <div className="repo">
                            <h2>Repositories</h2>
                            <Repos />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GitHub
