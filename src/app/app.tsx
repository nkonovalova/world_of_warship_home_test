import styles from "./app.module.scss"

import PageVehicles from "../pages/pageVehicles/pageVehicles.tsx"
import { LocalizationContext } from "../shared/context/localizationContext.tsx"
import { LOCALIZATION_DEFAULT_LANG } from "../shared/config/common.ts"

export const App = () => {
	return (
		<LocalizationContext value={LOCALIZATION_DEFAULT_LANG}>
			<div className={styles.app}>
				<PageVehicles></PageVehicles>
			</div>
		</LocalizationContext>
	)
}
