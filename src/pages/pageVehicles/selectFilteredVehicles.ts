import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../app/store.ts"
import { vehiclesApiSlice } from "../../entities/vehicles/store/vehiclesApiSlice.ts"
import { vehiclesFilterFunction } from "./ui/vehicleFilter/utils/filter.ts"
import { vehiclesSearchByNameFunction } from "./ui/vehicleSearch/utils/vehicleSearch.ts"
import { VehicleI } from "../../entities/vehicles/model/types.ts"

export type SelectFilteredVehiclesT = {
	filteredVehicles: VehicleI[]
	availableLevels: Set<number>
	availableNations: Set<string>
	availableTypes: Set<string>
}

const selectVehicles = vehiclesApiSlice.endpoints.getVehicles.select()
const selectFilter = (state: RootState) => state.vehicleFilter
const selectSearch = (state: RootState) => state.vehicleSearch

export const selectFilteredVehicles = createSelector(
	[selectVehicles, selectFilter, selectSearch],
	(vehicles, filter, searchQuery) => {
		if (searchQuery.query) {
			return vehiclesSearchByNameFunction(
				vehicles.data ?? [],
				searchQuery.query,
				"en",
			)
		} else {
			return vehiclesFilterFunction(vehicles.data ?? [], filter)
		}
	},
)
