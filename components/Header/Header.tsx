/** @jsxImportSource theme-ui */
import globalStyles from '../../utils/styles.global';
import headerStyles from './style.header';

export default function Header() {
  return (
    <header sx={{...headerStyles.header,...globalStyles.container}}>
      <ul sx={headerStyles.navigationList }>
        <li >
          <a sx={headerStyles.navigation} href="#home">Home</a>
        </li>
        <li >
          <a sx={headerStyles.navigation} href="#about_section">About</a>
        </li>
        <li >
          <a sx={headerStyles.navigation} href="#project_section">Projects</a>
        </li>
      </ul>
    </header>
  );
}
