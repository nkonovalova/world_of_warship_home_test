import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../app/store.ts"
import { vehiclesApiSlice } from "../../entities/vehicles/store/vehiclesApiSlice.ts"
import { vehiclesFilterFunction } from "../../features/vehicleFilter/utils/filter.ts"

const selectVehicles = vehiclesApiSlice.endpoints.getVehicles.select()
const selectFilter = (state: RootState) => state.vehicleFilter

export const selectFilteredVehicles = createSelector(
	[selectVehicles, selectFilter],
	(vehicles, filter) => {
		return vehiclesFilterFunction(vehicles.data || [], filter)
	},
)
