const fromStellies = allFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341', 'CL');
console.log(`fromStellies should contain ['CL 124', 'CL 345', 'CL 341']: ${fromStellies}`);

const fromKuilsriver = allFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341', 'CF');
console.log(`fromKuilsriver should contain []: ${fromKuilsriver}`);
