import react, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
const [user,setUser] = useState({});

useEffect(()=>{
    const userStorage = JSON.parse(localStorage.getItem('user') || '{}');
    setUser(userStorage);
},[])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-create">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-3 color-title bg-body-create" to="/">Money Mate<img src='https://cdn-icons-png.flaticon.com/128/5256/5256989.png' className='mony-mate-img'/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fs-5 " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-auto ">
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold me-5 color bg-body-create" aria-current="page" to="/"><img src='https://cdn-icons-png.flaticon.com/128/5974/5974636.png' className='home-image'/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold me-5 color" aria-current="page" to="/my-transactions"> <img src='https://cdn-icons-png.flaticon.com/128/6463/6463504.png' className='transaction'/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold me-5 color" aria-current="page" to="/add-transactions"><img src='https://cdn-icons-png.flaticon.com/128/12261/12261818.png' className='add-transaction-image'/></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active fw-bold me-5 color" aria-current="page" to="/login"><img src='https://cdn-icons-png.flaticon.com/128/295/295128.png' className='logi-image'/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold me-5 color" aria-current="page" to="/signup"><img src='https://cdn-icons-png.flaticon.com/128/9436/9436398.png' className='signup-image'/></Link>
                            </li>

                        </ul>
                        <div className='logout fw-bold color'>
                            hello👍,{user.name || "user!"}
                            {user?.name ?
                            (<span className='logout-img'
                                onClick={()=>{localStorage.removeItem('user'); window.location.href='/login'}}> logout </span>)
                                :
                                null}
                        </div>
            
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;