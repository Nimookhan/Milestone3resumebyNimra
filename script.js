var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var cnicElement = document.getElementById('cnic');
    var contactElement = document.getElementById('contact');
    var addressElement = document.getElementById('address');
    var cityElement = document.getElementById('city');
    var countryElement = document.getElementById('country');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && cnicElement && contactElement && addressElement && cityElement
        && countryElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var cnic = cnicElement.value;
        var contact = contactElement.value;
        var address = addressElement.value;
        var city = cityElement.value;
        var country = countryElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Handling the profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Create the Resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-picture\" style=\"width:150px;height:150px;\">") : "", " \n            <p><strong>Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>CNIC:</strong> ").concat(cnic, "</p>\n            <p><strong>Contact:</strong> ").concat(contact, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            <p><strong>City:</strong> ").concat(city, "</p>\n            <p><strong>Country:</strong> ").concat(country, "</p>\n\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing.');
        }
    }
    else {
        console.error('One or more required form elements are missing data.');
    }
});
