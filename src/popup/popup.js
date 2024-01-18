function sendMessage() {
    const chatBox = document.getElementById('chatBox');
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    if (message) {
        // Append user message to chat
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user');
        userMessage.textContent = message;
        chatBox.appendChild(userMessage);

        // Clear input field
        chatInput.value = '';

        // Here you would call your backend API to get the response
        // For demonstration, we'll just echo the message
        const assistantMessage = document.createElement('div');
        assistantMessage.classList.add('message', 'assistant');
        assistantMessage.textContent = "Echo: " + message; // Replace with actual API response
        chatBox.appendChild(assistantMessage);

        // Scroll to the last message
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Optional: Send message on enter key
document.getElementById('chatInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
