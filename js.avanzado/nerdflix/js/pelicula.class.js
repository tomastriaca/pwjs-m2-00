class Pelicula {
//1) constructor 
constructor(t, e, d, p, tr){
		this.titulo = t
		this.descripcion = d
		this.estreno  = e 
		this.poster = p
		this.trailer = tr 
		
		}
		Mostrar(){
			
			//1)capturar el elemento(y clonarlos)
			let elemento = document.querySelector(".pelicula").cloneNode(true)

			//2)Reemplazar/llenar con lo datos de "esta"Pelicula 
				elemento.querySelector("h4").innerText = this.titulo
				elemento.querySelector("p").innerText = this.estreno
				elemento.querySelector("img").src= this.poster

			//3)desocultar el elemento clonado 
			elemento.classList.remove("hide")

			//4)anexar el elemento en el contenedor (padre)
			document.querySelector("#peliculas").appendChild(elemento)

			console.log( elemento )
		}
	}
	

	console.log(Pelicula)
