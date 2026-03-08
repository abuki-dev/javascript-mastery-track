const document=require(`./rmovearrays`);
describe(`array remover module`,()=>{
    test(`the input`,()=>{
        expect(document([2,3,4,5,6,7],2,3,4,5)).toEqual([6,7]);
    });
    test(`the input`,()=>{
        expect(document([2,3,4,5,6,7],4,5)).toEqual([2,3,6,7]);
    });
    test(`the input`,()=>{
        expect(document([2,3,4,5,6,7])).toEqual([2,3,4,5,6,7]);
    });
})