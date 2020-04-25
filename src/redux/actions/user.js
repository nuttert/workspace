import { openNotification } from 'utils/helpers';
import { userApi } from 'utils/api';

const Actions = {
  setUserData: data => ({
    type: 'USER:SET_DATA',
    payload: data,
  }),
  setIsAuth: bool => ({
    type: 'USER:SET_IS_AUTH',
    payload: bool,
  }),
  fetchUserData: () => dispatch => {
    userApi
      .getMe()
      .then(({ data }) => {
        console.log("DSADASDASD")
        dispatch(Actions.setUserData(data));
      })
      .catch(err => {
        console.log("RESP ERR",err)
        if (err.response.status === 403) {
          dispatch(Actions.setIsAuth(false));
          delete window.localStorage["X-Authorization"];
        }
      });
  },
  fetchUserLogin: postData => dispatch => {
    return userApi
      .signIn(postData)
      .then(({ data }) => {
        const Authorization = data["X-Authorization"];
        openNotification({
          title: 'Отлично!',
          text: 'Авторизация успешна.',
          type: 'success',
        });
        window.axios.defaults.headers.common['X-Authorization'] = Authorization;
        window.localStorage['X-Authorization'] = Authorization;
        dispatch(Actions.fetchUserData());
        dispatch(Actions.setIsAuth(true));
        return data;
      })
      .catch(({ response }) => {
        openNotification({
          title: 'Ошибка при авторизации',
          text: 'Неверный логин или пароль',
          type: 'error',
        });
      });
  },
  fetchUserRegister: postData => () => {
    return userApi.signUp(postData);
  },
};

export default Actions;
