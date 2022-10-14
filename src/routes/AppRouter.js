import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RepositoriesSearch from '../components/RepositoriesSearch/RepositoriesSearch';
import UserSearch from '../components/UserSearch/UserSearch';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserSearch />} />
        <Route path="/repositories" element={<RepositoriesSearch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
