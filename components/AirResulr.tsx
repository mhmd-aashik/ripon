import React from "react";

const AirResulr = ({ results }: any) => {
  return (
    <div>
      {results.results.map((item: any) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
};

export default AirResulr;
