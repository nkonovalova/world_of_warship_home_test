import styles from "./icon.module.scss"
import Filter from "./assets/filterIcon.svg"

export function IconFilter() {
	return <img className={styles.icon} src={Filter} alt="filter" />
}
