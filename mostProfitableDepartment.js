function mostProfitableDepartment(salesData) {
    let departmentSales = {};
    
    salesData.forEach(sale => {
        if (departmentSales[sale.department]) {
            departmentSales[sale.department] += sale.sales;
        } else {
            departmentSales[sale.department] = sale.sales;
        }
    });
    
    let mostProfitable = Object.keys(departmentSales).reduce((a, b) => departmentSales[a] > departmentSales[b] ? a : b);
    
    return mostProfitable;
}

function mostProfitableDay(salesData) {
    let daySales = {};
    
    salesData.forEach(sale => {
        if (daySales[sale.day]) {
            daySales[sale.day] += sale.sales;
        } else {
            daySales[sale.day] = sale.sales;
        }
    });
    
    let mostProfitable = Object.keys(daySales).reduce((a, b) => daySales[a] > daySales[b] ? a : b);
    
    return mostProfitable;
}

var salesData = [
    { department: 'hardware', sales: 4500, day: 'Monday' },
    { department: 'outdoor', sales: 1500, day: 'Monday' },
    { department: 'carpentry', sales: 5500, day: 'Monday' },
];

var salesData2 = [
    { department: 'electronics', sales: 4500, day: 'Monday' },
    { department: 'outdoor', sales: 1500, day: 'Monday' },
    { department: 'carpentry', sales: 5500, day: 'Monday' },
    
];
