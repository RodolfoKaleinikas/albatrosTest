var prdImpression = document.querySelector('#prdImpression');
var prdClick = document.querySelector('#prdClick');
var prdDetail = document.querySelector('#prdDetail');
var viewItemList = document.querySelector('#viewItemList');
var selectItem = document.querySelector('#selectItem');
var viewItem = document.querySelector('#viewItem');

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

prdDetail.addEventListener('click', function(){
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
})


viewItemList.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
        event: "view_item_list",
        ecommerce: {
            items: [
            {
            item_name: "Triblend Android T-Shirt",       // Name or ID is required.
            item_id: "12345",
            price: 15.25,
            item_brand: "Google",
            item_category: "Apparel",
            item_category2: "Mens",
            item_category3: "Shirts",
            item_category4: "Tshirts",
            item_variant: "Gray",
            item_list_name: "Search Results",
            item_list_id: "SR123",
            index: 1,
            quantity: 1
            },
            {
            item_name: "Donut Friday Scented T-Shirt",
            item_id: "67890",
            price: 33.75,
            item_brand: "Google",
            item_category: "Apparel",
            item_category2: "Mens",
            item_category3: "Shirts",
            item_category4: "Tshirts",
            item_variant: "Black",
            item_list_name: "Search Results",
            item_list_id: "SR123",
            index: 2,
            quantity: 1
            }]
        }
    });
})

selectItem.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
      event: "select_item",
      ecommerce: {
        items: [{
          item_name: 'Donut Friday Scented T-Shirt', // Name or ID is required.
          item_id: '67890',
          item_brand: 'oogle',
          item_category: 'Apparel',
          item_category2: 'ens',
          item_category3: 'Shirts',
          item_category4: 'Tshirts',
          item_variant: 'Black',
          item_list_name: 'Search Results',
          item_list_id: 'SR123',
          index: 1,
          quantity: 1,
          price: 35.79
        }]
      }
    });
})