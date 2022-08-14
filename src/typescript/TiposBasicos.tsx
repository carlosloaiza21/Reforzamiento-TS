
export const TiposBasicos = () => {

  let nombre: string = "Carlos";
  const edad = 36;
  const estaActivo: boolean = false;
  const poderes: string[] = []





  return (
    <>
        <h3>TiposBasicos</h3>
        { nombre }, { edad }, {(estaActivo)? 'Activo':'no Activo'}
    </>
  )
}
