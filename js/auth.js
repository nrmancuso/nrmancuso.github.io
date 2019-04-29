function setAuthListener() {

//Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnLogout = document.getElementById('btnLogout');
    const addBook = document.getElementById('addBook');
    const userProfile = document.getElementById('userProfile');
    const userProfileName = document.getElementById('userProfileName');

//Add login event
    btnLogin.addEventListener('click', ev => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);

        promise.catch(ev => {
            console.log(ev.message);
            if (ev.code === "auth/invalid-email") {
                alert("Check password and try again.");
            }
        })
    });

    btnLogout.addEventListener('click', ev => {
        firebase.auth().signOut();

        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/') + 1);

        if (filename !== 'index.html') {
            window.location.href = "../index.html";
        }
    });

//Realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {

        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hidden');
            btnLogin.classList.add('hidden');
            txtEmail.classList.add('hidden');
            txtPassword.classList.add('hidden');
            loginUserProfile(firebaseUser);

        } else {

            console.log('not logged in');
            btnLogout.classList.add('hidden');
            btnLogin.classList.remove('hidden');
            txtEmail.classList.remove('hidden');
            txtPassword.classList.remove('hidden');
            logoutUserProfile();
        }
    });

    addBook.addEventListener('click', ev => {
        var user = firebase.auth().currentUser;
        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/') + 1);

        if (user && (filename === "addbook.html")) {

        } else if (user) {
            window.location.href = "html/addbook.html";
        } else {
            alert("Must be logged in to do that!")
        }
    });

    function loginUserProfile(firebaseUser) {

        var userImage = document.getElementById("userProfilePic");

        if (firebaseUser.email === "pooh@fancy.com") {
            userImage.src = "pooh.png";
        } else if (firebaseUser.email === "donaldduck@duck.com") {
            userImage.src = "dduck.jpg";
        } else {
            userImage.src = "user.svg";
        }
    userProfile.appendChild(userImage);
    userProfileName.innerText = firebaseUser.email;
}

function logoutUserProfile() {
    var userImage = document.getElementById('userProfilePic');
    userImage.src = '';
    userProfileName.innerText = '';
}
}



