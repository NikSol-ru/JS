'use strict';

const goods = [
    { title: 'Shirt', price: 150, img: 'img/Shirt.jpg' },
    { title: 'Socks', price: 50, img: 'img/Socks.jpeg' },
    { title: 'Jacket', price: 350, img: 'img/Jacket.jpg' },
    { title: 'Shoes', price: 250, img: 'img/Shoes.jpg' },
];

const renderGoodsItem = (img = [], title, price) => {
    return `<div class="goods-item">
                <img width = "100px" height = "100px" src = "${img}" alt = "${title}">
                <h3>​${title}​</h3>
                <p>​${price}​$</p>
                <button class="card-button" type="button">В корзину</button>
            </div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

renderGoodsList();
