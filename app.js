document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    const products = [
      { id: 1, name: 'TCL', price: 1000 },
      { id: 2, name: 'Motorola', price: 1500 },
      { id: 3, name: 'LG', price: 2000 },
      { id: 4, name: 'Samsung', price: 2500 },
      { id: 5, name: 'Iphone', price: 3000 }
    ];
    let cart = [];

    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.className = 'product';
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
      `;
      productList.appendChild(productElement);
    });

    window.addToCart = function (productId) {
      const product = products.find(p => p.id === productId);
      if (product) {
        cart.push(product);
        updateCart();
      }
    };

    function updateCart() {
      cartList.innerHTML = '';
      let total = 0;
  
      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';
        listItem.innerHTML = `
          ${item.name} - $${item.price.toFixed(2)}
          <button onclick="removeFromCart(${item.id})">Eliminar</button>
        `;
        cartList.appendChild(listItem);
        total += item.price;
      });
  
      cartTotal.textContent = total.toFixed(2);
    }
    
    window.removeFromCart = function (productId) {
      const index = cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
      }
    };
  });
  