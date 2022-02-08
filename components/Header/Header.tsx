/** @jsxImportSource theme-ui */
import globalStyles from '../../utils/styles.global';
import headerStyles from './style.header';

export default function Header() {
  return (
    <header sx={{...headerStyles.header,...globalStyles.container}}>
      <ul sx={headerStyles.navigationList }>
        <li sx={headerStyles.navigation}>Home</li>
        <li sx={headerStyles.navigation}>About</li>
        <li sx={headerStyles.navigation}>Projects</li>
      </ul>
    </header>
  );
}
