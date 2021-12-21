/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Texto que va a tener el componente
     */
    label: string;
    /**
     * Tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Color del texto
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Indica si todo el texto tiene que ir en mayúsculas
     */
    allCaps?: boolean;
    /**
     * Indica el color de la fuente
     */
    fontColor?: string;
    /**
     * Indica el color del fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
