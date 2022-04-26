import { useRoutes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export default function ThemeRoutes() {
  return useRoutes([PrivateRoutes, PublicRoutes]);
}
