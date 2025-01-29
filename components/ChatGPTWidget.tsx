"use client";

import React, { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ChatGPTWidget = () => {
  const [messages, setMessages] = useState<
    Array<{ role: string; content: string }>
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // const response = await axios.post("/api/chat", {
      //   messages: [...messages, userMessage],
      // });

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }],
          }),
        }
      );

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;
      console.log("AI Response:", aiResponse);

      const botMessage = {
        role: "assistant",
        content: aiResponse,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage = {
        role: "assistant",
        content: "Sorry, I couldn't process your request. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Messages", messages);
  }, [messages]);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mt-12">
      <h3 className="text-2xl font-bold text-purple-400 mb-4">
        Deepseek AI Beta Version
      </h3>
      <div className="max-h-64 overflow-y-auto space-y-4 mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.role === "user"
                ? "justify-end text-right"
                : "justify-start w-[50%] text-left"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg ${
                msg.role === "user"
                  ? "bg-purple-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && <div className="text-gray-400">Thinking...</div>}
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-300"
          placeholder="Explore insights and trading strategies with Deepseek"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatGPTWidget;
