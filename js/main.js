//criando uma div1 (imagem)
var div1 = document.createElement('div');
//criando uma div1 (legenda)
var div2 = document.createElement('div');

//criando estilo para a div1
div1.style.background = "pink";
div1.style.width = "740px";
div1.style.border = "5px solid black";

div1.innerHTML = "<img src='https://viagenscinematograficas.com.br/wp-content/uploads/2018/05/O-que-fazer-em-Pipa-Melhores-Praias-Capa-2-740x431.jpg'>";

//criando estilo para a div2
div2.style.background = "black";
div2.style.width = "auto";
div2.style.color = "white";

//criando um ID para a div1
div1.setAttribute('id', 'imagem');

//inserir conteudo da legenda na div2
div2.innerHTML = "<h4>Praia de PIPA/RN</h4><span><strong>Fonte: </strong>https://viagenscinematograficas.com.br/wp-content/uploads/2018/05/O-que-fazer-em-Pipa-Melhores-Praias-Capa-2-740x431.jpg</span>"

//inserir div1 no elemento HTML
document.getElementById('main').appendChild(div1);
//inserir div2 no elemento HTML
document.getElementById('imagem').appendChild(div2);
