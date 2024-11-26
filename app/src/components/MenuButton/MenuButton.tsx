import IconButton from '@mui/joy/IconButton';
import { AddCircleOutline } from '@mui/icons-material';
import './MenuButton.scss';

export const MenuButton = () => {
  return (
    <div className="button_container">
      <IconButton variant="solid">
        <AddCircleOutline />
      </IconButton>
    </div>
  );
};
