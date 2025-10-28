export interface IconsI {
    default?: string;
    large?: string;
    medium?: string;
    small?: string;
    tiny?: string;
    local_large?: string;
    local_small?: string;
    local_tiny?: string;

    [key: string]: string | undefined;
}

export interface LocalizationI {
    mark?: Record<string, string>;
    shortmark?: Record<string, string>;
    description?: Record<string, string>;

    [key: string]: Record<string, string> | undefined;
}
