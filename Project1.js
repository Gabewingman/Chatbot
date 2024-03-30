function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    var chatBox = document.getElementById("chatBox");
    var userMessage = document.createElement("div");
    userMessage.innerHTML = "<strong>You:</strong> " + userInput;
    chatBox.appendChild(userMessage);

    var botResponse = document.createElement("div");
    botResponse.innerHTML = "<strong>Bot:</strong> " + getResponse(userInput);
    chatBox.appendChild(botResponse);

    document.getElementById("userInput").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(userInput) {
    var greetings = ["hello", "hi", "hey", "hola"];
    var responses = ["Hi good to see you. How can I help you today?", "Is there I thing I can do to make you feel comfortable?", "How can I help you today?", "Good to see you,how are you?"];
    var index = greetings.indexOf(userInput.toLowerCase());
    if (index !== -1) {
        return responses[index];
    } else {
        return "Can you give me more time? Please specify.";
    }
}
