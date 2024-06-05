

let close = document.getElementsByClassName("close");
let editar = document.getElementsByClassName("editar");
let remover = document.getElementById("remover");
let lista = document.getElementById("itemLista")

function removerElemento() {

    lista.innerHTML = "";
}

function addElemento() {

    let data = document.getElementById("data").value;
    let li = document.createElement("li");
    li.className = "lista";
    let inputValue = document.getElementById("tarefa").value;
    let t = document.createTextNode(data + " " + inputValue.toUpperCase());

    console.log(t);

    li.appendChild(t);

    if (inputValue === '') {
        alert("Você precisa descrever a tarefa");
    } else if (data === '') {
        alert("Você precisa informar data");
    }
    else {
        document.getElementById("itemLista").appendChild(li);
    }

    document.getElementById("tarefa").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    let spaneditar = document.createElement("SPAN");
    let txt2 = document.createTextNode("editar");
    spaneditar.className = "editar";
    spaneditar.appendChild(txt2);
    li.appendChild(spaneditar);

    removerItens();
    atualizar();

}

function removerItens() {

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            lista.removeChild(this.parentElement);
        }
    }
}

function atualizar() {
    for (let i = 0; i < editar.length; i++) {

        editar[i].onclick = function () {

            let div2 = this.parentElement;

            div2.innerHTML = "";

            let entrada = document.createElement("input");
            entrada.setAttribute("type", 'date');
            entrada.style.width = '200px';
            entrada.style.height = '30px';
            div2.appendChild(entrada);


            let entrada2 = document.createElement("input");
            entrada2.style.width = '300px';
            entrada2.style.height = '30px';
            entrada2.style.marginLeft = '10px';
            div2.appendChild(entrada2);
            

            let botao = document.createElement("button");
            botao.textContent = 'feito';
            botao.style.width = '100px';
            botao.style.height = '30px';
            div2.appendChild(botao);

            botao.onclick = function () {

                
                let t = document.createTextNode(entrada.value+" "+entrada2.value.toUpperCase());
                div2.innerHTML = "";
                div2.appendChild(t);

                let span = document.createElement("SPAN");
                let txt = document.createTextNode("\u00D7");
                span.className = "close";
                span.appendChild(txt);
                div2.appendChild(span);

                let spaneditar = document.createElement("SPAN");
                let txt2 = document.createTextNode("editar");
                spaneditar.className = "editar";
                spaneditar.appendChild(txt2);
                div2.appendChild(spaneditar);

                removerItens();
                atualizar();
            }


        }

    }
}

