var id = 0;

function sell() {
    id++;
    var name = document.getElementById('input1').value;
    var quantity = document.getElementById('input2').value;
    var price = document.getElementById('input3').value;
    var discount = document.getElementById('input4').value;
    var subTotal = quantity * price * (1 - discount / 100);

    var row = '<tr>';
    row += '<td>' + id + '</td>';
    row += '<td>' + name + '</td>';
    row += '<td>' + quantity + '</td>';
    row += '<td>' + price + '</td>';
    row += '<td>' + discount + '</td>';
    row += '<td>' + subTotal + '</td>';
    row += '</tr>';

    document.getElementById('table').innerHTML += row;
}

function Cancle() {
    id++;
    var name = document.getElementById('input1').value = null;
    var quantity = document.getElementById('input2').value = 0;
    var price = document.getElementById('input3').value = 0;
    var discount = document.getElementById('input4').value = 0;
    var subTotal = 0;
}
