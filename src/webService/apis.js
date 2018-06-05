/* -------------------- URL'S webService --------------------------------*/
const URLClient = 'http://clowyer.herokuapp.com/client';
const URLCase = 'http://clowyer.herokuapp.com/case';
const URLLawyerLogIn = 'http://clowyer.herokuapp.com/login-lawyer';
const URLLawyerRegister = 'http://clowyer.herokuapp.com/lawyer';
const URLDocument = 'http://clowyer.herokuapp.com/document';
/*------------------------------ Log In ----------------------------------*/
export async function logIn(mail, pass) {
  var result = NULL;
   fetch(URLLawyerLogIn, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Accept-Encoding': '*',
    },
    body: JSON.stringify({
        email : mail,
        password: pass
    }),
  })
  .then(response => response.json())
  .then((responseData) => {
    result = responseData.Lawyer;
    console.warn('asignado? ',result);
    console.warn('este.. ',responseData.Lawyer);
  })
  /*.then(lawyer => lawyer.map(abogado => ({
      id : abogado._id,
      identification: abogado.identification,
      name: abogado.name,
      speciality: abogado.speciality,
      type: abogado.type,
      phone: abogado.phone,
      email: abogado.emails,
      avatar: abogado.avatar
  })))*/
  .catch(error => console.warn(error))
  .done()
  console.warn('result: ..',result);
  return result;
};
/*----------------------------Registrar clientes---------------------------*/
export function register(db) {
   fetch(URLLawyerRegister, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Accept-Encoding': '*',
    },
    body: JSON.stringify({
      identification : db.cedula,
      name : db.nombre,
      speciality : db.especialidad,
      phone : db.telefono,
      email : db.mail,
      password : db.password,
    }),
  })
};
/* -------------------- Servicio Clientes --------------------------------*/
export function obtenerClientes() {
  return fetch(URLClient)
    .then(response => response.json())
    .then(data => data.Client)
    .then(clientes => clientes.map(cliente => ({
        id : cliente._id,
        identification: cliente.identification,
        name: cliente.name,
        type: cliente.type,
        date: cliente.date,
        phone: cliente.phone,
        idLawyer: cliente.idLawyer
    })))
};

export async function agregarClientes(db) {
  fetch(URLClient, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Accept-Encoding': '*',
    },
    body: JSON.stringify({
        identification: db.identification,
        name: db.name,
        type: db.type,
        date: db.date,
        phone: db.phone,
        idLawyer: db.idLawyer
    }),
  }).then(response => response.json());
}
export async function actualizarClientes(id, db) {
  fetch(URLClient+'/'+id, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Accept-Encoding': '*',
    },
    body: JSON.stringify({
        name: db.name,
        type: db.type,
        date: db.date,
        phone: db.phone
    }),
  }).then(response => response.json());
}
/* --------------------------- Servicio Casos ---------------------------------*/
export function obtenerCasos() {
  return fetch(URLCase)
    .then(response => response.json())
    .then(data => data.Case)
    .then(casos => casos.map(caso => ({
        id: caso._id,
        name: caso.name,
        number: caso.number,
        dateStart: caso.dateStart,
        dateFinish: caso.dateFinish,
        courtName: caso.courtName,
        idLawyer: caso.idLawyer
    })))
};

export async function agregarCasos(db) {
  fetch(URLCase, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Accept-Encoding': '*',
    },
    body: JSON.stringify({
      name: db.name,
      number: db.number,
      dateStart: db.dateStart,
      dateFinish: db.dateFinish,
      courtName: db.courtName,
      idLawyer: db.idLawyer
    }),
  }).then(response => response.json());
}

export function obtenerDocumentos() {
  return fetch(URLDocument)
    .then(response => response.json())
    .then(data => data.Document)
    .then(documentos => documentos.map(documento => ({
        id :  documento._id,
        name: documento.name,
        type: documento.type,
        caseNumber: documento.caseNumber,
        idLawyer: documento.idLawyer,
        url : documento.url
    })))
};
