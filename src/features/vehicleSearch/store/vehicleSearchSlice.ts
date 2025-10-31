import { createAppSlice } from "../../../app/createAppSlice.ts"

export type VehicleSearchSliceT = {
	query: string
}

const initialState: VehicleSearchSliceT = {
	query: "",
}

export const vehicleSearchSlice = createAppSlice({
	name: "vehicleSearch",
	initialState,
	reducers: create => ({
		setSearchQuery: create.reducer((state, action: { payload: string }) => {
			state.query = action.payload
		}),
		resetSearch: create.reducer(state => {
			state.query = ""
		}),
	}),
	selectors: {
		selectSearchQuery: vehicleSearch => vehicleSearch.query,
	},
})

export const { setSearchQuery, resetSearch } = vehicleSearchSlice.actions
export const { selectSearchQuery } = vehicleSearchSlice.selectors
