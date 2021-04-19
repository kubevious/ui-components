export interface ErrorBoxProps {
    error: Error;
    closeError: () => void;
}

export interface Error {
    data: {
        message: string;
        stack: string;
        reason?: string;
        name?: string;
        mark?: {
            name?: string | null;
            buffer?: string;
            position?: number;
            line?: number;
            column?: number;
        };
    };
    message?: string;
    stack?: string;
    status?: number;
}
