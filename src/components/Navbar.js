import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const greeting = user && user.displayName ? `hello, ${user.displayName}` : 'hello!'

    return (
        <nav className='navbar'>
            <div>
                <Link to='/' className='title'>MaiFinance</Link>
                {!user && (
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </>
                )}
                {user &&
                    <>
                        <p>{greeting}</p>
                        <button onClick={logout} className='btn'>Logout</button>
                    </>
                }
            </div>
        </nav>
    )
};

export default Navbar;