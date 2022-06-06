import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './Dropdown.scss';

interface DropdownConfig {
  items: Array<{ id: number; title: string }>;
  handleSelect: (id: number) => void;
  handleClose: () => void;
}

export function Dropdown({ items, handleSelect, handleClose }: DropdownConfig) {
  return (
    <div className="dropdown">
      <ul>
        {items.map((item) => (
          <li key={item.id} className="dropdown-item" onClick={() => handleSelect(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>

      <button onClick={handleClose} className="dropdown-close-btn">
        <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
  );
}
