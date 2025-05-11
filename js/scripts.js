window.addEventListener('DOMContentLoaded', event => {
    // Button click handlers
    const experienceSelector = document.getElementById('ExperienceSelector');
    const educationSelector = document.getElementById('EducationSelector');

    if (experienceSelector && educationSelector) {
        experienceSelector.addEventListener('click', () => {
            changeContent('Experience');
        });

        educationSelector.addEventListener('click', () => {
            changeContent('Education');
        });
    }

    function changeContent(type) {
        const contentContainer = document.getElementById('contentContainer');

        if (!contentContainer) return;

        if (type === 'Experience') {
            contentContainer.innerHTML = `
                <div class="experience-card">
                    <img src="assets/img/NGC_LOGO.jpg" alt="Northrop Grumman Logo" class="company-logo">
                    <div class="experience-content">
                        Associate Hardware Engineer
                        <p class="company-name">Northrop Grumman | Rolling Meadows, IL | Summer 2023 – Present</p>
                        <ul>
                            <li>Built adaptive LMS filter on MPSoC with VHDL and Vivado.</li>
                            <li>Managed $10M procurement, improving efficiency and cost.</li>
                            <li>Automated lab equipment testing using Python.</li>
                        </ul>
                    </div>
                </div>
                <div class="experience-card">
                    <img src="assets/img/BELCAN_LOGO.jpg" alt="Belcan Logo" class="company-logo">
                    <div class="experience-content">
                        Test Engineering Intern
                        <p class="company-name">Belcan | Peoria, IL | Summer 2022</p>
                        <ul>
                            <li>Performed unit testing on a Base Station for Bobcat heavy machinery.</li>
                            <li>Automated regression testing using the Cucumber framework and C++.</li>
                            <li>Developed a CAN bus parsing script in Python.</li>
                        </ul>
                    </div>
                </div>
                <div class="experience-card">
                    <img src="assets/img/WS.png" alt="World Source Logo" class="company-logo">
                    <div class="experience-content">
                        Software Engineering Intern
                        <p class="company-name">World Source | Batavia, IL | Summer 2019</p>
                        <ul>
                            <li>Designed and developed company website with modern web tools.</li>
                            <li>Created SQL queries for production data analysis.</li>
                            <li>Optimized and maintained Salesforce database.</li>
                        </ul>
                    </div>
                </div>
            `;
        } else if (type === 'Education') {
            contentContainer.innerHTML = `
                <div class="education-card">
                    <p class="school-name">Bradley University | Peoria, IL</p>
                    <p>Bachelor of Science in Electrical Engineering (Expected Graduation: 2025)</p>
                    <ul>
                        <li>Relevant Coursework: Digital Logic Design, Signal Processing, Circuit Analysis, Electromagnetic Fields</li>
                        <li>Clubs: IEEE, Engineering Club</li>
                    </ul>
                </div>
                <div class="education-card">
                    <p class="school-name">Community College | Example City, IL</p>
                    <p>Associate of Science in Engineering</p>
                    <ul>
                        <li>Courses: Calculus, Physics, Chemistry, Computer Science</li>
                        <li>Activities: Math Club, Robotics Club</li>
                    </ul>
                </div>
            `;
        }
    }

    // Optional: Load Experience by default
    changeContent('Experience');
});
