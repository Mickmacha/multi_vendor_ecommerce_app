

const authReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          isAuthenticated: true,
          loading: false,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          user: null,
          token: null,
          isAuthenticated: false,
          loading: false,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          token: null,
          isAuthenticated: false,
          loading: false,
          error: null,
        };
      case 'AUTH_LOADING':
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  