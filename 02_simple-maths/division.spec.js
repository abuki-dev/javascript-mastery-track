const diviisor=require('./division');

test('divides 10 by 2 to get 5',()=>{
    expect(diviisor(10,2)).toEqual(5);
});

test('divides 10 by 0 to get infinity',()=>{
    expect(diviisor(10,0)).toEqual(`infinity`);
});
test('divides 0 by 10 to get 0',()=>{
    expect(diviisor(0,10)).toEqual(0);
})
test('divides 0 by 0 to get NaN',()=>{
    expect(diviisor(0,0)).toEqual(`NaN`);
})
test('divides 10 by a string to get error',()=>{
    expect(diviisor(10,'a')).toEqual(`error 10 or a are not in the domain`);
})
test('divides a string by 10 to get error',()=>{
    expect(diviisor('a',10)).toEqual(`error a or 10 are not in the domain`);
})