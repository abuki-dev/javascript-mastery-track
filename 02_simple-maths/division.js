const divisor=(x,y)=>{
    if(!Number.isInteger(x)||!Number.isInteger(y)){return `error ${x} or ${y} are not in the domain`}
    else if(x===0&&y===0){return `NaN`}
    else if(y===0){return `infinity`}
    else {
    return x/y;
}
}
module.exports=divisor;