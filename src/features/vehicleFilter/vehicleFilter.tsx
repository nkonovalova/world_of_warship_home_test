import styles from "./vehicleFilter.module.scss"
import { NationI } from "../../entities/nations/model/types.ts"
import { VehicleTypeI } from "../../entities/vehicleTypes/model/types.ts"
import Checkbox from "../../shared/ui/checkbox/checkbox.tsx"
import { arabicToRoman } from "../../shared/utils/arabicToRoman/arabicToRoman.ts"
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts"
import {
	removeLevel,
	removeNation,
	removeType,
	resetFilter,
	selectLevels,
	selectNations,
	selectTypes,
	setLevel,
	setNation,
	setType,
} from "./store/vehicleFilterSlice.ts"
import { ChangeEvent } from "react"
import Button from "../../shared/ui/button/button.tsx"
import { resetSearch } from "../vehicleSearch/store/vehicleSearchSlice.ts"

type VehicleFilterPropsT = {
	nations: Record<string, NationI>
	vehicleTypes: Record<string, VehicleTypeI>
	mediaPath: string
	availableLevels?: Set<number>
	availableNations?: Set<string>
	availableTypes?: Set<string>
}

const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

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
	availableNations,
	availableLevels,
	availableTypes,
}: VehicleFilterPropsT) {
	const dispatch = useAppDispatch()
	const filterNations = useAppSelector(selectNations)
	const filterTypes = useAppSelector(selectTypes)
	const filterLevels = useAppSelector(selectLevels)

	const onNationChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(resetSearch())
		switch (event.target.checked) {
			case true:
				dispatch(setNation(event.target.value))
				break
			case false:
				dispatch(removeNation(event.target.value))
				break
		}
	}

	const onLevelChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(resetSearch())
		switch (event.target.checked) {
			case true:
				dispatch(setLevel(Number(event.target.value)))
				break
			case false:
				dispatch(removeLevel(Number(event.target.value)))
				break
		}
	}

	const onTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(resetSearch())
		switch (event.target.checked) {
			case true:
				dispatch(setType(event.target.value))
				break
			case false:
				dispatch(removeType(event.target.value))
				break
		}
	}

	const onReset = () => {
		dispatch(resetFilter())
	}

	return (
		<div className={styles.filterContainer}>
			<section className={styles.filter}>
				<div className={styles.filterGroup}>
					<h3 className={styles.filterGroupTitle}>Tier</h3>
					<ul className={styles.filterGroupItems}>
						{levels.map(level => (
							<li key={`level-${level}`} className={styles.filterGroupItem}>
								<Checkbox
									name={`level-${level}`}
									value={level}
									label={arabicToRoman(level)}
									onChange={onLevelChange}
									disabled={
										availableLevels ? !availableLevels.has(level) : false
									}
									checked={filterLevels.includes(level)}
								/>
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
										value={vehicleTypeName}
										onChange={onTypeChange}
										disabled={
											availableTypes
												? !availableTypes.has(vehicleTypeName)
												: false
										}
										checked={filterTypes.includes(vehicleTypeName)}
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
									value={nation.name}
									onChange={onNationChange}
									disabled={
										availableNations
											? !availableNations.has(nation.name)
											: false
									}
									checked={filterNations.includes(nation.name)}
								/>
							</li>
						))}
					</ul>
				</div>
			</section>
			<div className={styles.buttonContainer}>
				<Button
					disabled={
						filterLevels.length === 0 &&
						filterNations.length === 0 &&
						filterTypes.length === 0
					}
					onClick={onReset}
				>
					Reset ×
				</Button>
			</div>
		</div>
	)
}

export default VehicleFilter
