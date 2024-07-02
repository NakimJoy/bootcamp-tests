function findItemsOver20(products) {
    const itemsOver20 = [];
    
    for (let i = 0; i < products.length; i++) {
        if (products[i].qty > 20) {
            itemsOver20.push(products[i]);
        }
    }
    
    return itemsOver20;
}

function findItemsOver(products, threshold) {
    const itemsOverThreshold = [];
    
    for (let i = 0; i < products.length; i++) {
        if (products[i].qty > threshold) {
            itemsOverThreshold.push(products[i]);
        }
    }
    
    return itemsOverThreshold;
}

const itemList = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
    { name: 'apples', qty: 3 }
];
