class Pelicula {
//1) constructor 
	constructor(ID, T, E, D, P, TR){
		this.ID = ID
		this.Titulo = T
		this.Descripcion = D
		this.Estreno  = E 
		this.Poster = P
		this.Trailer = TR 
		
	}
		Mostrar(){
			
			//1)capturar el elemento(y clonarlos)
			let elemento = document.querySelector(".pelicula").cloneNode(true)

			//2)Reemplazar/llenar con lo datos de "esta"Pelicula 
				elemento.querySelector("h4").innerText = this.Titulo
				elemento.querySelector("p").innerText = this.Estreno
				elemento.querySelector("img").src= this.Poster

			//3) Generar el comportamiento de "Reproductor" mediante un "closure"
			elemento.querySelector("a").onclick =(e) => {
				//desactivar el hipervinculo
				e.preventDefault()

				//El "this" es la pelicula!
				
			if( window.auth2.currentUser.get().isSignedIn() ){
					//Chinwevencha!!!!
				
				let reproductor = document.querySelector("#playMovie")

				reproductor.querySelector("#titulo").innerText= `${this.Titulo} (${this.Estreno})`
				reproductor.querySelector("#descripcion").innerText = this.Descripcion
				reproductor.querySelector("#imagen").src= this.Poster
				reproductor.querySelector("iframe").src = this.Trailer

				window.scroll({
					behavior: "smooth",
					top: reproductor.offsetTop
				})
			} else{
				//logeate.....papafrita!
				auth2.signIn().then(function(){
					let usuario = auth2.currentUser.get().getBasicProfile()

					//alert(`bienvenido ${usuario.getGivenName()}`)//
					document.querySelector("#user-data").classList.remove("hide")
					document.querySelector("#user-data strong").innerText = usuario.getGivenName()
					document.querySelector("#user-data button").onclick = function(){
						auth2.signOut
						document.querySelector("#user-data").classList.remove("hide")

					}
				})
			}
			}

			//elemento.querySelector("a") onclick = Reproductor.bind(this)

			//4)desocultar el elemento clonado 
			elemento.classList.remove("hide")

			//5)anexar el elemento en el contenedor (padre)
			
			document.querySelector("#peliculas").appendChild(elemento)

			console.log( elemento )
		}
		static parse(data){
		//console.log("Ahora deberia convertir Object en Producto")
		data = JSON.parse(data)

		if( data instanceof Array ){ //<-- Hay muchos Object
			/* Nueva Forma */
			return data.map(item => 
				new Pelicula(
					item.IDPelicula,
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
	

