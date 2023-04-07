describe('firsttest',()=>{
    let data : any;
    let a : number;
    let b : number;
    let str : string;


    beforeEach(()=>{
        console.log('from before');
        data = {};
    });

    it('dummy test',()=>{});
    
    it('it should return true if flag is true',()=>{
        data.flag = false;
        data.flag = true;
        expect(data.flag).toBe(true);
    });

});





