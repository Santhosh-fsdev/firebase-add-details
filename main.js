 // Initialize Firebase
 //firebase credentials
 var config = {
  apiKey: "xxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxx",
  databaseURL: "xxxxxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxx"
};

firebase.initializeApp(config);

//firebase object name 
var ref = firebase.database().ref('object_name');

//adding event listener to the form and submitting values
document.getElementById('form').addEventListener('submit',submitValues);

//message after form is submitted
document.querySelector('.msg').style.display='none';

function submitValues(e){

  e.preventDefault();


  var name = getvalue('name');
  var pass = getvalue('pass');
  var email = getvalue('email');
 

  saveMessage(name , pass , email );

  document.querySelector('.msg').style.display='block';

//displaying message block
  setTimeout(function(){
    document.querySelector('.msg').style.display='none';
  },3000);

  document.getElementById('form').reset();

}

function getvalue(id){
  return document.getElementById(id).value;

}
//saving message to the firebase
function saveMessage(name, pass , email){
  var newRef =  ref.push();
  newRef.set({
    name:name,
    pass:pass,
    email:email

  });

  
  
}
