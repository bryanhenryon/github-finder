class UI {
    showProfile(user) {
        document.getElementById('profile').innerHTML = `
            <div id="main-infos">
                <div id="first-part">
                    <a href="${user.html_url}" target="_blank">
                        <img src="${user.avatar_url}" alt="Avatar de l'utilisateur">
                    </a>
                    <h2>${user.name === null ? 'Non renseigné' : user.name}</h2>
                    <a href="${user.html_url}" target="_blank">
                        <h3>${user.login}</h3>
                    </a>
                    <div id="location"><i class="gg-pin"></i>${user.location === null ? 'Non renseigné' : user.location}</div>
                </div>
                <div id="second-part">
                    <div id="badges">
                        <a href="https://github.com/${user.login}/repositories" target="_blank">
                            <div class="badge">
                                <div>Repositories</div>
                                <div class="number">${user.public_repos}</div>
                            </div>
                        </a>
                            <div class="badge">
                                <div>Gists</div>
                                <div class="number">${user.public_gists}</div>
                            </div>
                        <a href="https://github.com/${user.login}/followers" target="_blank">
                            <div class="badge">
                                <div>Followers</div>
                                <div class="number">${user.followers}</div>
                            </div>
                        </a>
                        <a href="https://github.com/${user.login}/following" target="_blank">
                            <div class="badge">
                                <div>Following</div>
                                <div class="number">${user.following}</div>
                            </div>
                        </a>
                    </div>
                    <h3>Bio</h3>
                    <p>${user.bio === null ? 'Non renseigné' : user.bio}</p>
                    <a href="${user.html_url}" target="_blank" id="seeProfile">Voir le profil</a>
                </div>
            </div>
        </div>
        <div id="repositories">
            <h2>Derniers repositories</h2>
            <div id="repositories-list"></div>
        </div>`
    }

    showRepos(repos) {
        let output = '';
        repos.forEach(repo => {
            output += `
                <a href="${repo.html_url}" target="_blank">
                    <div class="repository">
                        <h3>${repo.name}</h3>
                    </div>
                </a>`
        });

        document.getElementById('repositories-list').innerHTML = output;
    }

    clearProfile() {
        document.getElementById('profile').innerHTML = '';
    }
}