import {IconsI, LocalizationI} from "../../../shared/types/common.ts";

export interface VehicleIconsI extends IconsI {
    local_contour?: string;
    contour_alive?: string;
    contour_dead?: string;
    contour?: string;
    local_contour_dead?: string;
    local_contour_alive?: string;
}

export interface VehicleApiI {
    level: number;
    name: string;
    nation: string;
    tags?: string[];
    icons?: VehicleIconsI;
    localization?: LocalizationI;
}

export interface VehicleI extends VehicleApiI {
    id: string;
}

export type VehiclesApiResponseT = {
    status: string,
    data: Record<string, VehicleApiI>;
}