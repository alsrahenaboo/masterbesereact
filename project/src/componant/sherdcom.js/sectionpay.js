// function Baye({ url, titl }) {
//   return (
//     <div className="flooring-card">
//       <img src={url} alt="Hardwood Flooring" />

//       <div className="textincard">
//         <p>{titl}</p>
//       </div>
      
//     </div>
//   );
// }
// export default Baye;
import React from "react";

function Baye({ url, titl }) {
  return (
    <div className="relative h-64 md:h-96 overflow-hidden">
      <img src={url} alt={titl} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl text-white font-bold text-center">
          {titl}
        </h1>
      </div>
    </div>
  );
}

export default Baye;