import styles from "./pageVehicles.module.scss"

import { useGetNationsQuery } from "../../entities/nations/store/nationsApiSlice.ts"

import Layout from "../../shared/ui/layout/layout.tsx"
import { useGetMediaPathQuery } from "../../shared/store/mediaPathApiSlice.ts"
import { useGetVehicleTypesQuery } from "../../entities/vehicleTypes/store/vehicleTypesApiSlice.ts"
import { useGetVehiclesQuery } from "../../entities/vehicles/store/vehiclesApiSlice.ts"
import VehicleCard from "../../features/vehicleCard/vehicleCard.tsx"
import { LOCALIZATION_DEFAULT_LANG } from "../../shared/config/common.ts"

function PageVehicles() {
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

	const {
		data: vehiclesData,
		error: vehiclesError,
		isLoading: isVehiclesLoading,
	} = useGetVehiclesQuery()

	const isLoading =
		isNationsLoading ||
		isVehicleTypesLoading ||
		isVehiclesLoading ||
		isMediaPathLoading
	const errorMessage =
		mediaPathError || nationsError || vehicleTypesError || vehiclesError
			? "Error loading data."
			: ""

	const testVehicle = vehiclesData ? vehiclesData[0] : null
	const testVehicleNation = nationsData
		? nationsData[testVehicle?.nation || ""]
		: null
	const testVehicleType = vehicleTypesData
		? vehicleTypesData[testVehicle?.tags[0] || ""]
		: null
	return (
		<Layout header="Ships" isLoading={isLoading} errorMessage={errorMessage}>
			{testVehicle && mediaPathData && (
				<ul className={styles.vehicleList}>
					<li className={styles.vehicleItem} key={testVehicle.id}>
						<VehicleCard
							id={testVehicle.id}
							level={testVehicle.level}
							vehicleType={testVehicle?.tags[0] || ""}
							nation={testVehicle?.nation || ""}
							name={
								testVehicle.localization?.mark[LOCALIZATION_DEFAULT_LANG] || ""
							}
							description={
								testVehicle.localization?.description[
									LOCALIZATION_DEFAULT_LANG
								] || ""
							}
							nationIconUrl={testVehicleNation?.icons?.tiny || ""}
							vehicleTypeIconUrl={testVehicleType?.icons?.default || ""}
							vehicleIconUrl={testVehicle.icons?.large || ""}
							mediaPath={mediaPathData}
						/>
					</li>
				</ul>
			)}
		</Layout>
	)
}

export default PageVehicles
