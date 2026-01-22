// 🔥 REPLACE WITH YOUR FIREBASE CONFIG
console.log("App JS loaded");

const firebaseConfig = {
  apiKey: "AIzaSyBJOkk5MO96xzJ3CUN-BRyjqdEz3ZyZAtE",
  authDomain: "mychataapp-0123.firebaseapp.com",
  projectId: "mychataapp-0123",
   appId: "1:554561841044:web:9fa192ac22be44371b1181"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function loginWithGoogle() {
  console.log("Google button clicked");

  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then(result => {
      alert("Login successful ✅");
      console.log(result.user);
    })
    .catch(error => {
      alert(error.message);
      console.error(error);
    });
}
