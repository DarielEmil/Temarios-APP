const createPrompt = (questions, language) => {
   let prompt = `
        Quiero que crees un plan de estudios corto de 4 semanas tomando en cuenta las siguientes consideraciones de las preguntas:
        ${questions.join(",", "\n")}

        EL PLAN DE ESTUDIO SE CREARA DEL DE ${language}
        Quiero que el temario tenga mas de 7 párrafos mas de 500 palabras. (NO MENOS) 
        Si un párrafo habla sobre como se construye el código debe de traer un ejemplo de como sería el código.
        Además, si el tema que esta tratando incluye ejercicios traer al menos 7 mandatos para realizar los ejercicios.
        No utilices expresiones como: en este párrafo.
        Cuando inicies el texto hazlo de manera profesional, como si fueras un profesor experto en programación.
        DEVUELVELO EN UN ARCHIVO JSON, NO IMPORTA QUE LOS PARRAFOS SEAN EXTREMADAMENTE LARGOS, EL ARCHIVO JSON QUE CREARAS
        SOPORTARA STRINGS HASTA DE MIL PALABRAS.
        DA INFORMACION NO DE QUE TRATARAN LOS TEMAS, NO USES SALTOS DE LINEA
        los párrafos deben de explicar las cosas, LOS PARRAFOS NO DEBEN DE DECIR DE QUE VA A TRATAR LA SEMANA
        DEVOLVER UN JSON BIEN HECHO
        El plan de estudio tiene que ser extenso, y lo vas a dividir en la siguiente estructura el json:


        
        titulo: (string)
        descripcion: (string)
        plan_de_estudios: (array)[
           tema (str)
           contenido (array de parrafos: [{"asdfasdfasfd"}, {"asdfasdfasdf}]) //CADA PARRAFO DEBE DE TENER MAS DE 500 PALABRAS
           ejercicios (array de strings indicando el mandato del ejercicio)
           semana (number)
           recurso: paginas y recursos adicionales
         ]

         RESPETA EL ORDEN DEL JSON, HAZLO OBLIGATORIAMENTE EN ESE ORDEN Y CON ESOS TIPOS
    `;
   return prompt;
};

const createJSON = (text) => {
   return JSON.parse(text.choices[0].message.content);
};

const createPromptParrafo = (text) => {
   return `
   Generar tres parrafos sobre estos temas: ${text}
   Cada parrafo debe de tener mas de 500 palabras,
   Solo desarrolla el contenido de la semana que esta en curso
   devolverlo en un archivo json de la siguiente manera:

   parrafos: ["text+500palabras", "texto+500palabras", "texto+500palabras",]
   `
};
module.exports = { createPrompt, createJSON,createPromptParrafo };
