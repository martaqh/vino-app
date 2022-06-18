import ShopsList from './components/ShopsList/ShopsList';
import Logo from './components/Logo/Logo'
import styles from './App.module.scss';
import WineList from './components/WineList/WineList';
import AddWineForm from './components/AddWineForm/AddWineForm';
import Home from './components/Home/Home';
import Container from './components/Container/Container';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchWines } from './redux/winesRedux';
import SearchResultsPage from './components/SearchResultsPage/SearchResultsPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchWines()), [dispatch]);
  return (
    <main >
      <Container className={styles.container}>
      <Logo />
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-wine-form" element={<AddWineForm />} />
                <Route path="/wine-list" element={<WineList />} />
                <Route path="/shops-list" element={<ShopsList />} />
                <Route path="/search-results" element={<SearchResultsPage />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
