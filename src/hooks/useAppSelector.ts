import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useAppSelector: <Selected extends unknown>(
  selector: (state: RootState) => Selected,
  equalityFn?: ((previous: Selected, next: Selected) => boolean) | undefined
) => Selected = useSelector;
