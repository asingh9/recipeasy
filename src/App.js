import styles from '../styles/App.module.css'
import Pantry from './Pantry'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

const HEADING = 'Welcome to Recipeasy! Get Started Here.';

function Header(props) {
  return (
    <header className={styles.header}>
    <h2>{props.title}</h2>
  </header>
  )
}

function Footer(props) {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; 2021 Avinash B Singh</p>
    </footer>
  )
}

function App() {
  return (
    <div className={styles.App}>
      <Header title={HEADING} />
      <Pantry />
      <Footer />
    </div>
  );
}

export default App;