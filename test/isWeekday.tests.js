describe('Test my isWeekday function' , function(){
    it("it should return 'False', when it's Weekend" , function(){

   assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Sunday'), false);
    })
it("it should return 'true', when it's Weekday" , function(){
assert.equal(isWeekday('Monday'), true);
assert.equal(isWeekday('Tuesday'), true);
assert.equal(isWeekday('Wednesday'), true);
assert.equal(isWeekday('Thursday'), true);
assert.equal(isWeekday('Friday'), true); 
})
})
