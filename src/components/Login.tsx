import { useReducer, useEffect } from "react";

export const Login = () => {
  interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
  }

  const initialState: AuthState = {
    validando: true,
    token: null,
    username: "",
    nombre: "",
  };

  interface payload {
    username: string;
    nombre: string;
  }

  type AuthAction = { type: "logout" } | { type: "login"; payload: payload };

  const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      case "logout":
        return {
          validando: false,
          token: null,
          nombre: "",
          username: "",
        };
      case "login":
        return {
          ...state,
          nombre: action.payload.nombre,
          token: "123",
          username: action.payload.username,
        };
      default:
        return state;
    }
  };

  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: { nombre: "Carlos", username: "cloaiza21" },
    });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Autenticado como: {nombre}</div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
