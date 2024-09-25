import styles from "./webdetail.module.css";

export default function WebDetail({ lists, image }) {
  return (
    <div className={styles.detailContainer}>
      {lists.map((list, i) => (
        <div className={styles.descriptionContainer}>
          <div className={styles.listContainer}>
            <p>{list}</p>
          </div>

          <div className={styles.imageContainer}>
            <img src={image[i]} alt={image} />
          </div>
        </div>
      ))}
    </div>
  );
}
