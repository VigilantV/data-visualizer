import diagrams from "../data information/diagrams";

import styles from "./diagramSection.module.css";

const DiagramSection = () => {
  return (
    <div className={styles.diagram_section}>
      {diagrams.map((diagram) => (
        <img
          key={diagram.id}
          className={styles.img}
          src={diagram.img}
          alt={`img_${diagram.id}`}
        />
      ))}
    </div>
  );
};

export default DiagramSection;
