import React, { useState, useEffect } from "react";

const Typing = () => {
  const words = ["Power.", "Precision.", "Style."];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));

      if (!deleting && subIndex === words[index].length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, deleting ? 80 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // instead of relying on spaces — reserve width equal to the longest word
  const maxWordLength = Math.max(...words.map((w) => w.length));
  const currentText = words[index].substring(0, subIndex);

  return (
    <span
  className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent 
             inline-block text-center sm:text-left w-full sm:w-auto"
  style={{
    display: "inline-block",
    width: `${maxWordLength + 1}ch`,
    whiteSpace: "pre",
  }}
>
  {currentText || " "}
  <span className="text-white">{blink ? "|" : " "}</span>
</span>

  );
};

export default Typing;
