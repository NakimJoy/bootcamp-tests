describe('Test my countRegNumber function', function() {
    it("should return '3' , as result for  registrationNumbers.length " , function() {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    
    })
      it("should return '1',  as result for registrationNumbers.length " , function() {

        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    })
})