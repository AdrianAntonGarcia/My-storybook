import './mylabel.css';
import { AllCaps } from '../stories/components/MyLabel.stories';

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
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No label',
  size = 'normal',
}: MyLabelProps) => {
  return (
    <span className={`${size} text-${color}`}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
