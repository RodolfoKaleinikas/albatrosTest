var prdImpression = document.querySelector('#prdImpression');
var prdClick = document.querySelector('#prdClick');
var prdDetail = document.querySelector('#prdDetail');

var ecommerce = [prdImpression, prdClick, prdDetail]

prdImpression.addEventListener('click', function(){
        dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
        dataLayer.push({
            'event': 'productImpression',
            'ecommerce': {
            'currencyCode': 'EUR',                       // Local currency is optional.
            'impressions': [
            {
            'name': 'Triblend Android T-Shirt',       // Name or ID is required.
            'id': '12345',
            'price': '15.25',
            'brand': 'Google',
            'category': 'Apparel',
            'variant': 'Gray',
            'list': 'Search Results',
            'position': 1
            },
            {
            'name': 'Donut Friday Scented T-Shirt',
            'id': '67890',
            'price': '33.75',
            'brand': 'Google',
            'category': 'Apparel',
            'variant': 'Black',
            'list': 'Search Results',
            'position': 2
            }]
        }
        })
    })

prdClick.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
        'event': 'productClick',
        'ecommerce': {
        'click': {
            'actionField': {'list': 'Search Results'},      // Optional list property.
            'products': [{
            'name': 'produto teste',                      // Name or ID is required.
            'id': '123456',
            'price': 199.90,
            'brand': 'testeBr',
            'category': 'testeCat',
            'variant': 'testeVt',
            'position': 'testePos'
            }]
        }
        },
})
})