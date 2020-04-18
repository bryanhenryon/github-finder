const github = new GitHub();
const ui = new UI();

const repos_count = 5;
const sort = 'created asc'

document.getElementById('search_user').addEventListener('keyup', e => {
    if (e.target.value !== '') {
        github.get(`https://api.github.com/users/${e.target.value}`)
            .then(user => {
                if (user.data.message !== 'Not Found') {
                    ui.showProfile(user.data);
                    if (user.data.public_repos === 0) {
                        const repoList = document.getElementById('repositories-list');

                        const noResult = document.createElement('div');
                        noResult.className = 'no-result';
                        noResult.textContent = 'Aucun résultat';

                        document.getElementById('repositories').replaceChild(noResult, repoList)
                    }
                } else {
                    ui.clearProfile();
                }
            })
            .then(() => github.get(`https://api.github.com/users/${e.target.value}/repos?per_page=${repos_count}&sort=${sort}`))
            .then(repos => { ui.showRepos(repos.data) })
            .catch(() => { });
    } else {
        ui.clearProfile();
    }
});