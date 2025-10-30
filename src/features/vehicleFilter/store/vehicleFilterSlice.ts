import { createAppSlice } from "../../../app/createAppSlice.ts"

export type VehicleFilterSliceT = {
	nations: string[]
	types: string[]
	levels: number[]
}

const initialState: VehicleFilterSliceT = {
	nations: [],
	types: [],
	levels: [],
}

export const vehicleFilterSlice = createAppSlice({
	name: "vehicleFilter",
	initialState,
	reducers: create => ({
		setNation: create.reducer((state, action: { payload: string }) => {
			state.nations = state.nations.concat(action.payload)
		}),
		removeNation: create.reducer((state, action: { payload: string }) => {
			state.nations = state.nations.filter(nation => nation !== action.payload)
		}),
		setType: create.reducer((state, action: { payload: string }) => {
			state.types = state.types.concat(action.payload)
		}),
		removeType: create.reducer((state, action: { payload: string }) => {
			state.types = state.types.filter(type => type !== action.payload)
		}),
		setLevel: create.reducer((state, action: { payload: number }) => {
			state.levels = state.levels.concat(action.payload)
		}),
		removeLevel: create.reducer((state, action: { payload: number }) => {
			state.levels = state.levels.filter(level => level !== action.payload)
		}),
		resetFilter: create.reducer(state => {
			state.nations = []
			state.levels = []
			state.types = []
		}),
	}),
	selectors: {
		selectNations: vehicleFilter => vehicleFilter.nations,
		selectTypes: vehicleFilter => vehicleFilter.types,
		selectLevels: vehicleFilter => vehicleFilter.levels,
	},
})

export const {
	setNation,
	removeNation,
	setType,
	removeType,
	setLevel,
	removeLevel,
	resetFilter,
} = vehicleFilterSlice.actions
export const { selectNations, selectTypes, selectLevels } =
	vehicleFilterSlice.selectors
