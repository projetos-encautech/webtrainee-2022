//Criando a tabela

const getTable = document.querySelector('table');
const arrNewTr = [];
const arr = [
  { titulo: 'Exame andrológico', photo: "", data: '12/05/2022', nome: 'Luiz', propriedade: 'Fazenda A', status: "Concluída"},
  { titulo: 'Diagnóstico gestação', photo: "", data: '02/07/2022', nome: 'Igor', propriedade: 'Fazenda A', status: 'Concluída'},
  { titulo: 'Desmama', photo: "", data: '23/11/2022', nome: 'Emilly', propriedade: 'Fazenda B', status: 'Em andamento'},
  { titulo: 'Vacina contra Brucelose', photo: "", data: '11/04/2022', nome: 'Luiz', propriedade: 'Fazenda C', status: 'Concluída'},
  { titulo: 'Vacina contra raiva', photo: "", data: '16/02/2022', nome: 'Emanuel', propriedade: 'Fazenda B', status: 'Cancelada'},
  { titulo: 'Castração', photo: "", data: '01/12/2022', nome: 'Rodolfo', propriedade: 'Fazenda A', status: 'Em andamento'},

];

const clickId = (val) => {
  alert(val);
};

const createTr = () => {
  arr.forEach((item) => {
    arrNewTr.push(`
        <tr>
          <td>${item.photo}</td>  
          <td>${item.titulo}</td>
          <td>${item.nome}</td>  
          <td>${item.propriedade}</td> 
          <td>${item.data}</td>  
          <td>${item.status}</td>
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
function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}
const btn = document.querySelector('#btn-branco');
const tabela = document.querySelector('#tabela');
const checkbox1 = document.querySelector('#check1');
const checkbox2 = document.querySelector('#check2');
const checkbox3 = document.querySelector('#check3');

btn.addEventListener('click', () => { //tinha um event nos parenteses
   
    if(checkbox1.checked || checkbox2.checked || checkbox3.checked){
      //alert(getSelectedCheckboxValues('color'));
      //alert(tabela.rows[i].cells[3].innerText+'='+getSelectedCheckboxValues('color'));
        for (var i = 1; i < tabela.rows.length; i++) {
          
            if(getSelectedCheckboxValues('color') == tabela.rows[i].cells[5].innerText){
                tabela.rows[i].style.display = '';   
            }
            else{
             
                tabela.rows[i].style.display = 'none';
                 
            }
        }
    }
    else {
        for (var i = 1; i < tabela.rows.length; i++) {
            tabela.rows[i].style.display = '';   
        }
    }
});

//MOSTRA O FORMULARIO
function mostrar(id){		
    var div = document.getElementById(id);
    div.style.display = 'block';
  }
  
//OCULTAR FORMULÁRIO
function ocultar(id){
  var div = document.getElementById(id);
  div.style.display = 'none';
  document.getElementById('form').reset();
}

//FUNÇAO QUE CRIA A TABELA
function cadAtividade(nome, usuario, condicao, data, propriedade){
  var tb = document.getElementById("tabela");
  var qtdLinhas = tb.rows.length;
  var linha = tb.insertRow(qtdLinhas);

  var cellCodigo = linha.insertCell(0);
  var cellNome = linha.insertCell(1);
  var cellUsuario = linha.insertCell(2);
  var cellPropriedade = linha.insertCell(3);
  var cellData = linha.insertCell(4);
  var cellCondicao = linha.insertCell(5);
  
 
  var dataf = new Date(data); 
  
  cellCodigo.innerHTML = "";
  cellNome.innerHTML = nome.bold();
  cellUsuario.innerHTML = usuario;
  cellCondicao.innerHTML = condicao;
  cellData.innerHTML = dataf.toLocaleDateString('pt-BR', {timeZone: 'UTC'});;
  cellPropriedade.innerHTML = propriedade;

}
