import './navbar.css';

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

export default Navbar;
