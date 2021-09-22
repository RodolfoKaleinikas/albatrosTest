//Definição dos elementos de ecommerce:

//Elementos GAUA
var prdImpression = document.querySelector('#prdImpression');
var prdClick = document.querySelector('#prdClick');
var prdDetail = document.querySelector('#prdDetail');
var addToCartUA = document.querySelector('#addToCartUA');
var removeFromCartUA = document.querySelector('#removeFromCartUA');
var promotionImpression = document.querySelector('#promotionImpression');
var promotionClick = document.querySelector('#promotionClick');
var checkout = document.querySelector('#checkout');
var checkoutOption = document.querySelector('#checkoutOption');
var purchaseUA = document.querySelector('#purchaseUA');
var partialRefundUA = document.querySelector('#partialRefundUA');
var fullRefundUA = document.querySelector('#fullRefundUA');

//Elementos GA4
var viewItemList = document.querySelector('#viewItemList');
var selectItem = document.querySelector('#selectItem');
var viewItem = document.querySelector('#viewItem');
var addToCart = document.querySelector('#addToCart');
var removeFromCart = document.querySelector('#removeFromCart');
var viewPromotion = document.querySelector('#viewPromotion');
var selectPromotion = document.querySelector('#selectPromotion');
var beginCheckout = document.querySelector('#beginCheckout');
var purchase = document.querySelector('#purchase');
var partialRefund = document.querySelector('#partialRefund');
var fullRefund = document.querySelector('#fullRefund');

//Adicionando escutadores nos elementos de ecommerce para lançar os eventos de EEC no dataLayer:

//Escutadores GAUA
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

addToCartUA.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
    'event': 'addToCart',
    'ecommerce': {
        'currencyCode': 'EUR',
        'add': {                                // 'add' actionFieldObject measures.
            'products': [{                        //  adding a product to a shopping cart.
                'name': 'Triblend Android T-Shirt',
                'id': '12345',
                'price': '15.25',
                'brand': 'Google',
                'category': 'Apparel',
                'variant': 'Gray',
                'quantity': 1
            }]
        }
    }
    });
})

removeFromCartUA.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
    'event': 'removeFromCart',
    'ecommerce': {
        'remove': {                               // 'remove' actionFieldObject measures.
            'products': [{                          //  removing a product to a shopping cart.
                'name': 'Triblend Android T-Shirt',
                'id': '12345',
                'price': '15.25',
                'brand': 'Google',
                'category': 'Apparel',
                'variant': 'Gray',
                'quantity': 1
            }]
        }
    }
    });
})

promotionImpression.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
    'event': 'promotionImpression',
    'ecommerce': {
        'promoView': {
            'promotions': [                     // Array of promoFieldObjects.
            {
                'id': 'JUNE_PROMO13',            // ID or Name is required.
                'name': 'June Sale',
                'creative': 'banner1',
                'position': 'slot1'
            },
            {
                'id': 'FREE_SHIP13',
                'name': 'Free Shipping Promo',
                'creative': 'skyscraper1',
                'position': 'slot2'
            }]
        }
    }
    });
})

promotionClick.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
        'event': 'promotionClick',
        'ecommerce': {
            'promoClick': {
                'promotions': [
                {
                    'id': 'FREE_SHIP13',
                    'name': 'Free Shipping Promo',
                    'creative': 'skyscraper1',
                    'position': 'slot2'
                }]
            }
        }
    });
})

checkout.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
      'event': 'checkout',
      'ecommerce': {
        'checkout': {
          'actionField': {'step': 1, 'option': 'Visa'},
          'products': [{
            'name': 'Triblend Android T-Shirt',
            'id': '12345',
            'price': '15.25',
            'brand': 'Google',
            'category': 'Apparel',
            'variant': 'Gray',
            'quantity': 1
         }]
       }
     }
    });
})

checkoutOption.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
      'event': 'checkoutOption',
      'ecommerce': {
        'checkout_option': {
          'actionField': {'step': 2, 'option': 'UBS'}
        }
      }
    });
})

purchaseUA.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
    'event': 'purchaseUa',
    'ecommerce': {
        'purchase': {
            'actionField': {
                'id': 'T12345',                         // Transaction ID. Required for purchases and refunds.
                'affiliation': 'Online Store',
                'revenue': '35.43',                     // Total transaction value (incl. tax and shipping)
                'tax':'4.90',
                'shipping': '5.99',
                'coupon': 'SUMMER_SALE'
            },
            'products': [{                            // List of productFieldObjects.
                'name': 'Triblend Android T-Shirt',     // Name or ID is required.
                'id': '12345',
                'price': '15.25',
                'brand': 'Google',
                'category': 'Apparel',
                'variant': 'Gray',
                'quantity': 1,
                'coupon': ''                            // Optional fields may be omitted or set to empty string.
            },
            {
                'name': 'Donut Friday Scented T-Shirt',
                'id': '67890',
                'price': '33.75',
                'brand': 'Google',
                'category': 'Apparel',
                'variant': 'Black',
                'quantity': 1
            }]
        }
    }
    });
})

