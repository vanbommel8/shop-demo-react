import { useState, useEffect } from "react";
import Books from "./Books";

import Navigation from "./Navigation";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Books />
    </div>
  );
}

export default App;
