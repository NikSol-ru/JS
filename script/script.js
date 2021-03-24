'use strict';

class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">                
                <h3>​${this.product_name}​</h3>
                <p>​${this.price} &#x20bd;​</p>
                <button class="card-button" type="button">В корзину</button>
                </div>`;
    }
}

function makeGETRequest(url, callback) {
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

const API_URL = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods(cb) {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            cb();
        });
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price, good.img);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

}

const list = new GoodsList();
list.fetchGoods(() => {
    list.render();
    console.log(list);
});

class Cart {
    constructor() {
    }
    getCartItems() {
        makeGETRequest(`${API_URL}/getBasket.json`, (goods) => {
            this.goods = JSON.parse(goods);
        });
    }

    addCartItem() {
        makeGETRequest(`${API_URL}/addToBasket.json`, (goods) => {
            this.goods = JSON.parse(goods);
        });
    }

    deleteCartItem() {
        makeGETRequest(`${API_URL}/deleteFromBasket.json`, (goods) => {
            this.goods = JSON.parse(goods);
        });
    }
}