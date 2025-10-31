import { LOCALIZATION_DEFAULT_LANG } from "../config/common.ts"
import { createAppSlice } from "../../app/createAppSlice.ts"

export type LocalizationSliceT = {
	lang: string
}

const initialState: LocalizationSliceT = {
	lang: LOCALIZATION_DEFAULT_LANG,
}

export const localizationSlice = createAppSlice({
	name: "localization",
	initialState,
	reducers: create => ({
		setLocalization: create.reducer((state, action: { payload: string }) => {
			state.lang = action.payload
		}),
	}),
	selectors: {
		selectLocalization: localization => localization.lang,
	},
})

export const { setLocalization } = localizationSlice.actions
export const { selectLocalization } = localizationSlice.selectors
