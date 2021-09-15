generate = () =>{
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (var i = 1; i <= 12; i++) {
        let generate = letters[Math.floor(Math.random() * letters.length)];
        password += generate;
    }
    document.querySelector('.password-here').innerHTML = password;
    console.log('Your Password is : '+password);
}
copy = () =>{
    var pass = document.querySelector('.password-here').innerHTML
    navigator.clipboard.writeText(pass)
    console.log('Copy this : '+pass);
    document.querySelector('.password-copy').style.display="flex"
    setTimeout(()=>{
        document.querySelector('.password-copy').style.opacity="0"
        setTimeout(()=>{
            document.querySelector('.password-copy').style.display="none"
            document.querySelector('.password-copy').style.opacity="1"
        },500)
    },1500)
}