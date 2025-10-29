import { createContext } from "react"
import { LOCALIZATION_DEFAULT_LANG } from "../config/common.ts"

export const LocalizationContext = createContext(LOCALIZATION_DEFAULT_LANG)
