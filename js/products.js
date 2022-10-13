export const productList = [];

class Product {
    constructor(name, price, image) {
        this.name = name
        this.price = price
        this.image = image
    }
}

const corgiPlushie = new Product("Corgi Plushie", 120, "https://cdn.shopify.com/s/files/1/1040/9804/products/sitting_4_1024x1024.jpg?v=1560498522")
const pochitaPlushie = new Product("Pochita Plushie", 420, "https://bunnyhello.com/wp-content/uploads/2022/05/chaisawmanplush-12.jpg")
const denjiNendoroid = new Product("Denji Nendoroid", 3120, "https://http2.mlstatic.com/D_NQ_NP_959761-MLC48204945494_112021-O.jpg")

productList.push(corgiPlushie, pochitaPlushie, denjiNendoroid, pochitaPlushie, corgiPlushie, denjiNendoroid, denjiNendoroid, corgiPlushie)