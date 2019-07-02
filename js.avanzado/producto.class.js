class Producto {
	//1)constructor
	constructor(n,p,s,d){
		this.nombre = n
		this.precio =p
		this.stock = s
		this .disponible =d
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

			data.forEach(item =>{
				let producto = new Producto(item.nombre, item.stock, item.precio,item.disponible)

				Productos.push(producto)

			})

			return productos


		} else if (data instanceof Object ){//<-- hay un solo Object
			let producto = new Producto(data.nombre, data.stock, data.precio, data disponible)

			return producto

	    } else { //<-- no hay object (no sirve nada....)
	    	return null
	    	
	    } 
}

