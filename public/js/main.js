function update(id, event){
  let linha = event.currentTarget.parentNode.parentNode;
  let veiculo = linha.querySelector('input[name="veiculo"]').value;
  let marca = linha.querySelector('input[name="marca"]').value;
  let ano = linha.querySelector('input[name="ano"]').value;
  let descricao = linha.querySelector('input[name="descricao"]').value;
  let vendido = linha.querySelector('input[name="vendido"]').value == 'Sim'?1:0;
  let data = {
    veiculo, marca, ano, descricao, vendido
  };
  axios.put('http://localhost/veiculos/api/'+id, data)
    .then(function (response) {
      console.log(response);
      let data = new Date(); 
      let dataNova = data.toLocaleDateString("pt-BR").replace(/\//g,'-');
      linha.querySelector('input[name="atualizado"]').value = dataNova;
      alert('Veiculo Atualizado');
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {

  });
}

function deleta(id, event){
  let linha = event.currentTarget.parentNode.parentNode;
  linha.style.display = 'none';
  axios.delete('http://localhost/veiculos/api/'+id)
    .then(function (response) {
      console.log(response);
      alert('Veiculo Deletado');
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {

  });
}

document.querySelector('#formCadastro').onsubmit = function(e){
  e.preventDefault();
  let linha = e.currentTarget;
  let veiculo = linha.querySelector('input[name="veiculo"]').value;
  let marca = linha.querySelector('select[name="marca"]').value;
  let ano = linha.querySelector('input[name="ano"]').value;
  let descricao = linha.querySelector('textarea[name="descricao"]').value;
  let vendido = linha.querySelector('select[name="vendido"]').value;
  let data = {
    veiculo, marca, ano, descricao, vendido
  };
  axios.post('http://localhost/veiculos/api', data)
    .then(function (response) {
      console.log(response);
      let d = response.data.replace('"Veiculo Criado."','');
      let dN = JSON.parse(d);
      let id = dN.id;
      let data = new Date(); 
      let dataNova = data.toLocaleDateString("pt-BR").replace(/\//g,'-');
      document.querySelector('.table > tbody').innerHTML +=`
        <tr>
        <td><input type="text" class="form-control" name="veiculo" value="${veiculo}"></td>
        <td><input type="text" class="form-control" name="marca" value="${marca}"></td>
        <td><input type="text" class="form-control" name="ano" value="${ano}"></td>
        <td><input type="text" class="form-control" name="descricao" value="${descricao}"></td>
        <td><input type="text" class="form-control" name="vendido" value="${Number(vendido)?'Sim':'Não'}"> </td>
        <td><input type="text" class="form-control" disabled="disabled" value="${dataNova}"></td>
        <td><input type="text" class="form-control" disabled="disabled" name="atualizado" value="${dataNova}"></td>
        <td><button type="button" class="btn btn-primary" onClick="update(${id}, event)"><i class="fa fa-edit"></i></button></td>
        <td><button type="button" class="btn btn-danger" onClick="deleta(${id}, event)"><i class="fa fa-trash"></i></button></td>
        </tr>
      `;
      alert('Veiculo Cadastrado');
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {

  });
}
