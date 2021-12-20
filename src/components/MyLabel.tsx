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
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
}: MyLabelProps) => {
  return <span className={`${size}`}>{label}</span>;
};
