import { useState, useEffect } from "react";

const typeEffect = async (word, setWord, speed, backward = false) => {
  for (let i = 0; i <= word.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, speed));
    setWord(backward ? word.slice(0, word.length - i) : word.slice(0, i));
  }
};

const TypingEffect = ({ words }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let isCancelled = false;

    const runEffect = async () => {
      const word = words[index % words.length];

      await typeEffect(word, setDisplayedText, 70); // Typing
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Pause
      await typeEffect(word, setDisplayedText, 30, true); // Deleting
      await new Promise((resolve) => setTimeout(resolve, 300)); // Pause

      if (!isCancelled) {
        setIndex((prev) => (prev + 1) % words.length);
      }
    };

    runEffect();

    return () => {
      isCancelled = true;
    };
  }, [index, words]);

  return <>{displayedText}</>;
};

export default TypingEffect;
