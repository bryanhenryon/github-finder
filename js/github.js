class GitHub {
    constructor() {
        this.config = {
            headers: {
                'Authorization': 'token 28b9c36f86187261acc8b85c730335ef29b8239c'
            }
        }
    }
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url, this.config)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}


