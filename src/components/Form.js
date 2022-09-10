import React, { useState } from "react";

const Form = ({ setCityApp, error, setError }) => {
  const [city, setCity] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (city == "") {
      setIsEmpty(true);
      setTimeout(() => {
        setIsEmpty(false);
      }, 1000);
    } else {
      setCityApp(city);
      setCity("");
    }
    if (error != null) {
      setTimeout(() => {
        setError(null);
      }, 1000);
    }
  };
  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <input
            type="text"
            placeholder="Type City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {isEmpty && <p>Can't be empty!</p>}
      {error != null ? <p>Can't be found</p> : null}
    </div>
  );
};

export default Form;
