// style
import styles from '../styles/_home.module.scss';
//components
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
// hooks
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from "../hooks/useCollection";

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    'transactions',
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p className={styles.error}>{error}</p>}
        {documents && <TransactionList data={documents} />}
      </div>

      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  )
};

export default Home;