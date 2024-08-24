import React, { useEffect, useState } from "react";
import "./Quote.css";
import reload from "../assets/main-qimg-ae92b32bf2255fc758cf0ea8e4b76b18.webp";

const Quote = () => {
  const [Quote, setQuote] = useState([]);
  const [index, setindex] = useState(0)

  useEffect(() => {
    const fetchquotes = async () => {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      console.log(data);
     const modifiedData = data.map((item,index)=>{
        if(item.author.includes('type.fit')){
            item.author = item.author.replace(', type.fit', '.');
        }
        return item
     })
      setQuote(modifiedData)
      
    };
    fetchquotes();
  }, []);


  const handleReload = ()=>{
    setindex((prev)=>{
        if(prev+1 >=Quote.length){
            return 0
        }else{
            return prev+1
        }
    })
  }

  if (Quote.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quote">
      <div className="quote-container">
        <div className="quote">
          <h2>{Quote[index].text}</h2>
        </div>
        <hr />
        <div className="authtor-icon">
          <p>- {Quote[index].author}</p>
          <img onClick={handleReload} src={reload} alt="Generate" />
        </div>
      </div>
    </div>
  );
};

export default Quote;
