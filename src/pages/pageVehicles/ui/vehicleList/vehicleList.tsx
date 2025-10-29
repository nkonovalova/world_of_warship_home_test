import React from "react"
import styles from "./vehicleList.module.scss"

import VehicleCard from "../../../../features/vehicleCard/vehicleCard.tsx"
import { LOCALIZATION_DEFAULT_LANG } from "../../../../shared/config/common.ts"
import { VehicleI } from "../../../../entities/vehicles/model/types.ts"
import { NationI } from "../../../../entities/nations/model/types.ts"
import { VehicleTypeI } from "../../../../entities/vehicleTypes/model/types.ts"

type VehicleListPropsT = {
	vehicles: VehicleI[]
	nations: Record<string, NationI>
	vehicleTypes: Record<string, VehicleTypeI>
	mediaPath: string
}

const VehicleList = React.memo(
	({ vehicles, nations, vehicleTypes, mediaPath }: VehicleListPropsT) => {
		return (
			<ul className={styles.vehicleList}>
				{vehicles.map(vehicle => {
					const vehicleNation = nations ? nations[vehicle?.nation || ""] : null
					const vehicleType = vehicleTypes
						? vehicleTypes[vehicle?.tags[0] || ""]
						: null
					return (
						<li className={styles.vehicleItem} key={vehicle.id}>
							<VehicleCard
								id={vehicle.id}
								level={vehicle.level}
								vehicleType={vehicle?.tags[0] || ""}
								nation={vehicle?.nation || ""}
								name={
									vehicle.localization?.mark[LOCALIZATION_DEFAULT_LANG] || ""
								}
								description={
									vehicle.localization?.description[
										LOCALIZATION_DEFAULT_LANG
									] || ""
								}
								nationIconUrl={vehicleNation?.icons?.tiny || ""}
								vehicleTypeIconUrl={vehicleType?.icons?.default || ""}
								vehicleIconUrl={vehicle.icons?.large || ""}
								mediaPath={mediaPath}
							/>
						</li>
					)
				})}
			</ul>
		)
	},
)

export default VehicleList
