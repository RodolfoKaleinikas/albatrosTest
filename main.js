var prdImpression = document.querySelector('#prdImpression');
var prdClick = document.querySelector('#prdClick');
var prdDetail = document.querySelector('#prdDetail');

var ecommerce = [prdImpression, prdClick, prdDetail]

for (i=0; i < ecommerce.length; i++){
    ecommerce[i].addEventListener('click', function(){
        if (ecommerce[i] == prdImpression){
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
            });
        }
        else if (ecommerce[i] == prdClick){
            dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
            dataLayer.push({
                'event': 'productClick',
                'ecommerce': {
                'click': {
                    'actionField': {'list': 'Search Results'},      // Optional list property.
                    'products': [{
                    'name': productObj.name,                      // Name or ID is required.
                    'id': productObj.id,
                    'price': productObj.price,
                    'brand': productObj.brand,
                    'category': productObj.cat,
                    'variant': productObj.variant,
                    'position': productObj.position
                    }]
                }
                },
                'eventCallback': function() {
                document.location = productObj.url
                }
            });
        }
        else if (ecommerce == prdDetail){
            dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
            dataLayer.push({
                'event': 'productDetail',
                'ecommerce': {
                'detail': {
                'actionField': {'list': 'Apparel Gallery'},    // 'detail' actions have an optional list property.
                'products': [{
                    'name': 'Triblend Android T-Shirt',         // Name or ID is required.
                    'id': '12345',
                    'price': '15.25',
                    'brand': 'Google',
                    'category': 'Apparel',
                    'variant': 'Gray'
                }]
                }
            }
            });
        }
    })
}