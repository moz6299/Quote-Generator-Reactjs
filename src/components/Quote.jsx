/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./Quote.css";
import reload from "../assets/main-qimg-ae92b32bf2255fc758cf0ea8e4b76b18.webp";

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchQuotes = async () => {
      const url = "https://api.quotable.io/quotes";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const modifiedData = data.results.map((item) => ({
        text: item.content,
        author: item.author || 'Unknown'
      }));
      setQuotes(modifiedData);
    };
    fetchQuotes();
  }, []);

  const handleReload = () => {
    setIndex((prev) => (prev + 1 >= quotes.length ? 0 : prev + 1));
  };

  if (quotes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quote">
      <div className="quote-container">
        <div className="quote">
          <h2>{quotes[index].text}</h2>
        </div>
        <hr />
        <div className="author-icon">
          <p>- {quotes[index].author}</p>
          <img onClick={handleReload} src={reload} alt="Generate" />
        </div>
      </div>
    </div>
  );
};

export default Quote;
