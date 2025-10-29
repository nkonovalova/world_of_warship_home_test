import { useGetNationsQuery } from "../../entities/nations/store/nationsApiSlice.ts"

import Layout from "../../shared/ui/layout/layout.tsx"
import { useGetMediaPathQuery } from "../../shared/store/mediaPathApiSlice.ts"
import { useGetVehicleTypesQuery } from "../../entities/vehicleTypes/store/vehicleTypesApiSlice.ts"
import { useGetVehiclesQuery } from "../../entities/vehicles/store/vehiclesApiSlice.ts"
import VehicleList from "./ui/vehicleList/vehicleList.tsx"

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

	return (
		<Layout header="Ships" isLoading={isLoading} errorMessage={errorMessage}>
			{!isLoading && (
				<VehicleList
					vehicles={vehiclesData || []}
					nations={nationsData || {}}
					vehicleTypes={vehicleTypesData || {}}
					mediaPath={mediaPathData || ""}
				/>
			)}
		</Layout>
	)
}

export default PageVehicles
