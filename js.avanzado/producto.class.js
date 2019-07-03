class Producto {
	//1)constructor
	constructor(Id, nombre, Precio, marca,categoria, presentacion, stock,disponible = false){
		this.Id = id
		this.nombre = nombre
		this.precio =Precio
		this.marca = marca
		this.categoria = categoria
		this.presentacion = presentacion
		this.stock = stock
		this.disponible =disponible
	}
	// 2)todo de instancia
	Mostrar(neto){
		let ficha = document.createElement("ul")

		let contenido =`
						<li>Nombre:${this.nombre}</li>
						<li>Precio:ARS ${neto ? this.precioBruto : this.precioBruto()}</li>
						<li>Stock:${this.stock}unid. </li>
						<li>Disponible:${this.disponible ? "Si" : "No"}</li>`
		
		ficha.innerHTML = contenido

		document.body.appendChild( ficha )
	}
	precioBruto(){
		return Math.ceil(this.precio /1.21).toFixed(2)

	}
	//3) metodo de clase (o metodos estatiticos )

	static parse(data) {
		console.log("ahora deveria convertir Object en producto")
		data = JSON.parse(data)

		if (data instanceof Array ){//<-- Hay muchos Object
			let productos = new Array()

			data.forEach(Item =>{
				let producto = new Producto(
					Item.idProducto,
					Item.nombre,
				 	Item.stock,
				    Item.precio,
				    Item.categoria,
				    Item.marca,
				    Item.presentacion
				    )

				Productos.push(producto)

			})

			return productos


		} else if (data instanceof Object ){//<-- hay un solo Object
			let producto = new Producto(
				Data.IdProducto,
				Data.nombre,
				Data.stock,
				Data.precio,
				Data.categoria,
				Data.marca,
				Data.presentacion
				)
			


			return producto

	    } else { //<-- no hay object (no sirve nada....)
	    	return null

	    } 
    }
  }