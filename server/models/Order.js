
function Order(data) {
    /* Define some properties for the order */
    var this_order = {
        name: data.name,
        telephone: data.telephone,
        method: data.method,
        price: data.price,
        pizzas: data.pizzas,
        address: data.address ? data.address : null,
        city: data.city ? data.city : null,
        postal: data.postal ? data.postal : null
    }
    return this_order;
};

module.exports = Order;
