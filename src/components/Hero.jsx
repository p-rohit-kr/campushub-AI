
import { useState } from "react";
import "../styles/Hero.css";

export default function Hero() {

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "How can I help you?",
    },
  ]);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {

      const response = await fetch(
        "http://localhost:5000/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            message: message,
          }),
        }
      );

      const data = await response.json();

      const botReply = {
        role: "bot",
        text: data.reply,
      };

      setMessages((prev) => [...prev, botReply]);

      setMessage("");

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="hero">

      <div className={`content ${open ? "blur" : ""}`}>

        <h1>Explore Your Campus Resources</h1>

        <p>
          Access notices, notes, jobs and AI tools in one place.
        </p>

        <button
          className="start"
          onClick={() => setOpen(true)}
        >
          Open AI Chatbot
        </button>

      </div>

      {open && (

        <div className="popup">

          <div className="popup-box">

            <div className="top">

              <h2>AI Chatbot</h2>

              <button
                className="close"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>

            </div>

            <div className="chat-area">

              {messages.map((msg, index) => (

                <div
                  key={index}
                  className={
                    msg.role === "user"
                      ? "user-msg"
                      : "bot-msg"
                  }
                >
                  {msg.text}
                </div>

              ))}

            </div>

            <div className="bottom">

              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
              />

              <button
                className="send"
                onClick={sendMessage}
              >
                Send
              </button>

            </div>

          </div>

        </div>

      )}
    </div>
  );
}