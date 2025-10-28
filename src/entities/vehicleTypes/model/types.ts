import {IconsI, LocalizationI} from "../../../shared/types/common.ts";

export interface VehicleTypesIconsI extends IconsI {
    elite?: string;
    premium?: string;
    special?: string;
    normal?: string;
}


export interface VehicleTypeI {
    icons?: VehicleTypesIconsI;
    sort_order?: number;
    localization?: LocalizationI;
    [key: string]: unknown;
}

export type VehicleTypesApiResponseT = {
    status: string
    data: Record<string, VehicleTypeI>;
}