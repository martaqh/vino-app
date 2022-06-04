import ShopsList from './components/ShopsList/ShopsList';
import Logo from './components/Logo/Logo'
import styles from './App.module.scss';
import WineList from './components/WineList/WineList';
import AddWineForm from './components/AddWineForm/AddWineForm';
import Home from './components/Home/Home';
import Container from './components/Container/Container';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main >
      <Container className={styles.container}>
      <Logo />
        <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/add-wine-form" element={<AddWineForm />} />
                <Route path="/wine-list" element={<WineList />} />
                <Route path="/shops-list" element={<ShopsList />} /> 
        </Routes>
      </Container>
    </main>
  );
}

export default App;
