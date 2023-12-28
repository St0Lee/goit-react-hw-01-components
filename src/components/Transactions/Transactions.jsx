import TransactionsItem from "./TransactionsItem";
import css from "./Transactions.module.css";

const Transactions = ({transactionsData}) => {
   const transactionsList = transactionsData.map(transaction => 
   <TransactionsItem 
    key={transaction.id} 
    type = {transaction.type} 
    amount = {transaction.amount} 
    currency = {transaction.currency} />);
   
   return (
    <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  {transactionsList}
    </table>
   );
};

export default Transactions;