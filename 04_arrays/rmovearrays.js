const toberemoved =function(array,...args){
    const newarray=[]; 

    for (let index = 0; index < array.length; index++) {

        const element = array[index];

        let yesremove=false;

        for (let i = 0; i < args.length; i++){
            if(args[i]===element){

                yesremove=true;

                break;
            }
            
        }
    
        if(yesremove===false){
            newarray.push(element);
        }
         }
  
    return newarray;
    
}
module.exports=toberemoved;