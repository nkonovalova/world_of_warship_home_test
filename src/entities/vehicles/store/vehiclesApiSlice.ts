import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_BASE_URL, API_VEHICLE_URL } from "../../../shared/config/api.ts"
import { VehicleI, VehiclesApiResponseT } from "../model/types.ts"
import { FOREVER_TIME_INTERVAL } from "../../../shared/config/common.ts"

export const vehiclesApiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
	reducerPath: "vehiclesApi",
	tagTypes: ["vehicles"],
	// TODO: think about caching in LocalStorage, too large data
	keepUnusedDataFor: FOREVER_TIME_INTERVAL,
	endpoints: build => ({
		getVehicles: build.query<VehicleI[], void>({
			query: () => API_VEHICLE_URL,
			providesTags: ["vehicles"],
			transformResponse: (response: VehiclesApiResponseT) => {
				const transformedData: VehicleI[] = Object.entries(response.data).map(
					([id, vehicleData]) => ({
						id,
						...vehicleData,
					}),
				)
				return transformedData
			},
		}),
	}),
})

export const { useGetVehiclesQuery } = vehiclesApiSlice
