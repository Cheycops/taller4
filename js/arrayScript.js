
var items =  localStorage.getItem('itemList')

/*if(items){
    items = items.split(',')
}else{
    items = []
}*/
// SPLIT PARA SEPARAR COMO ARREGLO
/* Operador Ternario */
items = items ? items.split(',') : []
showItem()

function addITem() {
    let item = document.getElementById('item').value
    if(item){
        items.push(item)
        showItem()
    }   
}

function showItem() {
    document.getElementById('item').value = ''
    let html = ''
    /*for (let datos of items) {
        html += `<div class="col-sm-10 col-lg-10 col-xl-10 mb-3"> ${datos} </div>`
        
    }*/

    for (let i = 0; i < items.length; i++) {
       html += `<div class="col-sm-10 col-lg-10 col-xl-10 mb-3"> ${items[i]} </div>`
       html += `<div class="col"> 
                    <a href="#" class="btn btn-danger" onclick="deleteItem(${i})">
                        X
                    </a>
                </div>`
    }

    localStorage.setItem('itemList', items)
    document.getElementById('items-list').innerHTML = html
}


function deleteItem(itemPos) {
    items.splice(itemPos, 1)
    showItem() 
}
