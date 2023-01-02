declare namespace qurious {
    export interface IQRious {
        background: string;
        backgroundAlpha: number;
        foreground: string;
        foregroundAlpha: number;
        level: string;
        mime: string;
        padding: number;
        size: number;
        value: string;
        element: HTMLCanvasElement;
        toDataURL(): string;
    }
    export function QRious(options: any): IQRious;
}