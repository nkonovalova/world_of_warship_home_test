import styles from "./vehicleFilter.module.scss"
import { NationI } from "../../entities/nations/model/types.ts"
import { VehicleTypeI } from "../../entities/vehicleTypes/model/types.ts"
import Checkbox from "../../shared/ui/checkbox/checkbox.tsx"
import { arabicToRoman } from "../../shared/utils/arabicToRoman/arabicToRoman.ts"

type VehicleFilterPropsT = {
	nations: Record<string, NationI>
	vehicleTypes: Record<string, VehicleTypeI>
	mediaPath: string
}

const levels = [2, 3, 4, 5, 6, 7, 8, 9, 10]

function IconNation({
	nation,
	mediaPath,
}: {
	nation: NationI
	mediaPath: string
}) {
	return (
		<span className={styles.iconNation}>
			<img
				className={styles.iconNationImg}
				src={mediaPath + nation.icons?.tiny}
				alt={nation.name}
			/>
		</span>
	)
}

function IconVehicleType({
	vehicleType,
	vehicleTypeName,
	mediaPath,
}: {
	vehicleType: VehicleTypeI
	mediaPath: string
	vehicleTypeName: string
}) {
	return (
		<span className={styles.iconVehicleType}>
			<img
				className={styles.iconVehicleTypeImg}
				src={mediaPath + vehicleType.icons?.default}
				alt={vehicleTypeName}
			/>
		</span>
	)
}

function VehicleFilter({
	nations,
	vehicleTypes,
	mediaPath,
}: VehicleFilterPropsT) {
	return (
		<section className={styles.filter}>
			<div className={styles.filterGroup}>
				<h3 className={styles.filterGroupTitle}>Tier</h3>
				<ul className={styles.filterGroupItems}>
					{levels.map(level => (
						<li key={`level-${level}`} className={styles.filterGroupItem}>
							<Checkbox name={`level-${level}`} label={arabicToRoman(level)} />
						</li>
					))}
				</ul>
			</div>
			<div className={styles.filterGroup}>
				<h3 className={styles.filterGroupTitle}>Type</h3>
				<ul className={styles.filterGroupItems}>
					{Object.entries(vehicleTypes).map(
						([vehicleTypeName, vehicleType]) => (
							<li key={vehicleTypeName} className={styles.filterGroupItem}>
								<Checkbox
									name={vehicleTypeName}
									label={
										<IconVehicleType
											vehicleType={vehicleType}
											vehicleTypeName={vehicleTypeName}
											mediaPath={mediaPath}
										/>
									}
								/>
							</li>
						),
					)}
				</ul>
			</div>
			<div className={styles.filterGroup}>
				<h3 className={styles.filterGroupTitle}>Nation</h3>
				<ul className={styles.filterGroupItems}>
					{Object.values(nations).map(nation => (
						<li key={nation.id} className={styles.filterGroupItem}>
							<Checkbox
								name={nation.name}
								label={<IconNation nation={nation} mediaPath={mediaPath} />}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default VehicleFilter
