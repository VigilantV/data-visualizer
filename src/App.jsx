import Header from "./component/Header";
import DiagramSection from "./component/DiagramSection";
import TableSection from "./component/TableSection";

import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Header></Header>
      <div className={styles.body}>
        <DiagramSection></DiagramSection>
        <TableSection></TableSection>
      </div>
    </div>
  );
};

export default App;
