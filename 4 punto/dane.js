
class Product {
    constructor(name, email, addres, age, ocupation, phon) {
        this.name = name;
		this.email = email;
		this.addrese = addres;
		this.age = age;
		this.ocupation = ocupation;
        this.phon = phon;
    }
}
class UI {
    addProduct(product) {
        const productList = document.getElementById('formulario_registro');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="contenedor-formularior">
                <div class="formulario">
                    <strong>name</strong>: ${product.name} -
					<strong>addres</strong>: ${product.addres} -
					<strong>email</strong>: ${product.email} -
					<strong>age</strong>: ${product.age} -
					<strong>ocupation</strong>: ${product.ocupation} - 
                    <strong>phon</strong>: ${product.phon}
                </div>
            </div>
        `;
		productList.appendChild(element);
        console.log("element")
        
        document.write('name'.value);
        
    }


};