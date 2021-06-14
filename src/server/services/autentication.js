import Users from '../users';

const isAuthenticated = (name, pwd) => Users.some(user => (
    user.name === name && user.password === pwd
));

export default isAuthenticated;
