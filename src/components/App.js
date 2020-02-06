import React from "react";

import ProductShowPage from "./ProductShowPage";
import { ProductIndexPage } from "./ProductIndexPage";

const App = () => {
  return (
    <div className="ui contianer segment">
      <ProductShowPage />
      <ProductIndexPage />
      </div>
  );
};

export default App;