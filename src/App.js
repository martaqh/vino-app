import ShopsList from './components/ShopsList/ShopsList';
import Logo from './components/Logo/Logo'
import styles from './App.module.scss';
import AddWineButton from './components/AddWineButton/AddWineButton';


function App() {
  

  return (

    <main className={styles.container}>
      <Logo />
      <AddWineButton />
      <ShopsList />
    </main>

  );
}

export default App;
