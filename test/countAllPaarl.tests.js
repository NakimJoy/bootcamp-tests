describe('Test my countAllPaarl function', function() {
    it("should return '3', for registration numbers that ends with ['CL']" , function() {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
     })
      it("should return '2', for registration numbers that ends with ['CL']" , function() {

assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    })
})