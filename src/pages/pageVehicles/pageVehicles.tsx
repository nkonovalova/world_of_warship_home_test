import styles from "./pageVehicles.module.scss"
import { useGetNationsQuery } from "../../entities/nations/store/nationsApiSlice.ts"

import Layout from "../../shared/ui/layout/layout.tsx"
import { useGetMediaPathQuery } from "../../shared/store/mediaPathApiSlice.ts"
import { useGetVehicleTypesQuery } from "../../entities/vehicleTypes/store/vehicleTypesApiSlice.ts"
import { useGetVehiclesQuery } from "../../entities/vehicles/store/vehiclesApiSlice.ts"
import VehicleList from "./ui/vehicleList/vehicleList.tsx"
import VehicleFilter from "../../features/vehicleFilter/vehicleFilter.tsx"
import { selectFilteredVehicles } from "./selectFilteredVehicles.ts"
import { useSelector } from "react-redux"
import Button, { ButtonStyleE } from "../../shared/ui/button/button.tsx"
import clsx from "clsx"
import { useState } from "react"
import { IconFilter } from "../../shared/ui/icons/icons.tsx"
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts"
import {
	resetFilter,
	selectLevels,
	selectNations,
	selectTypes,
} from "../../features/vehicleFilter/store/vehicleFilterSlice.ts"
import VehicleSearch from "../../features/vehicleSearch/vehicleSearch.tsx"

function PageVehicles() {
	const [isFilterShow, setIsFilterShow] = useState(false)

	const onToggleFilter = () => setIsFilterShow(!isFilterShow)

	const {
		data: mediaPathData,
		error: mediaPathError,
		isLoading: isMediaPathLoading,
	} = useGetMediaPathQuery()

	const {
		data: nationsData,
		error: nationsError,
		isLoading: isNationsLoading,
	} = useGetNationsQuery()

	const {
		data: vehicleTypesData,
		error: vehicleTypesError,
		isLoading: isVehicleTypesLoading,
	} = useGetVehicleTypesQuery()

	const { error: vehiclesError, isLoading: isVehiclesLoading } =
		useGetVehiclesQuery()

	const isLoading =
		isNationsLoading ||
		isVehicleTypesLoading ||
		isVehiclesLoading ||
		isMediaPathLoading
	const errorMessage =
		mediaPathError || nationsError || vehicleTypesError || vehiclesError
			? "Error loading data."
			: ""

	const {
		filteredVehicles,
		availableNations,
		availableLevels,
		availableTypes,
	} = useSelector(selectFilteredVehicles)

	const dispatch = useAppDispatch()

	const onReset = () => {
		dispatch(resetFilter())
	}

	const filterNations = useAppSelector(selectNations)
	const filterTypes = useAppSelector(selectTypes)
	const filterLevels = useAppSelector(selectLevels)

	return (
		<Layout header="Ships" isLoading={isLoading} errorMessage={errorMessage}>
			{!isLoading && (
				<>
					<div className={styles.filter}>
						<div className={styles.filterHeader}>
							<div className={styles.buttonResetBlock}>
								<Button
									buttonStyle={ButtonStyleE.ICON}
									onClick={onToggleFilter}
								>
									<span className={styles.iconFilter}>
										<IconFilter />
									</span>
								</Button>
							</div>
							<div className={styles.buttonFilterBlock}>
								{(filterNations.length > 0 ||
									filterTypes.length > 0 ||
									filterLevels.length > 0) && (
									<Button buttonStyle={ButtonStyleE.TINY} onClick={onReset}>
										Reset ×
									</Button>
								)}
							</div>
							<div className={styles.search}>
								<VehicleSearch />
							</div>
						</div>
						<div
							className={clsx(styles.filterContainer, {
								[styles.show]: isFilterShow,
							})}
						>
							<VehicleFilter
								nations={nationsData || {}}
								vehicleTypes={vehicleTypesData || {}}
								mediaPath={mediaPathData || ""}
								availableNations={availableNations}
								availableLevels={availableLevels}
								availableTypes={availableTypes}
							/>
						</div>
					</div>
					<VehicleList
						vehicles={filteredVehicles || []}
						nations={nationsData || {}}
						vehicleTypes={vehicleTypesData || {}}
						mediaPath={mediaPathData || ""}
					/>
				</>
			)}
		</Layout>
	)
}

export default PageVehicles