partialRefundUA.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
    'event': 'partialRefundUa',
    'ecommerce': {
        'refund': {
            'actionField': {'id': 'T12345'},        // Transaction ID.
            'products': [
                    {'id': 'P4567', 'quantity': 1},   // Product ID and quantity. Required for partial refunds.
                    {'id': 'P8901','quantity': 2}
            ]
        }
    }
    });
})

fullRefundUA.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
    'event': 'fullRefundUa',
    'ecommerce': {
        'refund': {
            'actionField': {'id': 'T12345'}         // Transaction ID. Required for purchases and refunds.
        }
    }
    });
})

//Escutadores GA4
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

addToCart.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
        event: "add_to_cart",
        ecommerce: {
            items: [{
            item_name: "Donut Friday Scented T-Shirt", // Name or ID is required.
            item_id: "67890",
            price: "33.75",
            item_brand: "Google",
            item_category: "Apparel",
            item_category2: "Mens",
            item_category3: "Shirts",
            item_category4: "Tshirts",
            item_variant: "Black",
            item_list_name: "Search Results",
            item_list_id: "SR123",
            index: 1,
            quantity: 2
            }]
        }
    });
})

removeFromCart.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
        event: "remove_from_cart",
        ecommerce: {
            items: [{
            item_name: "Donut Friday Scented T-Shirt", // Name or ID is required.
            item_id: "67890",
            price: 33.75,
            item_brand: "Google",
            item_category: "Apparel",
            item_variant: "Black",
            item_list_name: "Search Results",  // If associated with a list selection.
            item_list_id: "SR123",  // If associated with a list selection.
            index: 1,  // If associated with a list selection.
            quantity: 1
            }]
        }
    });
})

viewPromotion.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
        event: "view_promotion",
        ecommerce: {
            items: [{
            item_name: "Donut Friday Scented T-Shirt", // Name or ID is required.
            item_id: "67890",
            price: 33.75,
            item_brand: "Google",
            item_category: "Apparel",
            item_category2: "Mens",
            item_category3: "Shirts",
            item_category4: "Tshirts",
            item_variant: "Black",
            promotion_id: "abc123",
            promotion_name: "summer_promo",
            creative_name: "instore_suummer",
            creative_slot: "1",
            location_id: "hero_banner",
            index: 1,
            quantity: 1
            }]
        }
    });
})

selectPromotion.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
        event: "select_promotion",
        ecommerce: {
            items: [{
                item_name: "Donut Friday Scented T-Shirt", // Name or ID is required.
                item_id: "67890",
                price: 33.75,
                item_brand: "Google",
                item_category: "Apparel",
                item_category2: "Mens",
                item_category3: "Shirts",
                item_category4: "Tshirts",
                item_variant: "Black",
                promotion_id: "abc123",
                promotion_name: "summer_promo",
                creative_name: "instore_suummer",
                creative_slot: "1",
                location_id: "hero_banner",
                index: 1,
                quantity: 1
            }]
        }
    });
})

beginCheckout.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
        event: "begin_checkout",
        ecommerce: {
            items: [{
                item_name: "Donut Friday Scented T-Shirt", // Name or ID is required.
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
                index: 1,
                quantity: 1
            }]
        }
    });
})

purchase.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
    event: "purchase",
    ecommerce: {
        transaction_id: "T12345",
        affiliation: "Online Store",
        value: "59.89",
        tax: "4.90",
        shipping: "5.99",
        currency: "EUR",
        coupon: "SUMMER_SALE",
        items: [{
            item_name: "Triblend Android T-Shirt",
            item_id: "12345",
            price: "15.25",
            item_brand: "Google",
            item_category: "Apparel",
            item_variant: "Gray",
            quantity: 1
        }, {
            item_name: "Donut Friday Scented T-Shirt",
            item_id: "67890",
            price: 33.75,
            item_brand: "Google",
            item_category: "Apparel",
            item_variant: "Black",
            quantity: 1
        }]
    }
    });
})

partialRefund.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
    event: "refund",
    ecommerce: {
        transaction_id: "T12345", // Transaction ID.
        items: [{
            item_name: "Donut Friday Scented T-Shirt",
            item_id: "67890", // ID is required.
            price: 33.75,
            item_brand: "Google",
            item_category: "Apparel",
            item_category2: "Mens",
            item_category3: "Shirts",
            item_category4: "Tshirts",
            item_variant: "Black",
            item_list_name: "Search Results", // If associated with a list selection.
            item_list_id: "SR123", // If associated with a list selection.
            index: 1, // If associated with a list selection.
            quantity: 1 // Quantity is required.
        }]
    }
    });
})

fullRefund.addEventListener('click', function(){
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
        event: "refund",
        ecommerce: {
            transaction_id: "T12345" // Transaction ID. Required for purchases and refunds.
        }
    });
})