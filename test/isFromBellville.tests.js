describe('Test my isFromBellville function' , function(){
    it("it should return 'False', item.startsWith('CJ')" , function(){

        assert.equal(isFromBellville('CJ 123'), false);

    })
it("it should return 'true', item.startsWith('CY')" , function(){
    assert.equal(isFromBellville('CY 123'), true);

})
})
