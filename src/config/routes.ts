const BASE_URL = '/prolearner-web';

const Routes = {
    LOGIN : `${BASE_URL}/login`,
    BASE : BASE_URL,
    SIGN_UP : BASE_URL + '/sign-up',
    PROFILE : BASE_URL + '/profile/:username',
    NOT_FOUND : BASE_URL + '/not-found',
    MESSAGES : BASE_URL + '/messages/:userId'
};

export default Routes;