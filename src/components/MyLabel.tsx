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

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No label',
  size = 'normal',
  fontColor,
  backgroundColor = 'transparent',
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
