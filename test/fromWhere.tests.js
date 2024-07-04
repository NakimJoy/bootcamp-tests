describe('Test my fromWhere function', function () {
    it("it should return 'Bellville', registrationNumber.startsWith('CY')" , function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    })
    it("it should return 'Paarl', registrationNumber.startsWith('CJ')" , function(){
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    })   
    it("it should return 'Cape Town', registrationNumber.startsWith('CA')", function () {
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    })   
    it("it should return 'Some other place!', ", function () {
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    })
})