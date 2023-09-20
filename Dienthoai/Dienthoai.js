var items = []; // Khởi tạo một mảng rỗng

function add() {
    var name = document.querySelector('#input1').value;
    var fileInput = document.querySelector('#input2');
    var price = document.querySelector('#input3').value;

    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var picture = URL.createObjectURL(file);

        var newItem = {
            name: name,
            picture: picture,
            price: price
        };

        items.push(newItem); // Thêm newItem vào cuối mảng items

        // Hiển thị danh sách các phần tử đã thêm vào
        displayItems();
    }
   
}

function displayItems() {
    var cart = document.querySelector('.show');
    cart.innerHTML = ''; // Xóa nội dung hiện tại của cart

    items.forEach(function(item) {
        var car = `
            <div class="carBody">
                <h1>this is the most popular product</h1>
                <img src="${item.picture}" alt="anh">
                <div class="carBody">
                    <h3 class="nameProduct">${item.name}</h3>
                    <p class="priceProduct">${item.price}</p>
                    <button class="buy">Buy</button>
                </div>
            </div>`;

        cart.innerHTML += car;
    });
}