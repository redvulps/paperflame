import React from "react";
import { Route, Routes } from "react-router-dom";

import ConnectionManager from "../../Pages/ConnectionManager";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ConnectionManager />} />
    </Routes>
  );
};
