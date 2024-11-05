document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeDisplay = document.getElementById('resume-display');
    var resumeData = null;
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var formData = new FormData(form);
        var fileInput = formData.get('profile-picture');
        // Create a FileReader to read the profile picture
        var reader = new FileReader();
        reader.onload = function () {
            resumeData = {
                profilePicture: reader.result,
                firstName: formData.get('first-name'),
                lastName: formData.get('last-name'),
                email: formData.get('email'),
                mobile: formData.get('mobile'),
                address: formData.get('address'),
                linkedin: formData.get('linkedin'),
                github: formData.get('github'),
                education: formData.get('education'),
                experience: formData.get('experience'),
                skills: formData.get('skills'),
            };
            displayResume(resumeData);
        };
        reader.readAsDataURL(fileInput);
    });
    function displayResume(data) {
        resumeDisplay.innerHTML = "\n            <img src=\"".concat(data.profilePicture, "\" alt=\"Profile Picture\" />\n            <h2>").concat(data.firstName, " ").concat(data.lastName, "</h2>\n            <p>Email: ").concat(data.email, "</p>\n            <p>Mobile: ").concat(data.mobile, "</p>\n            <p>Address: ").concat(data.address, "</p>\n            <p>\n                LinkedIn: <a href=\"").concat(data.linkedin, "\" target=\"_blank\" rel=\"noopener noreferrer\">").concat(data.linkedin, "</a>\n            </p>\n            <p>\n                GitHub: <a href=\"").concat(data.github, "\" target=\"_blank\" rel=\"noopener noreferrer\">").concat(data.github, "</a>\n            </p>\n            <h3>Education</h3>\n            <p>").concat(data.education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(data.experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(data.skills, "</p>\n            <button id=\"edit-button\">Edit</button>\n        ");
        var editButton = document.getElementById('edit-button');
        editButton.addEventListener('click', function () {
            populateForm(data);
        });
    }
    function populateForm(data) {
        document.getElementById('first-name').value = data.firstName;
        document.getElementById('last-name').value = data.lastName;
        document.getElementById('email').value = data.email;
        document.getElementById('mobile').value = data.mobile;
        document.getElementById('address').value = data.address;
        document.getElementById('linkedin').value = data.linkedin;
        document.getElementById('github').value = data.github;
        document.getElementById('education').value = data.education;
        document.getElementById('experience').value = data.experience;
        document.getElementById('skills').value = data.skills;
        // Reset the resume display
        resumeDisplay.innerHTML = '';
    }
});
