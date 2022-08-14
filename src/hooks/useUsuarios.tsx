import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const pagina = useRef(1);

    useEffect(() => {
      cargarUsuarios()
    }, []);

    const cargarUsuarios = async() => {
      const resp = await reqResApi.get<ReqResListado>("/users",{
          params:{
              page: pagina.current
          }
      });

      if(resp.data.data.length > 0){
        setUsuarios(resp.data.data)

      }else{
          alert("no hay mas datos")
      }

    }

    const paginaSiguente = () =>{
        pagina.current++
        cargarUsuarios()
    }

    const paginaAnterior = () => {
        if(pagina.current>1){
            pagina.current--
            cargarUsuarios()
        }

    }

    return {
        usuarios,
        paginaSiguente,
        paginaAnterior
    }


}
