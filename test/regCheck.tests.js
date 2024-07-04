describe('Test my regCheck function' , function(){
    it("it should return 'False', regNo.endsWith(regEnd)" , function(){
       assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
       assert.equal(regCheck('5566 L', 'M'), false);
       assert.equal(regCheck('ERT 123 EC', 'GP'), false);
       assert.equal(regCheck('FGT 123 MM', 'MP'), false); 


 })
it("it should return 'true', regNo.endsWith(regEnd)" , function(){
    assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    assert.equal(regCheck('5566 L', 'L'), true);
    assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    assert.equal(regCheck('FGT 123 MP', 'MP'), true);
})
})