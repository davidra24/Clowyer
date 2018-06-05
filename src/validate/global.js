var existingClients = [];
var existingCases = [];
export function setClients(cli){
  existingClients.push(cli);
}
export function existClient(cli){
  let isExisting = false;
  for(let i = 0; i<existingClients.length; i++){
    if(existingClients[i] == cli){
      isExisting = true;
    }
  }
  return isExisting;
}
export function setCases(cas){
  existingCases.push(cas);
}
export function getCases(){
  return existCases;
}
export function existCase(cas){
  let isExisting = false;
  for(let i = 0; i<existingCases.length; i++){
    if(existingCases[i] == cas){
      isExisting = true;
    }
  }
  return isExisting;
}
