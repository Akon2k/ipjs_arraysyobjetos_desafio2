let Radiologia = [
  {
    HORA: "11:00",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:00",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:30",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
  },
  {
    HORA: "16:00",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
  },
];

let Traumatologia = [
  {
    HORA: "8:00",
    ESPECIALISTA: "MARIA PAZ ALTUZARRA",
    PACIENTE: "PAULA SANCHEZ",
    RUT: "15554774-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00",
    ESPECIALISTA: "RAUL ARAYA",
    PACIENTE: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30",
    ESPECIALISTA: "MARIA ARRIAGADA",
    PACIENTE: "ANA KLAPP",
    RUT: "17879423-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "ALEJANDRO BADILLA",
    PACIENTE: "FELIPE MARDONES",
    RUT: "1547423-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "CECILIA BUDNIK",
    PACIENTE: "DIEGO MARRE",
    RUT: "16554741-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "12:00",
    ESPECIALISTA: "ARTURO CAVAGNARO",
    PACIENTE: "CECILIA MENDEZ",
    RUT: "9747535-8",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:30",
    ESPECIALISTA: "ANDRES KANACRI",
    PACIENTE: "MARCIAL SUAZO",
    RUT: "11254785-5",
    PREVISION: "ISAPRE",
  },
];

let Dental = [
  {
    HORA: "8:30",
    ESPECIALISTA: "ANDREA ZUÑIGA",
    PACIENTE: "MARCELA RETAMAL",
    RUT: "11123425-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "MARIA PIA ZAÑARTU",
    PACIENTE: "ANGEL MUÑOZ",
    RUT: "9878789-2",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "SCARLETT WITTING",
    PACIENTE: "MARIO KAST",
    RUT: "7998789-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "13:00",
    ESPECIALISTA: "FRANCISCO VON TEUBER",
    PACIENTE: "KARIN FERNANDEZ",
    RUT: "18887662-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "13:30",
    ESPECIALISTA: "EDUARDO VIÑUELA",
    PACIENTE: "HUGO SANCHEZ",
    RUT: "17665461-4",
    PREVISION: "FONASA",
  },
  {
    HORA: "14:00",
    ESPECIALISTA: "RAQUEL VILLASECA",
    PACIENTE: "ANA SEPULVEDA",
    RUT: "14441281-0",
    PREVISION: "ISAPRE",
  },
];

let pacientes = [
  {
    HORA: "09:00",
    ESPECIALISTA: "RENÉ POBLETE",
    PACIENTE: "ANA GELLONA",
    RUT: "13123329-7",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "09:30",
    ESPECIALISTA: "MARIA SOLAR",
    PACIENTE: "RAMIRO ANDRADE",
    RUT: "12221451-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00",
    ESPECIALISTA: "RAUL LOYOLA",
    PACIENTE: "CARMEN ISLA",
    RUT: "10112348-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30",
    ESPECIALISTA: "ANTONIO LARENAS",
    PACIENTE: "PABLO LOAYZA",
    RUT: "13453234-1",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:00",
    ESPECIALISTA: "MATIAS ARAVENA",
    PACIENTE: "SUSANA POBLETE",
    RUT: "14345656-6",
    PREVISION: "FONASA",
  },
];

/* 1. Agregar las siguientes horas al arreglo de Traumatología: */
pacientes.forEach(function (param) {
  Traumatologia.push(param);
});
console.log("Ejercicio 1");
console.log(Traumatologia);






/* 2. Eliminar el primer y último elemento del arreglo de Radiología. */
Radiologia.shift();
Radiologia.pop();
console.log("Ejercicio 2");
console.log(Radiologia);






/* 3. Imprimir en la página HTML, mediante document.write y/o la funciones que estime
  conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo separando por
  un guión cada dato desplegado y cada fila de información debe estar separada por un párrafo.Ejemplo:
  8:30 - ANDREA ZUÑIGA - MARCELA RETAMAL - 11123425-6 - ISAPRE
  11:00 - MARIA PIA ZAÑARTU - ANGEL MUÑOZ - 9878789-2 - ISAPRE... */

//const especialidades = Radiologia;
//console.log(Radiologia);
document.write(`<p>Ejercicio 3</p>`);
Radiologia.forEach(function (param) {
  document.write(
    `<p>${param.HORA} - ${param.ESPECIALISTA} - ${param.PACIENTE} - ${param.RUT} - ${param.PREVISION}</p>`
  );
});
document.write(`<br>`);






/*  4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. Para ésto,
  deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo.
  Ejemplo:
  FRANCISCA ROJAS
  PAMELA ESTRADA
  ARMANDO LUNA… */

/* Cantidad de pacientes */
//console.log(Dental.length + Traumatologia.length + Radiologia.length);

const especialidades = Radiologia.concat(Traumatologia, Dental);
//console.log(especialidades);

document.write(`<p>Ejercicio 4</p>`);
especialidades.forEach(function (param) {
  document.write(`<p>${param.PACIENTE}</p>`);
});
document.write(`<br>`);






/* 5. Modificar mediante funciones las previsiones de Dental: aquellas que indican ser FONASA
  cambiarlas por ISAPRE y viceversa. Luego, imprimir este resultado junto con el rut asociado a
  dicha consulta, separados por punto y coma.
  Ejemplo:
  FONASA;MARCELA RETAMAL
  FONASA;ANGEL MUÑOZ... */

console.log("Ejercicio 5");
for (i = 0; i < Dental.length; i++) {
  const element = Dental[i];
  /* console.log(element); */
  if (element.PREVISION === "FONASA") {
    element.PREVISION = "ISAPRE";
  } else {
    element.PREVISION = "FONASA";
  }
  console.log(element);
}