class GitHub {
    constructor() {
        this.config = {
            headers: {
                'Authorization': 'token 28b9c36f86187261acc8b85c730335ef29b8239c'
            }
        }
    }

    async get(url) {
        try {
            const request = await fetch(url, this.config);
            const data = await request.json();

            return {
                data
            }   
        } catch (err) {
            console.log(err);
        }
    }
}


