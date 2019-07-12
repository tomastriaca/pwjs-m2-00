class Pelicula {
//1) constructor 
constructor(i, t, e, d, p, tr){
		this.id = i
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
		static parse(data){
		console.log("Ahora deberia convertir Object en Producto")
		data = JSON.parse(data)

		if( data instanceof Array ){ //<-- Hay muchos Object
			/* Nueva Forma */
			return data.map(item => 
				new Pelicula(
					item.idPelicula,
					item.Titulo,
					item.Estreno,
					item.Descripcion,
					item.Poster,
					item.Trailer
				)
			)

		} else if( data instanceof Object ){ //<-- Hay un solo Object
			
			return new Pelicula(
					data.idPelicula,
					data.Titulo,
					data.Estreno,
					data.Descripcion,
					data.Poster,
					data.Trailer
				)

		} else { //<-- No hay ningún Object (No sirve nada...)
			return null
		}

	}
	}
	

