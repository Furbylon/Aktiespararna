import React, { useState } from "react";

const LastUpdate = () => {
  let [lastModified, setNewModified] = useState (document.lastModified);
  return <p>Senast Uppdaterad {lastModified}</p>;
};

export default LastUpdate;
