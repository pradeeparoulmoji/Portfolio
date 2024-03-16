function emailSend(){

   var userName = document.getElementById('name').value;
   var phone = document.getElementById('phone').value;
   var email = document.getElementById('email').value;

   var messageBody = "Name " + userName +
   "<br/> Phone " + phone +
   "<br/> Email " + email;
   Email.send({
   Host : "smtp.elasticemail.com",
   Username : "pradaroulmojiai@gmail.com",
   Password : "8D32B790762F6A0B9E0CD1A7F3F2951C50F5",
   To : 'prafigon99@gmail.com',
   From : "pradaroulmojiai@gmail.com",
   Subject : "This is the subject",
   Body : messageBody
}).then(
 message => {
     if(message=='OK'){
         swal("Secussful", "You clicked the button!", "success");
     }
     else{
         swal("Error", "You clicked the button!", "error");
     }
 }
);
}
