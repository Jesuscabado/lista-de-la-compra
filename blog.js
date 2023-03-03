// submit
let form = document.getElementById("blogForm");
form.addEventListener("submit", createPost);

function createPost(event) {
  event.preventDefault();
  let titulo = document.getElementById("titulo").value.trim();
  let contenido = document.getElementById("contenido").value.trim();
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let iconoBorrar = document.createElement("i");
  let iconoEditar = document.createElement("i");
  iconoBorrar.classList.add("fa","fa-trash");
  iconoEditar.classList.add("fa","fa-pencil");
  let article = document.createElement("article");
  h3.innerText = titulo;
  p.innerText = contenido;
  article.appendChild(h3);
  article.appendChild(p);
  article.appendChild(iconoEditar);
  article.appendChild(iconoBorrar);
  nuevosBlog.appendChild(article);
  nuevosBlog.insertBefore(article, nuevosBlog.children[1]);
  iconoBorrar.addEventListener("click",deletePost);
  iconoEditar.addEventListener("click",updatePost);

  document.getElementById("blogForm").reset();
}

function deletePost(event) {
    let element = event.target;
    let parent = element.parentElement;
    let text = parent.getElementsByTagName("h3")[0].innerText;
    if(confirm("¿Deseas borrar este post? \n" + text)){
   
        parent.remove();
    }
}

function updatePost(event) {
  let element = event.target;
  let parent = element.parentElement;
  let titulo = parent.getElementsByTagName("h3")[0].innerText;
  let texto = parent.getElementsByTagName("p")[0].innerText;
  let inputTitulo = document.createElement("input");
  let textArea = document.createElement("textarea");
  let br = document.createElement("br");

  inputTitulo.setAttribute("type", "text");
  inputTitulo.value = titulo;
  textArea.value = texto;

  parent.appendChild(inputTitulo);
  parent.appendChild(br);
  parent.appendChild(textArea);

  parent.getElementsByTagName("h3")[0].remove();
  parent.getElementsByTagName("p")[0].remove();
}