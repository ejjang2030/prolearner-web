const BASE_URL = '/prolearner-web';

const Urls = {
    NOT_FOUND : BASE_URL + '/not-found',
    LOGIN : BASE_URL + '/login',
    HOME: BASE_URL,
    SIGN_UP : BASE_URL + '/sign-up',
    PROFILE : BASE_URL + '/profile/:username',
    MESSAGES : BASE_URL + '/messages/:userId'
};

export default Urls;