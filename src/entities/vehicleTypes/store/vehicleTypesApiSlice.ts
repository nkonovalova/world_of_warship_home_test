import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
	API_BASE_URL,
	API_VEHICLE_TYPES_URL,
} from "../../../shared/config/api.ts"
import { VehicleTypeI, VehicleTypesApiResponseT } from "../model/types.ts"

export const vehicleTypesApiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
	reducerPath: "vehicleTypesApi",
	tagTypes: ["vehicleTypes"],
	endpoints: build => ({
		getVehicleTypes: build.query<Record<string, VehicleTypeI>, void>({
			query: () => API_VEHICLE_TYPES_URL,
			providesTags: ["vehicleTypes"],
			transformResponse: (response: VehicleTypesApiResponseT) => response.data,
		}),
	}),
})

export const { useGetVehicleTypesQuery } = vehicleTypesApiSlice
