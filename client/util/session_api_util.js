import $ from 'jquery';
// TODO: Create ajax requests for signup, login, logout

export const login = user => {
  return (
    $.ajax({
      method: 'post',
      url: 'api/session',
      data: { user }
    })
  );
};

export const signup = user => {
  return (
    $.ajax({
      method: 'post',
      url: 'api/users',
      data: { user }
    })
  );
};

export const logout = () => {
  return (
    $.ajax({
      method: 'delete',
      url: 'api/session'
    })
  );
};
