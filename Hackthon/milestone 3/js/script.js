document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resumeform');
    const resumeOutput = document.getElementById('resumeOutput');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const profilePicture = document.getElementById('profilepicture').files[0];
        const education = document.getElementById('education').value;
        const experience = document.getElementById('experience').value;
        const skills = document.getElementById('skills').value;

        const output = `
            <h2>Resume</h2>
            ${profilePicture ? `<img src="${URL.createObjectURL(profilePicture)}" alt="Profile Picture" class="profilepicture">` : ''}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        resumeOutput.innerHTML = output;
    });
});
