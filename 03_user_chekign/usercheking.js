const user=(name,username)=>{
    if(!isNaN(name) && !isNaN(username)){
        return "Please enter a valid name and username";
    }else if(!isNaN(name)){
        return "Please enter a valid name";
    }else if(!isNaN(username)){
        return "Please enter a valid username";
    }else{
        return `Welcome ${name} (${username})!`;
    }

}
module.exports=user;