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
	//3) metodo de clase 
}


////////////////////////////////////////////
let objProducto = new Producto ("te de tilo", 55.69, 200, false)
let objProductoII = new Producto ("submarino", 67.55, 260, true)
let objProductoIII= new Producto("lemonpie", 115.25,500, true)