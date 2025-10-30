import { useGetNationsQuery } from "../../entities/nations/store/nationsApiSlice.ts"

import Layout from "../../shared/ui/layout/layout.tsx"
import { useGetMediaPathQuery } from "../../shared/store/mediaPathApiSlice.ts"
import { useGetVehicleTypesQuery } from "../../entities/vehicleTypes/store/vehicleTypesApiSlice.ts"
import { useGetVehiclesQuery } from "../../entities/vehicles/store/vehiclesApiSlice.ts"
import VehicleList from "./ui/vehicleList/vehicleList.tsx"
import VehicleFilter from "../../features/vehicleFilter/vehicleFilter.tsx"
import { selectFilteredVehicles } from "./selectFilteredVehicles.ts"
import { useSelector } from "react-redux"

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
		// data: vehiclesData,
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

	const {
		filteredVehicles,
		availableNations,
		availableLevels,
		availableTypes,
	} = useSelector(selectFilteredVehicles)

	return (
		<Layout header="Ships" isLoading={isLoading} errorMessage={errorMessage}>
			{!isLoading && (
				<>
					<div>
						<VehicleFilter
							nations={nationsData || {}}
							vehicleTypes={vehicleTypesData || {}}
							mediaPath={mediaPathData || ""}
							availableNations={availableNations}
							availableLevels={availableLevels}
							availableTypes={availableTypes}
						/>
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
