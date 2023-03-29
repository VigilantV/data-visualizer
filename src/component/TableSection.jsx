import tables from "../data information/tables";

import styles from "./tableSection.module.css";

const TableSection = () => {
  return (
    <div>
      {tables.map((table) => (
        <div key={table.id} className={styles.table_section}>
          <p className={styles.title}>{table.title}</p>
          <div className={styles.table_header_row}>
            {table.table_headers.map((head, index) => (
              <p key={index}>{head}</p>
            ))}
          </div>

          {table.table_datas.map((data, index) => (
            <div className={styles.table_data_row} key={index}>
              {data.map((param, index) => (
                <p key={index}>{param}</p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableSection;
