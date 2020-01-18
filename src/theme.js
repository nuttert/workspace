import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

theme.typography.h6 = {
  ...theme.typography.h6,
      fontSize: '0.85rem',
      [theme.breakpoints.up('lg')]: {
        fontSize: '0.85rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '0.96rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.96rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.85rem',
      },
};
theme.typography.h5 = {
  ...theme.typography.h5,
      fontSize: '1rem',
      [theme.breakpoints.up('lg')]: {
        fontSize: '1rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '1.1rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.8rem',
      },
};
theme.typography.h4 = {
  ...theme.typography.h4,
      fontSize: '1.2rem',
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.4rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.4rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
      },
};

theme.typography.subtitle2 = {
      ...theme.typography.subtitle2,
      fontSize: '0.6rem',
      [theme.breakpoints.up('lg')]: {
        fontSize: '0.6rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '0.7rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.5rem',
      },
};
theme.typography.subtitle1 = {
      ...theme.typography.subtitle1,
      fontSize: '0.6rem',
      [theme.breakpoints.up('lg')]: {
        fontSize: '0.75rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '0.7rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.5rem',
      },
};

export default theme;
