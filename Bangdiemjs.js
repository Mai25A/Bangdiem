function myFunction__summarise() {
    var s1 = document.getElementById('semester1').value;
    s1 = parseFloat(s1);
    var s2 = document.getElementById('semester2').value;
    s2 = parseFloat(s2);
    var se = document.getElementById('year');
    var values = se.options[se.selectedIndex].value;
    values = parseInt(values);
    var result;
    switch (values) {
        case 1: {
            result = (s1 + (2 * s2)) / 3;
            result = parseFloat(result);
            document.getElementById('summarise').value = result;
            break;
        }
        case 2: {
            result = ((s1 * 2) + (3 * s2)) / 5;
            result = parseFloat(result);
            document.getElementById('summarise').value = result;
            break;
        }
        case 3: {
            result = ((s1 * 3) + (4 * s2)) / 7;
            result = parseFloat(result);
            document.getElementById('summarise').value = result;
            break;
        }
    }
    if (result >= 9) {
        document.getElementById('capdo').innerHTML = "Hoc sinh gioi";
        document.getElementById('capdo').style.color = "red";
    }
    if (result >= 7 && result < 9) {
        document.getElementById('capdo').innerHTML = "Hoc sinh kha";
        document.getElementById('capdo').style.color = "blue";
    }
    if (result < 7 &&result>3) {
        document.getElementById('capdo').innerHTML = "Hoc sinh trung binh";
        document.getElementById('capdo').style.color = "yellow";
    }
    if(result <3){
        document.getElementById('capdo').innerHTML = "Hoc sinh yeu";
        document.getElementById('capdo').style.color = "violen";
    }


}

function myFunction__cancel() {
    document.getElementById('semester1').value = "";
    document.getElementById('semester2').value = "";
    document.getElementById('summarise').value = "";
    document.getElementById('year').value= "1";


}