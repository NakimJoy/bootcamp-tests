describe('Test my yearsAgo function' , function(){
    it("it should return 'yearsDifference' " , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});