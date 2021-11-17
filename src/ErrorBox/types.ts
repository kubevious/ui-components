export interface ErrorBoxProps {
    error: Error;
    closeError: () => void;
    refreshRequest? : boolean;
    details?: ErrorDetailField[];
}

export interface ErrorDetailField 
{
    name: string;
    value: string;
}
