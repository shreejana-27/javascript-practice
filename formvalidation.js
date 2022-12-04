
const displayMsg=(message,idName,colorName)=>{
    document.getElementById(idName).innerHTML=message
    document.getElementById(idName).style.color=colorName
}
const fnameValidation=()=>{
    const first_name=document.getElementById('firstname').value
    if(first_name==''){
        displayMsg('firstname is mandatory','fnameMsg', 'red')
    }
    else if(first_name.length<3){
        displayMsg('firstname must be more than 2 character','fnameMsg', 'red')
        return false
    }
    else if(!first_name.match(/^([a-zA-Z]+$)/)){
        displayMsg('firstname only accepts alphabets','fnameMsg','red')
        return false
    }
    else{
        displayMsg('valid firstname','fnameMsg','green')
        return true
    }
}
const lnameValidation=()=>{
    const last_name=document.getElementById('lastname').value
    if(last_name==''){
        displayMsg('lastname is mandatory','lnameMsg', 'red')
    }
    else if(last_name.length<3){
        displayMsg('lastname must be more than 2 character','lnameMsg', 'red')
        return false
    }
    else if(!last_name.match(/^([a-zA-z])+$/)){
        displayMsg('lastname only accepts alphabets','lnameMsg','red')
    }
    else{
        displayMsg('valid lastname','lnameMsg','green')
        return true
    }
}

const emailValidation=()=>{
    const email=document.getElementById('email').value
    if(email==''){
        displayMsg('email is mandatory','emailMsg', 'red')
    }
   
    else if(!email.match(/^([a-z0-9])[a-z0-9\-\_\.]+\@+[a-z]+\.+[a-z]+$/)){
        displayMsg('invalid email formate','emailMsg', 'red')
        return false
    }
    else{
        displayMsg('valid email','emailMsg','green')
        return true
    }
}

const pwdValidation=()=>{
    const password=document.getElementById('password').value
    if(password==''){
        displayMsg('password is mandatory','pwdMsg','red')
    }
    else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&*]).{8,100}$/)){
        displayMsg('password must contain uppercase, lowercase, numeric and special character of minimum of 8 characters','pwdMsg', 'red')
        return false
    }
    else{
        displayMsg('valid password','pwdMsg','green')
        return true
    }
}
const validForm=()=>{
    if(fnameValidation()&&lnameValidation()&&emailValidation()&&pwdValidation()){
        return true
    }
    else{
        return false
    }
}