import styles from "./icon.module.scss"
import Filter from "./assets/filterIcon.svg"
import Search from "./assets/searchIcon.svg"

export function IconFilter() {
	return <img className={styles.icon} src={Filter} alt="filter" />
}

export function IconSearch() {
	return <img className={styles.icon} src={Search} alt="search" />
}
