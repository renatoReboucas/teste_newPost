var itemSelecionado = []
$(document).ready(function () {
  createDataTable();
  $("#example").DataTable({
    responsive: true,
    pageLength: 6,
  });
//   const itemMenu = document.querySelectorAll(".itens-menu");
//   for (const item of itemMenu) {
//     item.addEventListener("click", handleSelectedItem);
// }
});


function createDataTable(){
  // console.log("data",data);
  // const pedidos = data.json()
  // const table = document.getElementById(tbody);
  const table = $("#tbody");
  for( const pedido of data){
    // console.log(pedido);
    table.append(`<tr>
      <td>${pedido.id}</td>
      <td>${pedido.cliente}</td>
      <td>${pedido.celular}</td>
      <td>${pedido.email}</td>
      <td>${pedido.valor}</td>
      <td>${pedido.pin}</td>
      <td>${pedido.gaveta}</td>
      <td>${pedido.descricao_do_pedido}</td>
      <td>${pedido.status}</td>
    </tr>`);
  }
}

// function handleSelectedItem(event) {
//   console.log("entrou click");
//   const itemLi = event.target;
//   console.log(itemLi);
  
//   if ( itemLi.hasClass("selecionado") ) {
//     itemLi.removeClass("selecionado");
//   } else {
//     itemLi.addClass("selecionado");
//   }


// }