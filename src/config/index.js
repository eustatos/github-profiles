const host = 'localhost';
const port = 8088;

const services = {
    api: {
        auth: {
            method: 'POST',
            url: `http://${host}:${port}/auth`
        }
    },
    github: {
        profile: {
            method: 'GET',
            url: 'https://api.github.com/users/{username}'
        },
        commits: {
            method: 'GET',
            url: 'https://api.github.com/repos/{username}/{repoId}/commits'
        }
    }
};

export default services;
