class PizzaServer {
    constructor() {
        this.url = 'http://localhost:3500/api';
    }

    getPizzas(cbSuccess, cbFail) {
        $.get(this.url + '/pizzas/', function(data, status) {
            if(status === 'success')
                cbSuccess(data);

            else
                cbFail(status);
        });
    }

    getOffers(cbSuccess, cbFail) {
        $.get(this.url + '/offers/', function(data, status) {
            if(status === 'success')
                cbSuccess(data);
            else
                cbFail(status);
        });
    }

    getPizza(id, cbSuccess, cbFail) {
        $.get(this.url + '/pizzas/' + id, function(data, status) {
            if(status === 'success')
                cbSuccess(data);
            else
                cbFail(status);
        });
    }

    getOffer(id, cbSuccess, cbFail) {
        $.get(this.url + '/offers/' + id, function(data, status) {
            if(status === 'success')
                cbSuccess(data);
            else
                cbFail(status);
        });
    }

    getOrder(tel, cbSuccess, cbFail) {
        $.get(this.url + '/orders/' + tel, function(data, status) {
            if(status === 'success')
                cbSuccess(data);
            else
                cbFail(status);
        });
    }

    postOrder(tel, order, cbSuccess, cbFail) {
        $.post(this.url + '/orders/' + id, order, function(data, status) {
            if(status === 'success')
                cbSuccess(data);
            else
                cbFail(status);
        });
    }
}

export default PizzaServer;