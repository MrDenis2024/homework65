import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid container">
        <NavLink to='/' className='navbar-brand'>Static Pages</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/' className='nav-link'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/pages/about' className='nav-link'>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/pages/contacts' className='nav-link'>Contacts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/pages/devisions' className='nav-link'>Divisions</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/pages/cart' className='nav-link'>Cart</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/pages/admin' className='nav-link'>Admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;