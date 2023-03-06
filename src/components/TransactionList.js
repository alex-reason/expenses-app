// style
import styles from '../styles/_home.module.scss';
// hooks
import { useFirestore } from '../hooks/useFirestore';

const TransactionList = ({ data }) => {

    const { deleteDocument } = useFirestore('transactions')
    let totalCost = (data.reduce((acc, curr) => acc + parseFloat(curr.amount), 0)).toFixed(2);

    return (
        <div>
            <ul className={styles.transactions}>
                {data.map(item => (
                    <li key={item.id}>
                        <p className={styles.name}>{item.name}</p>
                        <p className={styles.amount}>{`$${item.amount}`}</p>
                        <button onClick={() => deleteDocument(item.id)}>x</button>
                    </li>
                ))}
            </ul>
            <p>total: ${totalCost}</p>
        </div>
    )
}

export default TransactionList