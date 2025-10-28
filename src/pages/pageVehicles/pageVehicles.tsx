import { useGetNationsQuery } from "../../entities/nations/store/nationsApiSlice.ts";

import Layout from "../../shared/ui/layout/layout.tsx";
import {useGetMediaPathQuery} from "../../shared/store/mediaPathApiSlice.ts";
import {useGetVehicleTypesQuery} from "../../entities/vehicleTypes/store/vehicleTypesApiSlice.ts";
import {useGetVehiclesQuery} from "../../entities/vehicles/store/vehiclesApiSlice.ts";

function PageVehicles() {
	const {
		data: mediaPathData,
		isError: isMediaPathError,
		isLoading: isMediaPathLoading,
		isSuccess: isMediaPathSuccess,
	} = useGetMediaPathQuery();

	const {
		data: nationsData,
		isError: isNationsError,
		isLoading: isNationsLoading,
		isSuccess: isNationsSuccess,
	} = useGetNationsQuery();

	const {
		data: vehicleTypesData,
		isError: isVehicleTypesError,
		isLoading: isVehicleTypesLoading,
		isSuccess: isVehicleTypesSuccess,
	} = useGetVehicleTypesQuery();

	const {
		data: vehiclesData,
		isError: isVehiclesError,
		isLoading: isVehiclesLoading,
		isSuccess: isVehiclesSuccess,
	} = useGetVehiclesQuery();

	return <Layout header={<span>Hi!</span>} >Hello, Ships!</Layout>
}

export default PageVehicles
