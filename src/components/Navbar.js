import './navbar.css';

const Navbar = ({ user, handleLogin }) => {
  return (
    <nav>
      <div className="title">Welcome</div>
      {!user && (
        <div className="login">
          <button onClick={() => handleLogin()}>Log in</button>
        </div>
      )}
      {user && <div className="user-info">{user}</div>}
    </nav>
  );
};

export default Navbar;
