
export const ObjetosLiterales = () => {

    interface Persona {
        nombreCompleto: string;
        edad: number;
        direccion: Direccion
    }

    interface Direccion {
        pais: string;
        noCasa: number
    }

    const persona: Persona ={
        nombreCompleto: "Carlos Loaiza",
        edad: 36,
        direccion: {
            pais: "Mexico",
            noCasa: 947
        }
    }

  return (
    <h3>Objetos Literales</h3>
  )
}
