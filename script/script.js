'use strict';

class GoodsItem {
    constructor(title, price, img) {
        this.img = img;
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
                <img width = "100px" height = "100px" src = "${this.img}" alt = "${this.title}">
                <h3>​${this.title}​</h3>
                <p>​${this.price}$​</p>
                <button class="card-button" type="button">В корзину</button>
                </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150, img: 'img/Shirt.jpg' },
            { title: 'Socks', price: 50, img: 'img/Socks.jpeg' },
            { title: 'Jacket', price: 350, img: 'img/Jacket.jpg' },
            { title: 'Shoes', price: 250, img: 'img/Shoes.jpg' },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

}
const list = new GoodsList();
list.fetchGoods();
list.render();

class Cart {
    constructor() {
    }
    render() { } //создание верстки корзины
    delete() { } // очистка всей корзины
    countTotalCost() { } //подсчет общей суммы заказа
    send() { } // отправка данных на сервер
}

class CartItem {
    constructor() {
    }
    addCartItem() { } // добавление товара в корзину
    deleteCartItem() { } // удаление товара из корзины
}