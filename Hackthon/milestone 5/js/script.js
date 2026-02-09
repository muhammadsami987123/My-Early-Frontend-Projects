document.getElementById('resumeform')?.addEventListener('submit', function(event) {
    event.preventDefault();

    var profilePictureInput = document.getElementById('profilepicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById('username');

    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;

        var profilePictureFile = profilePictureInput.files?.[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        var resumeHTML = 
            `<h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilepicture">` : ''}
            <p><strong>Name:</strong> ${name}</p>  
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>`;

        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;

            var buttonsContainer = document.getElementById("buttonsContainer");
            if (!buttonsContainer) {
                buttonsContainer = document.createElement("div");
                buttonsContainer.id = "buttonsContainer";
                resumeOutputElement.appendChild(buttonsContainer);
            } else {
                buttonsContainer.innerHTML = '';
            }

            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", function () {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);

            var shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener("click", function () {
                var shareableLink = `https://yourdomain.com/resumes/${name.replace(/\s+/g, "_")}_cv.html`;
                navigator.clipboard.writeText(shareableLink)
                    .then(function () {
                        alert("Shareable link copied to clipboard!");
                    })
                    .catch(function (err) {
                        console.error("Failed to copy link:", err);
                    });
            });
            buttonsContainer.appendChild(shareLinkButton);
        }
    }
});
