import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_BASE_URL, API_NATIONS_URL } from "../../../shared/config/api.ts"
import { NationI, NationsApiResponseT } from "../model/types.ts"

export const nationsApiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
	reducerPath: "nationsApi",
	tagTypes: ["nations"],
	endpoints: build => ({
		getNations: build.query<Record<string, NationI>, void>({
			query: () => API_NATIONS_URL,
			providesTags: ["nations"],
			transformResponse: (response: NationsApiResponseT) => {
				return response.data.reduce<Record<string, NationI>>((acc, nation) => {
					acc[nation.name] = nation
					return acc
				}, {})
			},
		}),
	}),
})

export const { useGetNationsQuery } = nationsApiSlice
