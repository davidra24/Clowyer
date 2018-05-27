/* -------------------- URL'S webService --------------------------------*/
const URLClient = 'http://clowyer.herokuapp.com/client';
const URLCase = 'http://clowyer.herokuapp.com/case';
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
        phone: cliente.phone
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
        phone: db.phone
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
        courtName: caso.courtName
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
      courtName: db.courtName
    }),
  }).then(response => response.json());
}
