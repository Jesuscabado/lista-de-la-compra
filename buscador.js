
document.getElementById("buscador").addEventListener("keyup",filtarPosts);

function filtarPosts()
{
    let text = document.getElementById("buscador").value.toLowerCase();
    let section = document.getElementById("nuevosBlog");
    let titulos = section.querySelectorAll("article > h3");
    titulos = Array.from(titulos);
    let titulosFiltrados = titulos.filter(titulo => !titulo.innerText.toLowerCase().includes(text));
    
    titulos.forEach(titulo => {
        let article = titulo.parentElement;
        article.style.display = "block";

    })
    titulosFiltrados.forEach(titulo => {
        let article = titulo.parentElement;
        article.style.display = "none";

    });
}  