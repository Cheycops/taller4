var items =  localStorage.getItem('itemslist')
//PARSE PARA MANEJARLO COMO OBJETO
items = items ? JSON.parse(items) : []

showItem()
function additems() {
    let producto = document.getElementById("producto").value
    let Valor = document.getElementById('Valor').value
    let Observacion =document.getElementById('Observacion').value 
    if(producto && Valor && Observacion){
        items.push(
                    {'producto':producto,
                    'Valor':Valor,
                    'observacion':Observacion
                    }
                )
                showItem()
            }
    }
function showItem(){
    document.getElementById("producto").value=''
    document.getElementById('Valor').value=''
    document.getElementById('Observacion').value=''
    // focus para parar el cursor en cualquiera de los imput que nosotros queramos
    document.getElementById("producto").focus()
    
    /*array.forEach( (dato con el arreglo recorrido sin posiciones,datos con posiciones) => {
        
    });*/
    let html= ''
    items.forEach( (datos,index) => {
        html +='<div class="row  border border-warning ">'
        html += `<div class="col-4 mt-2 mb-2 text-center"><h2>${datos.producto}</h2></div>`
        html += `<div class="col-3 mt-2 mb-2 text-center"><h2>${datos.Valor}</h2></div>`
        html += `<div class="col-4 mt-2 mb-2 text-center"><h2>${datos.observacion}</h2></div>`
        html += `<div class="col-1 mt-2 mb-2">
                <a href="#" class="btn btn-danger" onclick=deleteItem(${index})>X</a>
                </div>`
        html += '</div>'
    });
    document.getElementById('lista-de-productos').innerHTML =html
    // stringify para convertir en cadena un Json
    localStorage.setItem ('itemslist', JSON.stringify(items))
}
function deleteItem(index) {
    items.splice(index, 1)
    showItem() 
}