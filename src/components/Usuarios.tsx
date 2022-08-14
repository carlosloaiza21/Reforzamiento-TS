import { Usuario } from "../interfaces/reqRes";
import { useUsuarios } from "../hooks/useUsuarios";

export const Usuarios = () => {

  const {usuarios, paginaSiguente, paginaAnterior} = useUsuarios();

  const renderItem = ({ id, avatar, first_name, email }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 35, borderRadius: 100 }}
          />
        </td>
        <td>{first_name}</td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
      </table>
      <button
        className="btn btn-primary"
        onClick={paginaAnterior}
        >
        Anterior
      </button>
      &nbsp;
      <button
        className="btn btn-primary"
        onClick={paginaSiguente}
        >
        Siguientes
      </button>
    </>
  );
};
