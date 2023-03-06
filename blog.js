// submit

function createPostEvent(event) {
  event.preventDefault();
  let titulo = document.getElementById("titulo").value.trim();
  let contenido = document.getElementById("contenido").value.trim();
  createPost(titulo,contenido);
  document.getElementById("blogForm").reset();
}
function createPost(titulo,contenido) {
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let article = document.createElement("article");
  let iconoBorrar = crearIcono("fa-trash",deletePost);
  let iconoEditar = crearIcono("fa-pencil",updatePost);
  h3.innerText = titulo;
  p.innerText = contenido;
  article.appendChild(h3);
  article.appendChild(p);
  article.appendChild(iconoEditar);
  article.appendChild(iconoBorrar);
  nuevosBlog.insertBefore(article, nuevosBlog.children[1]);
}

function savePost(event) {
  let element = event.target;
  let parent = element.parentElement;
  let titulo = parent.getElementsByTagName("input")[0].value;
  let contenido = parent.getElementsByTagName("textarea")[0].value;
  let h3 = document.createElement("h3");
  let p = document.createElement("p");

  h3.innerText = titulo;
  p.innerText = contenido;
  parent.appendChild(h3);
  parent.appendChild(p);

  parent.getElementsByTagName("input")[0].remove();
  parent.getElementsByTagName("textarea")[0].remove();
  element.remove();

  parent.querySelector(".fa-close").remove();

  let iconoEditar = crearIcono("fa-pencil",updatePost);
  let iconoBorrar = crearIcono("fa-trash",deletePost);
  parent.appendChild(iconoEditar);
  parent.appendChild(iconoBorrar); 

  let breaks = parent.getElementsByTagName("br");
  breaks = [...breaks];
  breaks.forEach(element => {
    element.remove();
  });
}

/* funcion para crear icono editar
 function creariconoEditar(){
  let iconoEditar = document.createElement("i");
  iconoEditar.classList.add("fa", "fa-pencil");
  iconoEditar.addEventListener("click", updatePost);
  return iconoEditar;
} */

//funcion crear icono generico "FA" 
function crearIcono(simbolo,callback) {  
  let icono = document.createElement("i");
  icono.classList.add("fa", simbolo);
  icono.addEventListener("click", callback);
  return icono;
}

function deletePost(event) {
    let element = event.target;
    let parent = element.parentElement;
    let text = parent.getElementsByTagName("h3")[0].innerText;
    if(confirm("¿Deseas borrar este post? \n" + text)){
      parent.remove();
    }
}

function cancelEdit(event,textoTitulo,textoPost) {
  let element = event.target;
 
  let parent = element.parentElement;
  let titulo = document.createElement("h3");
  let post = document.createElement("p");
  titulo.innerText = textoTitulo;
  console.log("titulo " + textoTitulo);
  post.innerText = textoPost;
  parent.appendChild(titulo);
  parent.appendChild(post);
  parent.getElementsByTagName("input")[0].remove();
  parent.getElementsByTagName("textarea")[0].remove();
  element.remove();
  parent.querySelector(".fa-save").remove();

  let iconoEditar = crearIcono("fa-pencil",updatePost);
  let iconoBorrar = crearIcono("fa-trash",deletePost);
  parent.appendChild(iconoEditar);
  parent.appendChild(iconoBorrar); 

  let breaks = parent.getElementsByTagName("br");
  breaks = [...breaks];
  breaks.forEach(element => {
    element.remove();
  });
 
}


function updatePost(event) {
  let element = event.target;
  let parent = element.parentElement;
  let titulo = parent.getElementsByTagName("h3")[0].innerText;
  let texto = parent.getElementsByTagName("p")[0].innerText;
  let inputTitulo = document.createElement("input");
  let textArea = document.createElement("textarea");
  let br = document.createElement("br");

  let iconoCancelar = crearIcono("fa-close", function(event){
    cancelEdit(event,titulo,texto);
  })

  let iconoGuardar = crearIcono("fa-save",savePost);


  
  inputTitulo.setAttribute("type", "text");
  inputTitulo.value = titulo;
  textArea.value = texto;

  parent.appendChild(inputTitulo);
  parent.appendChild(br);
  parent.appendChild(textArea);
  parent.appendChild(iconoCancelar);
  parent.appendChild(iconoGuardar);

  parent.getElementsByTagName("h3")[0].remove();
  parent.getElementsByTagName("p")[0].remove();
  element.remove();
  parent.querySelector(".fa-trash").remove();

}

let form = document.getElementById("blogForm");
form.addEventListener("submit", createPostEvent);
document.getElementById("blogForm").reset();


createPost("manzanas","me encantan las manzanas son la mejor fruta que existe, Incluso mejor que la pera. La pera es una mierda")
createPost("Kiwis","me encantan los kiwis. Son la mejor fruta que existe. Incluso mejor que la manzana. La manzana es una mierda")