function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  document.getElementById("g-id").innerHTML = profile.getId();
  console.log("Signed In");
}

function signOut() {
  var auth2 =gapi.auth2.getAuthInstance();
  auth2.signOut();
  document.getElementById("g-id").innerHTML = "";
  console.log("Signed Out");
}
