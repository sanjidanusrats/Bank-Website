document.getElementById('btn-submit').addEventListener('click', function(){

    const emailFeild =document.getElementById('email-field');
    const email = emailFeild.value;

   const passField = document.getElementById('pass-field');
   const pass = passField.value;

   if (email=== 'sanjida@gmail.com'&& pass=== 'sanjidA000') {
    window.location.href = 'dashboard.html';
   }
   else {
    alert('tui bank dakat');
   }
})