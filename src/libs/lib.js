import { listUO } from "../../testar/UO.js";
// import Swal from 'sweetalert2/dist/sweetalert2.js' 

export function parseFloat2Decimals(value) {
  if (value != null) {
    return parseFloat(parseFloat(value).toFixed(2));
  }
  else { return 0; }
}


export function validateYear(yearSelected, YearToday) {
  // let year  = document.getElementById("year").value;
  if (yearSelected === '') yearSelected = YearToday;
  if (parseInt(yearSelected) <= 1980 | parseInt(yearSelected) > YearToday) {
      showMessage()
    // alert('Ano nao pode Ser Menor que 1980 ou maior que ' + YearToday)
  }
  else {

  }
}

export function showMessage( ){
  
  
  // Swal.fire({
  // icon: 'error',
  // title: 'Oops...',
  // text: 'Data Invalida',
  // // footer: '<a href="">Why do I have this issue?</a>'
  
// })
}


export function loadUO(selector) { 
  var listUOSorted = listUO.sort(function(a,b) { 
    return a.descricao < b.descricao ? -1 : a.descricao > b.descricao ? 1 : 0;

  })
  let elementos = '<option value = "0"  selected disables>Selecione Unidade Orçamentaria </option>';
   
  for (let i = 0; i < listUOSorted.length; i++) {
      elementos += '<option value="' + listUOSorted[i].codigo+ '">' + listUOSorted[i].descricao + '</option>'
  }
  selector.innerHTML = elementos;

}  


