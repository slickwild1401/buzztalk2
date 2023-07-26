
var firebaseConfig = {
      apiKey: "AIzaSyC9U9XEQw1hBHAZeTk0MrnFaJUdRwqbVkc",
      authDomain: "buzztalkproject.firebaseapp.com",
      databaseURL: "https://buzztalkproject-default-rtdb.firebaseio.com",
      projectId: "buzztalkproject",
      storageBucket: "buzztalkproject.appspot.com",
      messagingSenderId: "208060775458",
      appId: "1:208060775458:web:301040000744026e539e7b",
      measurementId: "G-ZR0M29GDZ9"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
