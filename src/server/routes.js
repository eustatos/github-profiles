import Router from 'koa-router';
import isAuthenticated from './services/autentication';

const router = new Router();

router
    .get('/', ctx => {
        ctx.body = 'ok';
    })
    .post('/auth', ctx => {
        const { username, password } = ctx.request.body;
        ctx.body = { isAuthenticated: isAuthenticated(username, password) };
    });

const routes = router.routes();
const allowedMethods = router.allowedMethods();

export {
    routes,
    allowedMethods
};
