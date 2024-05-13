function displayAffirmation(response) {
  new Typewriter("#affirmation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAffirmation(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "You are an inspirational AI Assistant that tells short and positive affirmations. The affirmation must be provided in HTML format. Example: <p>this is a affirmation</p>";
  let prompt = `User instructions: Generate a short and positive affirmation ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let affirmationElement = document.querySelector("#affirmation");
  affirmationElement.classList.remove("hidden");
  affirmationElement.innerHTML = `<div class="generating">⏳ Generating a positive affirmation </div>`;

  axios.get(apiURL).then(displayAffirmation);
}

let affirmationFormElement = document.querySelector(
  "#affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmation);
