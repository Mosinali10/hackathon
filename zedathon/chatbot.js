// A simple rule-based chatbot function
function chatbot(input) {
  let output = "";
  input = input.toLowerCase();

  // Questions related to services
  if (input.includes("ac technician") || input.includes("air conditioning")) {
      output = "We have AC technicians available for repair and servicing. How can we assist you?";
  } else if (input.includes("electrician")) {
      output = "Our electricians are ready to handle all your electrical issues. Please let us know what you need.";
  } else if (input.includes("plumber")) {
      output = "We have experienced plumbers for fixing leaks and plumbing problems. How can we help you?";
  } else if (input.includes("mechanic")) {
      output = "Our mechanics can assist with vehicle repairs. What seems to be the issue with your vehicle?";
  } else if (input.includes("carpenter")) {
      output = "We have skilled carpenters for furniture and woodwork. What do you need help with?";
  } else if (input.includes("cleaning")) {
      output = "We offer cleaning services for homes and offices. Please specify what type of cleaning you need.";
  } else if (input.includes("pest control")) {
      output = "Our pest control team can help with rodent and insect problems. Let us know your requirements.";
  } else if (input.includes("home appliances repair")) {
      output = "We provide repair services for various home appliances like refrigerators, washing machines, and more.";
  } else if (input.includes("building painting") || input.includes("painting services")) {
      output = "Our painters can help with both interior and exterior painting for your buildings.";
  } else if (input.includes("near me") || input.includes("location")) {
      output = "Please enable location access to help us find services near you.";
  } else if (input.includes("how to reach") || input.includes("location")) {
      output = "You can contact us for guidance on the nearest service provider.";
  } else if (input.includes("hours") || input.includes("open")) {
      output = "Our services are available 24/7. Feel free to reach out anytime.";
  } else if (input.includes("price") || input.includes("cost")) {
      output = "Prices vary depending on the service. Please specify the service you need, and we'll provide details.";
  } else if (input.includes("contact") || input.includes("phone number")) {
      output = "You can contact us at +1234567890 for any queries.";
  } else {
      output = "Sorry, I couldn't understand that. Please ask about our services or type 'help' for assistance.";
  }

  return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
  let chat = document.getElementById("chat-box");
  let userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.textContent = message;
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;  // Scroll to the bottom
}

// Display the bot message on the chat
function displayBotMessage(message) {
  let chat = document.getElementById("chat-box");
  let botMessage = document.createElement("div");
  botMessage.classList.add("chatbot-message");
  botMessage.textContent = message;
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;  // Scroll to the bottom
}

// Send the user message and get the bot response
function sendMessage() {
  let input = document.getElementById("input").value;
  if (input) {
      displayUserMessage(input);  // Display user's message
      let output = chatbot(input);  // Get chatbot response
      setTimeout(function() {
          displayBotMessage(output);  // Display chatbot's response
      }, 1000);  // Delay to simulate thinking
      document.getElementById("input").value = "";  // Clear the input field
  }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {  // Enter key
      sendMessage();
  }
});
