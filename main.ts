document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeDisplay = document.getElementById('resume-display') as HTMLElement;

    let resumeData: {
        profilePicture: string;
        firstName: string;
        lastName: string;
        email: string;
        mobile: string;
        address: string;
        linkedin: string;
        github: string;
        education: string;
        experience: string;
        skills: string;
    } | null = null;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const fileInput = formData.get('profile-picture') as File;
        
        // Create a FileReader to read the profile picture
        const reader = new FileReader();
        reader.onload = () => {
            resumeData = {
                profilePicture: reader.result as string,
                firstName: formData.get('first-name') as string,
                lastName: formData.get('last-name') as string,
                email: formData.get('email') as string,
                mobile: formData.get('mobile') as string,
                address: formData.get('address') as string,
                linkedin: formData.get('linkedin') as string,
                github: formData.get('github') as string,
                education: formData.get('education') as string,
                experience: formData.get('experience') as string,
                skills: formData.get('skills') as string,
            };

            displayResume(resumeData);
        };
        reader.readAsDataURL(fileInput);
    });

    function displayResume(data: any) {
        resumeDisplay.innerHTML = `
            <img src="${data.profilePicture}" alt="Profile Picture" />
            <h2>${data.firstName} ${data.lastName}</h2>
            <p>Email: ${data.email}</p>
            <p>Mobile: ${data.mobile}</p>
            <p>Address: ${data.address}</p>
            <p>
                LinkedIn: <a href="${data.linkedin}" target="_blank" rel="noopener noreferrer">${data.linkedin}</a>
            </p>
            <p>
                GitHub: <a href="${data.github}" target="_blank" rel="noopener noreferrer">${data.github}</a>
            </p>
            <h3>Education</h3>
            <p>${data.education}</p>
            <h3>Experience</h3>
            <p>${data.experience}</p>
            <h3>Skills</h3>
            <p>${data.skills}</p>
            <button id="edit-button">Edit</button>
        `;

        const editButton = document.getElementById('edit-button') as HTMLButtonElement;
        editButton.addEventListener('click', () => {
            populateForm(data);
        });
    }

    function populateForm(data: any) {
        (document.getElementById('first-name') as HTMLInputElement).value = data.firstName;
        (document.getElementById('last-name') as HTMLInputElement).value = data.lastName;
        (document.getElementById('email') as HTMLInputElement).value = data.email;
        (document.getElementById('mobile') as HTMLInputElement).value = data.mobile;
        (document.getElementById('address') as HTMLInputElement).value = data.address;
        (document.getElementById('linkedin') as HTMLInputElement).value = data.linkedin;
        (document.getElementById('github') as HTMLInputElement).value = data.github;
        (document.getElementById('education') as HTMLTextAreaElement).value = data.education;
        (document.getElementById('experience') as HTMLTextAreaElement).value = data.experience;
        (document.getElementById('skills') as HTMLTextAreaElement).value = data.skills;
        
        // Reset the resume display
        resumeDisplay.innerHTML = '';
    }
});
