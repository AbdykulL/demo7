document.querySelector('.burger').addEventListener('click',function(){

    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('burger-active');

});

// let cart = [];

//     function addToCart(name, price) {
     
//       cart.push({ name, price });

//       showCart();
//     }

//     function showCart() {
//       const box = document.querySelector('.cart-box');
//       box.style.display = 'block'; 
//       box.innerHTML = '';

//       const title = document.createElement('h3');
//       title.textContent = 'Cart';
//       box.appendChild(title);

//       let grouped = {}; 
//       let total = 0;

      
//       cart.forEach(item => {
//         if (grouped[item.name]) {
//           grouped[item.name].quantity += 1;
//         } else {
//           grouped[item.name] = {
//             price: item.price,
//             quantity: 1
//           };
//         }
//       });

      
//       Object.entries(grouped).forEach(([name, info]) => {
//         const sum = info.price * info.quantity;
//         total += sum;

//         const p = document.createElement('p');
//         p.textContent = `${name} — $${info.price} x ${info.quantity} = $${sum.toFixed(2)}`;
//         box.appendChild(p);
//       });

//       const totalText = document.createElement('p');
//       totalText.innerHTML = `<b>total $${total.toFixed(2)}</b>`;
//       box.appendChild(totalText);
//     }


let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  document.querySelector('.cart-box').style.display = 'block'; 
  showCart();
}

function toggleCart() {
  const box = document.querySelector('.cart-box');
  if (box.style.display === 'block') {
    box.style.display = 'none';
  } else {
    box.style.display = 'block';
    showCart();
  }
}

function closeCart() {
  document.querySelector('.cart-box').style.display = 'none';
}

function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
  showCart();
}

function showCart() {
  const box = document.querySelector('.cart-box');
  box.innerHTML = '<span class="close-btn" onclick="closeCart()">✖</span>';

  const title = document.createElement('h3');
  title.textContent = 'Cart';
  box.appendChild(title);

  let grouped = {};
  let total = 0;

  cart.forEach(item => {
    if (grouped[item.name]) {
      grouped[item.name].quantity += 1;
    } else {
      grouped[item.name] = {
        price: item.price,
        quantity: 1
      };
    }
  });

  for (let name in grouped) {
    const info = grouped[name];
    const sum = info.price * info.quantity;
    total += sum;

    const p = document.createElement('p');
    p.innerHTML = `${name} — $${info.price} x ${info.quantity} = $${sum.toFixed(2)}
      <span class="remove-item" onclick="removeItem('${name}')">✖</span>`;
    box.appendChild(p);
  }

  const totalText = document.createElement('p');
  totalText.innerHTML = `<b>Total $${total.toFixed(2)}</b>`;
  box.appendChild(totalText);
}

