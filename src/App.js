import ShopsList from './components/ShopsList/ShopsList';
import Logo from './components/Logo/Logo'
import styles from './App.module.scss';
import AddWineButton from './components/AddWineButton/AddWineButton';
import WineList from './components/WineList/WineList';



function App() {
  return (
    <main className={styles.container}>
      <Logo />
      <AddWineButton />
      <ShopsList />
      <WineList /> 
    </main>
  );
}

export default App;
