// 🔥 REPLACE WITH YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBJOkk5MO96xzJ3CUN-BRyjqdEz3ZyZAtE",
  authDomain: "mychataapp-0123.firebaseapp.com",
  projectId: "mychataapp-0123",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// SEND EMAIL OTP (LOGIN LINK)
function sendOTP() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  if (!email) {
    message.innerText = "Please enter your email";
    message.style.color = "red";
    return;
  }

  const actionCodeSettings = {
    url: window.location.href, // redirect back here
    handleCodeInApp: true,
  };

  auth.sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem("emailForSignIn", email);
      message.innerText = "Login link sent! Check your email 📧";
      message.style.color = "green";
    })
    .catch(error => {
      message.innerText = error.message;
      message.style.color = "red";
    });
}

// COMPLETE LOGIN AFTER EMAIL CLICK
if (auth.isSignInWithEmailLink(window.location.href)) {
  let email = window.localStorage.getItem("emailForSignIn");

  if (!email) {
    email = prompt("Please confirm your email");
  }

  auth.signInWithEmailLink(email, window.location.href)
    .then(() => {
      window.localStorage.removeItem("emailForSignIn");
      alert("Login successful 🎉");
      // NEXT PAGE WILL COME LATER
    })
    .catch(err => alert(err.message));
}