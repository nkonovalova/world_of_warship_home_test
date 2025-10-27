import styles from "./app.module.scss"

import PageVehicles from "../pages/pageVehicles/pageVehicles.tsx"

export const App = () => {
	return (
		<div className={styles.app}>
			<PageVehicles></PageVehicles>
		</div>
	)
}
