"use client";

import dynamic from "next/dynamic";
import { FormEvent, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

export default function ChatInput() {
  const [message, setMessage] = useState<string>("");
  const [showEmojis, setShowEmojis] = useState<boolean>(false);

  const handleEmojiClick = ({ emoji }: { emoji: string }) => {
    setMessage((prev) => prev + emoji);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    if (!message) return;
  };
  return (
    <footer className="px-2 mb-2 w-full">
      <form
        className="bg-[#221F1F] rounded-md w-full p-4 flex items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center space-x-4 flex-1">
          <FaPlusCircle size="25" />
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="bg-transparent ring-0 border-0 outline-none w-full focus-visible:ring-0 
            focus-visible:outline-none"
          />
        </div>

        <Button
          onClick={() => setShowEmojis(!showEmojis)}
          variant="ghost"
          className="bg-transparent hover:bg-transparent hover:text-white"
        >
          <FaRegFaceSmile size="25" />
        </Button>

        {showEmojis && (
          <div className="absolute bottom-20 right-2">
            <Picker onEmojiClick={handleEmojiClick} lazyLoadEmojis={true} />
          </div>
        )}
      </form>
    </footer>
  );
}
