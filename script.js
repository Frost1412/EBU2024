
const apiUrl = 'http://localhost:3000/thu';
let allProducts = [];
let products = [];
async function fetchAndDisplayProducts() {
    try {
        const response = await fetch(apiUrl);
        const products = await response.json();
        const productList = document.getElementById('product-list');
        // console.log(products.books);
        // products = products.books;
        products.forEach(product => {
            console.log(product)
            const productHtml = `
                <div class="col-lg-20 bg-white px-0 rounded" >
                    <a href="#!">
                        <div class="home_product_item rounded" >
                            <div class="home_product_item_img">
                                <img src="${product.images[0].base_url}" style=" height:187px;" class="rounded ">
                            </div>
                            <div class="p-2">
                                <div class="home_product_item_name mt-3">
                                    <h6>${product.name.slice(0, 58)}</h6>
                                </div>
                                <div class="">
                                    <ul class="list-unstyled d-flex m-0">
                                        <li><img class="height" src="star.png" alt=""></li>
                                        <li><img class="height" src="star.png" alt=""></li>
                                        <li><img class="height" src="star.png" alt=""></li>
                                        <li><img class="height" src="star.png" alt=""></li>
                                        <li><img class="height" src="star.png" alt=""></li>
                                        <p class="border-start d-flex flex-column justify-content-center fs ps-1 m-0 text-black-50">
                                             ${product.quantity_sold?.text}
                                        </p>
                                    </ul>
                                </div>
                                <div class="home_product_item_price mt-3 mb-3">
                                    <p class="me-3 mb-0">${product.list_price}<span style="vertical-align: super; font-size: 15px; text-decoration: underline;">đ</span></p>
                                    <span>26%</span>
                                </div>
                                <div class="d-flex ship">
                                    <img src="now.png" class="now mt-1 d-block d-sm-none" style="height: 15px; width: 35px;" alt="">
                                    <p class="mb-0 py-1">Giao siêu tốc 2h</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;

            productList.innerHTML += productHtml;
        });
    } catch (error) {
        // console.error('Error fetching products:', error);
    }
}

fetchAndDisplayProducts();




//tănggiam
function updateTotalPrice() {
    const productElement = document.getElementById('product');
    const productPrice = parseInt(productElement.getAttribute('data-price'));
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = productPrice * quantity;
    document.getElementById('total-price').textContent = totalPrice.toLocaleString();
}

function increaseQuantity() {
    const input = document.getElementById('quantity');
    let value = parseInt(input.value);
    value += 1;
    input.value = value;
    updateTotalPrice();
}

function decreaseQuantity() {
    const input = document.getElementById('quantity');
    let value = parseInt(input.value);
    if (value > 1) {
        value -= 1;
    }
    input.value = value;
    updateTotalPrice();
}

// Cập nhật tổng tiền khi trang được load
// updateTotalPrice();

//giỏ hàng
// function addToCart() {
//     const productElement = document.getElementById('product');
//     const price = parseInt(productElement.getAttribute('data-price'));
//     const quantity = parseInt(document.getElementById('quantity').value);
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     console.log(`Adding to cart: Price=${price}, Quantity=${quantity}`);
//     const product = {
//         name: 'Tên sản phẩm', // Thay thế bằng tên sản phẩm thực tế
//         price: price,
//         quantity: quantity
//     };

//     cart.push(product);
//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert('Sản phẩm đã được thêm vào giỏ hàng!');
// }


//bluekhibam
document.addEventListener('DOMContentLoaded', function () {
    const pageItems = document.querySelectorAll('.page-item');

    function setActivePage() {
        const currentUrl = window.location.href;
        pageItems.forEach(item => {
            const link = item.querySelector('a');
            if (link && currentUrl.includes(link.getAttribute('href'))) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    setActivePage();
});

// //tìm nma bị đóng filedata
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('button-addon');
    const searchInput = document.getElementById('search_product');
    const searchResults = document.getElementById('search-results');

    if (!searchButton || !searchInput || !searchResults) {
        console.error('Một hoặc nhiều phần tử không tồn tại trong DOM.');
        return;
    }

    searchButton.addEventListener('click', function () {
        const query = searchInput.value.trim().toLowerCase();
        if (query === '') {
            searchResults.innerHTML = 'Vui lòng nhập từ khóa tìm kiếm.';
            return;
        }
u
        const results = products.filter(product => product.name.toLowerCase().includes(query));

        if (results.length > 0) {
            let html = '<ul>';
            results.forEach(product => {
                html += `<li>${product.name}</li>`;
            });
            html += '</ul>';
            searchResults.innerHTML = html;
        } else {
            searchResults.innerHTML = 'Không tìm thấy kết quả phù hợp.';
        }
    });
});


