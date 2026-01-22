// 🔥 REPLACE WITH YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBJOkk5MO96xzJ3CUN-BRyjqdEz3ZyZAtE",
  authDomain: "mychataapp-0123.firebaseapp.com",
  projectId: "mychataapp-0123",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// GOOGLE LOGIN
function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const message = document.getElementById("message");

  auth.signInWithPopup(provider)
    .then(result => {
      message.innerText = "Login successful 🎉";
      message.style.color = "green";
      console.log("User:", result.user);
      // NEXT PAGE WILL COME LATER
    })
    .catch(error => {
      message.innerText = error.message;
      message.style.color = "red";
    });
}
