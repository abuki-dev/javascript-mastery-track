const userchek=require(`./usercheking`);
describe(`chking validity `,()=>{
    test(`the input`,()=>{
        expect(userchek(34,`abukira`)).toEqual(`Please enter a valid name`)
    });
    test(`the input`,()=>{
        expect(userchek(34,`abukira`)).toEqual(`Please enter a valid name`)
    });
    test(`the input`,()=>{
        expect(userchek(`John`,34)).toEqual(`Please enter a valid username`)
    });
    test(`the input`,()=>{
        expect(userchek(34,34)).toEqual(`Please enter a valid name and username`)
    });
    test(`the input`,()=>{
        expect(userchek(`abuki`,`abukira`)).toEqual(`Welcome abuki (abukira)!`)
    });
});