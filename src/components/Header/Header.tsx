import { FC } from 'react';
import { Typography, AppBar } from '@mui/material';
import styles from './Header.module.css';

export const Header: FC = () => {
  return (
    <div>
      <AppBar>
        <Typography className={styles.page_text} variant="h4">
          Star Wars
        </Typography>
      </AppBar>
    </div>
  );
};
