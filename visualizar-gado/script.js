//Criando a tabela
const getTable = document.querySelector('table');
const arrNewTr = [];
const arr = [
  { photo: "", id: 123, peso: '80,00kg', raca: 'Angus', sexo: 'M', data: '12/05/2018', divshow: 'showmehideme1'},
  { photo: "", id: 456, peso: '97,00kg', raca: 'Hereford', sexo: 'M', data: '02/07/2015', divshow: 'showmehideme2'},
  { photo: "", id: 789, peso: '72,50kg', raca: 'Simental', sexo: 'F', data: '23/11/2019', divshow: 'showmehideme3'},
  { photo: "", id: 101, peso: '100,70kg', raca: 'Limousin', sexo: 'M', data: '11/04/2012', divshow: 'showmehideme4'},
  { photo: "", id: 112, peso: '120,00kg', raca: 'Brangus', sexo: 'F', data: '16/02/2011', divshow: 'showmehideme5'},
  { photo: "", id: 131, peso: '83,20kg', raca: 'Angus', sexo: 'M', data: '01/12/2010', divshow: 'showmehideme6'},
  { photo: "", id: 415, peso: '77,04kg', raca: 'Azul Belga', sexo: 'F', data: '17/01/2020', divshow: 'showmehideme7'},
  { photo: "", id: 161, peso: '110,00kg', raca: 'Simental', sexo: 'F', data: '19/04/2017', divshow: 'showmehideme8'},
  { photo: "", id: 718, peso: '60,23kg', raca: 'Limousin', sexo: 'M', data: '12/02/2016', divshow: 'showmehideme9'},
  { photo: "", id: 192, peso: '88,70kg', raca: 'Hereford', sexo: 'F', data: '13/09/2012', divshow: 'showmehideme10'},
];

const clickId = (val) => {
  alert(val);
};

const createTr = () => {
  arr.forEach((item) => {
    arrNewTr.push(`
        <tr>
          <td>${item.photo}</td>  
          <td>${item.id}</td>  
          <td>${item.peso}</td> 
          <td>${item.raca}</td>  
          <td>${item.sexo}</td>
          <td>${item.data}</td>
          <td><input type="image" src="./img/ver-detalhes.png" id="input-mostrar" title="Ver detalhes" onClick="mostrar('${item.divshow}')"/></td> 
        </tr>
      `)
  
    });
  return arrNewTr.join(' ');
};


const createTable = () => {
    return `
      <thead>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </thead>
      <tbody>
        ${createTr()}
      </tbody>
    `;
  };
  
  getTable.innerHTML = createTable();

//Busca na tabela
  window.onload=function(){
    var filtro1 = document.getElementById('txtBusca1');
    var filtro2 = document.getElementById('txtBusca2');
    var filtro3 = document.getElementById('txtBusca3');
    var tabela = document.getElementById('tabela');


    filtro1.onkeyup = function() {
        var nomeFiltro1 = filtro1.value;
        for (var i = 1; i < tabela.rows.length; i++) {
            var conteudoCelula = tabela.rows[i].cells[1].innerText;
            var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro1) >= 0;
            tabela.rows[i].style.display = corresponde ? '' : 'none';
        }
    }
  
    filtro2.onkeyup = function() {
        var nomeFiltro2 = filtro2.value;
        for (var i = 1; i < tabela.rows.length; i++) {
            var conteudoCelula = tabela.rows[i].cells[3].innerText;
            var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro2) >= 0;
            tabela.rows[i].style.display = corresponde ? '' : 'none';
        }
    }
   
    filtro3.onkeyup = function() {
        var nomeFiltro3 = filtro3.value;
        for (var i = 1; i < tabela.rows.length; i++) {
            var conteudoCelula = tabela.rows[i].cells[4].innerText;
            var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro3) >= 0;
            tabela.rows[i].style.display = corresponde ? '' : 'none';
        }
    }
}

//MOSTRAR UMA DIV
function mostrar(id){		
  var div = document.getElementById(id);
  div.style.display = 'block';
}

//OCULTAR UMA DIV
function ocultar(id){
  var div = document.getElementById(id);
  div.style.display = 'none';
}
