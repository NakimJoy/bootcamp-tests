describe('Test my countAllFromTown function', function() {
    it("should return 'fromStellies should contain ['CL 124', 'CL 345', 'CL 341']: , for registration numbers that ends with ['CL']" , function() {
        var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])
    });
    it("should return 'fromKuilsriver should contain []: , for registration numbers that ends with other" , function() {
        var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
        assert.deepEqual(fromKuilsriver, []);    });

});