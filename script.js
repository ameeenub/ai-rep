const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", async () => {
    const text = userInput.value.trim();
    if (!text) return;

    appendMessage("user", text);
    userInput.value = "";

    const response = await fetch("https://2719761e.ai-chatbot-esx.pages.dev", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message, email })
});

    const data = await response.json();
    appendMessage("bot", data.reply);
});

function appendMessage(sender, text) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}
