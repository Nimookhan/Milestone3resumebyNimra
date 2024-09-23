document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const cnicElement = document.getElementById('cnic') as HTMLInputElement;
    const contactElement = document.getElementById('contact') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const cityElement = document.getElementById('city') as HTMLInputElement;
    const countryElement = document.getElementById('country') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    if (profilePictureInput && nameElement && emailElement && cnicElement && contactElement && addressElement && cityElement
        && countryElement && educationElement && experienceElement && skillsElement) {

        const name = nameElement.value;
        const email = emailElement.value;
        const cnic = cnicElement.value;
        const contact = contactElement.value;
        const address = addressElement.value;
        const city = cityElement.value;
        const country = countryElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Handling the profile picture
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Create the Resume output
        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture" style="width:150px;height:150px;">` : ""} 
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>CNIC:</strong> ${cnic}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Country:</strong> ${country}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Experience</h3>
            <p>${experience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing.');
        }
    } else {
        console.error('One or more required form elements are missing data.');
    }
});
