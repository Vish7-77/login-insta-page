


const submitform =()=>{
    let email=document.getElementById('email').value
    let password=document.getElementById('pass').value
    console.log(email,password)
if(email=="fullstack@gmail.com" && password=="123456")
{
   alert('success')
    document.getElementById('change').style.background="red"
}
else{
    alert('wrong credentials')
}










}