const submitform =(event)=>{
   
    event.preventDefault();
    let email=document.getElementById('email').value
    let password=document.getElementById('pass').value
    console.log(email,password)
if(email=="fullstack@gmail.com" && password=="123456")
{
   alert('success')
    document.getElementById('change').style.background="red"
    location.href="http://127.0.0.1:5500/dashboard.html"
}
else{
    alert('wrong credentials')
}










}