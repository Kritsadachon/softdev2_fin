var product = [{
    id: 1,
    img: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    name: 'Cap',
    price: 700,
    description: 'Cap hat hehehehehehehe',
    type: 'hat'
}, {
    id: 2,
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Anc shirt',
    price: 1500,
    description: 'ANC shirt eieizaza',
    type: 'shirt'
}, {
    id: 3,
    img: 'https://plus.unsplash.com/premium_photo-1671028365039-d9294e26e482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name:'Anc shoe',
    price: 900,
    description: 'ANC shoe eieizaza',
    type: 'shoe'
}];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length ; i++){
        html += `<div class="product-items${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${numberWithCommas(product[i].price)} point</p>
                </div>`;
        //console.log("Hello world!");
    }
    $("#productlist").html(html);
})



function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsomething(elem) {
    //console.log(elem.id)
   var value = $('#'+elem.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length ; i++){
        if(product[i].name.includes(value)) {
            html += `<div onclick="openProductDetail(${i})" class="product-items${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${numberWithCommas(product[i].price)} point</p>
                    </div>`;
        }
    }
    if(html == '') {
        $("#productlist").html(`<p>Not Found</p>`);
    }else {
        $("#productlist").html(html);   
    }
}

//function searchproduct(param) {
    //console.log(param)
    //$(".product-items").css(display, 'none')
    //if(param == 'all') {
        //$(".product-items").css(display, 'block')
        //console.log('n1')
    //}else {
        //$("."+param).css(display, 'block')
    //}
//}