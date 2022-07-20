
import Logo from './components/views/Logo/Logo'
import styles from './App.module.scss';
import WineList from './components/views/WineList/WineList';
import AddWineForm from './components/features/AddWineForm/AddWineForm';
import Home from './components/pages/Home/Home';
import Container from './components/common/Container/Container';
import SearchResultsPage from './components/pages/SearchResultsPage/SearchResultsPage';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchWines } from './redux/winesRedux';
import Success from './components/pages/Success/Success';




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
                <Route path="/search-results" element={<SearchResultsPage />} />
                <Route path="/success" element={<Success />} />
        </Routes>
        
      </Container>
    </main>
  );
}

export default App;
