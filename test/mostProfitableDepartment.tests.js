describe('Test my mostProfitableDepartment function', function() {
    it("should return 'Most profitable department: carpentry' for dataset 1", function() {
        assert.equal('carpentry', mostProfitableDepartment(salesData), "Most profitable department is 'carpentry' for dataset 1");
    });

    it("should return 'Most profitable day: Monday' for dataset 2", function() {
        assert.equal('Monday', mostProfitableDay(salesData2), "Most profitable day is 'Monday' for dataset 2");
    });
});

