import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_BASE_URL, API_NATIONS_URL } from "../../../shared/config/api.ts"
import { NationsApiResponse } from "./types.ts"

export const nationsApiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
	reducerPath: "nationsApi",
	tagTypes: ["nations"],
	endpoints: build => ({
		getNations: build.query<NationsApiResponse, void>({
			query: () => API_NATIONS_URL,
			providesTags: ["nations"],
		}),
	}),
})

export const { useGetNationsQuery } = nationsApiSlice
