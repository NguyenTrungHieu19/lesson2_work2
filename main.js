$(document).ready(function(){
    $('.btn_add').click(function(){
        $('.form').slideToggle();
    })
})

//load item

$(document).ready(function () {
    var image_list = [
        {
            url: 'img/iphone.webp',
            name: 'iphone 14 promax',
            manufaturor: ' Apple',
            star:'<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: 30000000,
            cart:'<i class="fa-solid fa-cart-shopping"></i>',
        },
        {
            url: 'img/iphone.webp',
            name: 'iphone 14 promax',
            manufaturor: ' Apple',
            star:'<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: 30000000,
            cart:'<i class="fa-solid fa-cart-shopping"></i>',
        },
        {
            url: 'img/iphone.webp',
            name: 'iphone 14 promax',
            manufaturor: ' Apple',
            star:'<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: 30000000,
            cart:'<i class="fa-solid fa-cart-shopping"></i>',
        },
        {
            url: 'img/iphone.webp',
            name: 'iphone 14 promax',
            manufaturor: ' Apple',
            star:'<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: 30000000,
            cart:'<i class="fa-solid fa-cart-shopping"></i>',
        }
    ]
    for (i = 0; i < image_list.length; i++) {
        var item = image_list[i];
        $("#image-container").append("<div class=product><img src="+ item.url +" /><div class=item_text><p class=iphone>"
            + item.name + "</p><p> Hãng sản Xuất:"
            + item.manufaturor +"</p><p class=star>"
            + item.star+ "</p><div class=price><p> Gía: " 
            + item.price +"</p><p class=icon>"
            + item.cart+ " </p></div></div></div>");
           $("img").addClass("image-content");
           
    }
})
// load list item
$(document).ready(function Load(){
        var content_list = [
            {
                id:'1',
                Name:'SamSung galaxy s22 Ultra 5G',
                price: '300,000,000',
                info:'Dynamic AMOLED 2X, 6.8" , 2K+ (1440 x 3088 Pixels),Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP,40 MP',
                Deltail:'ProductDeltail 1',
                star:'5',
                img:'img.jpg',
                NSX:"SamSung",
                Category:'Điện Thoại',
                edit:'Edit',
                Delete:'Delete',
            },
            {
                id:'2',
                Name:'SamSung galaxy s22 Ultra 5G',
                price: '30000000',
                info:'Dynamic AMOLED 2X, 6.8" , 2K+ (1440 x 3088 Pixels),Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP,40 MP',
                Deltail:'ProductDeltail 1',
                star:'5',
                img:'img.jpg',
                NSX:"SamSung",
                Category:'Điện Thoại',
                edit:'Edit',
                Delete:'Delete',
            },
            {
                id:'3',
                Name:'SamSung galaxy s22 Ultra 5G',
                price: '30000000',
                info:'Dynamic AMOLED 2X, 6.8" , 2K+ (1440 x 3088 Pixels),Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP,40 MP',
                Deltail:'ProductDeltail 1',
                star:'5',
                img:'img.jpg',
                NSX:"SamSung",
                Category:'Điện Thoại',
                edit:'Edit',
                Delete:'Delete',
            },
        ]
        for(i=0; i<content_list.length; i++){
                    var list = content_list[i];
                   $("table").append(
                    `<tr>
                        <td> ${list.id}</td>
                        <td> ${list.Name}</td>
                        <td> ${list.price}</td>
                        <td class=infor> ${list.info}</td>
                        <td> ${list.Deltail}</td>
                        <td> ${list.star}</td>
                        <td> ${list.img}</td>
                        <td> ${list.NSX}</td>
                        <td> ${list.Category}</td>
                        <td> 
                            <button class=btn_edit>${list.edit}</button>
                        </td>
                        <td> 
                            <button onclick =" btnDelete()" class=btn_delete>${list.Delete}</button>
                        </td>
                    </tr>`);
                    $("td").addClass("content-text");
                   
        };
    })
    //add
var data =[]
function add(){
    var item_id = document.getElementById("id").value;
    var item_name = document.getElementById("name").value;
    var item_price = document.getElementById("price").value;
    var item_info = document.getElementById("info").value;
    var item_deltail = document.getElementById("deltail").value;
    var item_star = document.getElementById("star").value;
    var item_img = document.getElementById("img").value;
    var item_nsx = document.getElementById("nsx").value;
    var item_category = document.getElementById("category").value;
    var listAdd ={
        id:item_id,
        Name:item_name,
        price:item_price,
        info:item_info,
        Deltail:item_deltail,
        star:item_star,
        img:item_img,
        NSX:item_nsx,
        Category:item_category,   
    }
    data.push(listAdd)
    render()
}
function render(){
    table =` <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Price</th>
    <th >Info</th>
    <th>Deltail</th>
    <th>Star</th>
    <th>Image</th>
    <th>NSX</th>
    <th>Category</th>
</tr>`
for(let i =0; i<data.length; i++){
    table +=
` <tr>
    <td>${data[i].id}</td>
    <td>${data[i].name}</td>
    <td>${data[i].price}</td>
    <td>${data[i].info}</td>
    <td>${data[i].Deltail}</td>
    <td>${data[i].star}</td>
    <td>${data[i].img}</td>
    <td>${data[i].NSX}</td>
    <td>${data[i].Category}</td>
</tr>`
}
document.getElementById("#render").innerHTML = table
}
    