import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_BASE_URL, API_VEHICLE_URL } from "../../../shared/config/api.ts"
import {VehiclesApiResponseT} from "../model/types.ts";
import {FOREVER_TIME_INTERVAL} from "../../../shared/config/common.ts";

export const vehiclesApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    reducerPath: "vehiclesApi",
    tagTypes: ["vehicles"],
    keepUnusedDataFor: FOREVER_TIME_INTERVAL,
    endpoints: build => ({
        getVehicles: build.query<VehiclesApiResponseT, void>({
            query: () => API_VEHICLE_URL,
            providesTags: ["vehicles"],
            transformResponse: (response: { data: VehiclesApiResponseT }) => response.data,
        }),
    }),
})

export const { useGetVehiclesQuery } = vehiclesApiSlice;
