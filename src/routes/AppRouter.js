import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import RepositoriesSearch from '../components/RepositoriesSearch/RepositoriesSearch';
import UserSearch from '../components/UserSearch/UserSearch';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/*" element={<UserSearch />} />
          <Route exact path="/repo" element={<RepositoriesSearch />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
