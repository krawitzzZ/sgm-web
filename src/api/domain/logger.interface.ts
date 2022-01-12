export interface LoggerInterface {
    debug(message: string): void;
    info(message: string): void;
    warning(message: string): void;
    error(message: string): void;
    withField(field: string, value: unknown): LoggerInterface;
    withFields(fields: Record<string, unknown>): LoggerInterface;
    withException(exception: Error): LoggerInterface;
}
