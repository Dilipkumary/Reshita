function loginWithGoogle() {
    // Add your Google login logic here
    alert("Logging in with Google...");
}

function loginWithLinkedIn() {
    // Add your LinkedIn login logic here
    alert("Logging in with LinkedIn...");
}

function loginWithFacebook() {
    // Add your Facebook login logic here
    alert("Logging in with Facebook...");
}

function submitPurchase() {
    // Get user information from the form
    const name = document.getElementById('name').value;
    const contact = document.getElementById('Contact').value;
    const Address = document.getElementById('Address').value;

    // Determine the selected purchase option (self or other)
    const purchaseOption = document.querySelector('input[name="purchase-option"]:checked').value;

    // Add your purchase logic here, using the user information and purchase option
    alert(`Purchase option: ${purchaseOption}\nName: ${name}\nContact: ${Contact}\NO of clinic: ${Noofclinic}`);
}
