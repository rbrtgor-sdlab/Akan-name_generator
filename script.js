// storing the female and male names with the corresponding days of the week as an array inside a function for the purposes of mapping an input from forms in html.
const akanNames = {
  maleNames: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
  femaleNames: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};
const button = document.getElementById("button");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const birthday = document.getElementById("birthday").value;
  const gender = document.getElementById("gender-select").value;

  function getAkanName(birthday, gender) {
    const d = new Date(birthday);
    const dayOfWeek = d.getDay();

    const index = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    if (gender === "male") {
      return { day: akanNames.days[index], name: akanNames.maleNames[index] };
    } else {
      return { day: akanNames.days[index], name: akanNames.femaleNames[index] };
    }
  }

  // Validate inputs
  if (!birthday || !gender) {
    alert("Please fill in both gender and date of birth");
    return;
  }

  // Get the Akan name
  const result = getAkanName(birthday, gender);

  // Display the result
  const displaySection = document.getElementById("akandisplay");
  displaySection.innerHTML = `
    <h3>Your Akan Name</h3>
    <p><strong>Day of Birth:</strong> ${result.day}</p>
    <p><strong>Your Akan Name:</strong> ${result.name}</p>
  `;
});
