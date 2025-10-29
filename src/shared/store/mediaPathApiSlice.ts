import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_BASE_URL, API_MEDIA_URL } from "../config/api.ts"

export type MediaPathApiResponseT = {
	status: string
	data: string
}

export const mediaPathApiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
	reducerPath: "mediaPathApi",
	tagTypes: ["mediaPath"],
	endpoints: build => ({
		getMediaPath: build.query<string, void>({
			query: () => API_MEDIA_URL,
			providesTags: ["mediaPath"],
			transformResponse: (response: MediaPathApiResponseT) => response.data,
		}),
	}),
})

export const { useGetMediaPathQuery } = mediaPathApiSlice
