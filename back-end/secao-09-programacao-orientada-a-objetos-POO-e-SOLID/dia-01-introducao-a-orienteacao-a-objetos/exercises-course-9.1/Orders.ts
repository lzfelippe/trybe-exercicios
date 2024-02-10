// ex03
class Client {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }
}

class Product {
    private _name: string;
    public _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }
}

class Order {
    private _client: Client;
    private _products: Product[];
    private _formOfPayment: string;
    private _discount?: number;

    constructor(client: Client, products: Product[], formOfPayment: string, discount?: number) {
        this._client = client;
        this._products = products;
        this._formOfPayment = 'credit card';
        this._discount = discount;
    }

    // ex04
    totalOrder(): number {
        const total = this._products.reduce((acc, curr) => acc + curr._price, 0);

        return total;
    }

    orderWithDiscount(): number {
        const total = this.totalOrder();
        const discount = this._discount || 0;

        return total - (total * (discount / 100));
    }

}

const pedido1 = new Order(new Client('João'), [new Product('Camiseta', 50), new Product('Calça', 100)], 'credit card', 10);
console.log(pedido1.totalOrder());
console.log(pedido1.orderWithDiscount());