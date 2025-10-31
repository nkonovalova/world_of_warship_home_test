import { vehiclesFilterFunction } from "./filter.ts"
import { VehicleI } from "../../../../../entities/vehicles/model/types.ts"
import { VehicleFilterSliceT } from "../store/vehicleFilterSlice.ts"

type Vehicle = {
	id: string
	level: number
	nation: string
	tags?: string[]
}

describe("vehiclesFilterFunction", () => {
	const vehicles: Vehicle[] = [
		{ id: "a", level: 2, nation: "usa", tags: ["Cruiser"] },
		{ id: "b", level: 3, nation: "germany", tags: ["AirCrafter"] },
		{ id: "c", level: 2, nation: "usa", tags: ["Battleship"] },
		{ id: "d", level: 4, nation: "ussr", tags: ["Submarine"] },
	]

	test("no filters -> returns all vehicles and all available sets", () => {
		const filters: VehicleFilterSliceT = { types: [], levels: [], nations: [] }
		const result = vehiclesFilterFunction(vehicles as VehicleI[], filters)

		expect(result.filteredVehicles.map(v => v.id)).toEqual(["a", "b", "c", "d"])

		expect(result.availableTypes).toEqual(
			new Set(["Cruiser", "AirCrafter", "Battleship", "Submarine"]),
		)
		expect(result.availableLevels).toEqual(new Set([2, 3, 4]))
		expect(result.availableNations).toEqual(new Set(["usa", "germany", "ussr"]))
	})

	test("filter by level -> only vehicles with that level are returned; availableTypes limited to those levels", () => {
		const filters: VehicleFilterSliceT = { types: [], levels: [2], nations: [] }
		const result = vehiclesFilterFunction(vehicles as VehicleI[], filters)

		expect(result.filteredVehicles.map(v => v.id)).toEqual(["a", "c"])

		expect(result.availableTypes).toEqual(new Set(["Cruiser", "Battleship"]))

		expect(result.availableLevels).toEqual(new Set([2, 3, 4]))

		expect(result.availableNations).toEqual(new Set(["usa"]))
	})

	test("filter by type -> only matching type vehicles returned; availableLevels reflect matching type", () => {
		const filters: VehicleFilterSliceT = {
			types: ["Cruiser"],
			levels: [],
			nations: [],
		}
		const result = vehiclesFilterFunction(vehicles as VehicleI[], filters)

		expect(result.filteredVehicles.map(v => v.id)).toEqual(["a"])

		expect(result.availableLevels).toEqual(new Set([2]))

		expect(result.availableTypes).toEqual(
			new Set(["Cruiser", "AirCrafter", "Battleship", "Submarine"]),
		)
		expect(result.availableNations).toEqual(new Set(["usa"]))
	})

	test("filter by nation -> only matching nation vehicles returned; availableNations reflect matching nation", () => {
		const filters: VehicleFilterSliceT = {
			types: [],
			levels: [],
			nations: ["usa"],
		}
		const result = vehiclesFilterFunction(vehicles as VehicleI[], filters)

		expect(result.filteredVehicles.map(v => v.id)).toEqual(["a", "c"])

		expect(result.availableTypes).toEqual(new Set(["Cruiser", "Battleship"]))

		expect(result.availableLevels).toEqual(new Set([2]))

		expect(result.availableNations).toEqual(new Set(["usa", "germany", "ussr"]))
	})
})
