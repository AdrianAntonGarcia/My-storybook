import './mylabel2.scss';

export interface MyLabel2Props {
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

export const MyLabel2 = ({
  allCaps = false,
  color = 'primary',
  label = 'No label',
  size = 'normal',
  fontColor,
  backgroundColor = 'transparent',
}: MyLabel2Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      otro label {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel2;
