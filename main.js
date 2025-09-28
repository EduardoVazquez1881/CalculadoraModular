document.querySelectorAll("button").forEach(btn =>{
    btn.addEventListener("click", () =>{
        const valor = btn.textContent;
        Main(valor);

    })
})

let operador;
let datoTemp;
let listIzq = [];
let listDer = [];

function Display(izq, op, der){
    const resultado = document.getElementById("resultado");
    resultado.innerText = `${izq} ${op ? op : ""} ${der}`;

}

function ListIzq(){
    return listIzq.join("");
}

function ListDer(){
    return listDer.join("");
}

function Operarcion(izq, op, der){
    if(op == "+") return izq + der;
    if(op == "-") return izq - der;
    if(op == "*") return izq * der;
    if(op == "/") return izq / der;
}


function Main(dataKeyboard){
    switch(dataKeyboard){
        case '+':{
            operador = "+";
            Display(ListIzq(), operador, ListDer());
            break;
        }
        case '-':{
            operador = "-";
            Display(ListIzq(), operador, ListDer());
            break;
        }
        case '*':{
            operador = "*";
            Display(ListIzq(), operador, ListDer());
            break;
        }
        case '/':{
            operador = "/";
            Display(ListIzq(), operador, ListDer());
            break;
        }
        case '=':{
            let izq = parseFloat(listIzq.join(""));
            let der = parseFloat(listDer.join(""));
            let prueba = document.getElementById("resultado").innerText = Operarcion(izq, operador, der);
            listDer = [];
            listIzq = [];
            listIzq.push(prueba);
            operador = "";
            Display(ListIzq(), operador, "");
            break;
        }
        case 'C':{
            listDer = [];
            listIzq = [];
            operador = null;
            Display("0", "", "");
            break;
        }

        default:{
            const contenido = document.getElementById("resultado").textContent;


            if(contenido.includes("+") || contenido.includes("-") || contenido.includes("*") || contenido.includes("/"))
            {
                listDer.push(dataKeyboard);
                Display(ListIzq(), operador, ListDer());
            }
            else
            {
                listIzq.push(dataKeyboard);
                Display(ListIzq(), operador, "");
            }
        }   

        
    }    
}
