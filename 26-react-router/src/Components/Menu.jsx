import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav>
      {/* <Link to=".">Home</Link>
      <Link to="about">About</Link>
      <Link to="contacts">Contacts</Link> */}
      {/* <NavLink to="." end>Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contacts">Contacts</NavLink> */}
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="courses"
      >
        Courses
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;
