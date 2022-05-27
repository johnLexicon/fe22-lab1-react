import './navbar.css';
import PropTypes from 'prop-types';

const Navbar = ({ title, user, handleLogin }) => {
  return (
    <nav>
      <div className="title">{title}</div>
      {!user && (
        <div className="login">
          <button onClick={() => handleLogin('User name')}>Log in</button>
        </div>
      )}
      {user && (
        <div onClick={() => handleLogin(null)} className="user-info">
          {user}
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string,
  handleLogin: PropTypes.func.isRequired
};

export default Navbar;
