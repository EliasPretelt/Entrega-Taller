
class Product {
    constructor(name, born, year) {
        this.name = name;
        this.born = born;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Born</strong>: ${product.born} - 
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Succsssfully', 'success');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        
        container.insertBefore(div, app);
        
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}


document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const name = document.getElementById('name').value,
            born = document.getElementById('born').value,
            year = document.getElementById('year').value;

        
        const product = new Product(name, born, year);

        
        const ui = new UI();

        
        if (name === '' || born === '' || year === '') {
            ui.showMessage('Please Insert data in all fields', 'danger');
        }

        
        ui.addProduct(product);
        ui.showMessage('Product Added Successfully', 'success');
        ui.resetForm();

        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });