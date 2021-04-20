export const isValidJson = (value: string): boolean => {
    try {
        JSON.parse(value);
    } catch {
        return false;
    }
    return true;
};
