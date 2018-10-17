let data = {
    email: this.state.email,
    password: this.state.password
};

fetch("http://192.168.1.31:3001/auth/login", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then((res)=>{
    return res.json();
})    
.then((res)=>{
    console.log(res);
    if(res.access_token !== undefined){
        cookie.save('access_token', res.access_token);
        cookie.save('role', res.role);
        this.props.history.push("/register");
        this.notify(res.message);
    }else{
        this.notify(res.error.user_authentication[0]);
    }
})    
.catch((err)=>{
    console.log("Error while login "+ err);
})    