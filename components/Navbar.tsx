
import { House } from "lucide-react";
import {Button} from "./ui/Button";
import {useOutlet, useOutletContext} from "react-router";

const Navbar = () => {
    const { isSignedIn, userName, signIn, signOut } = useOutletContext<AuthContext>();


    const handleAuthClick = async () => {

        if(isSignedIn) {
            try {
                await signOut();
            } catch (e) {
                console.error(`Puter sign out failed: ${e}`);
            }
            return;
        }

        try {
            await signIn();
        } catch (e) {
            console.error(`Puter sign in failed: ${e}`);
        }
    };
    return (
        <header className="navbar">
            <nav className="inner">
                <div className="left">
                    <div className="brand">
                        <House className="logo" />
                        <span className="name">
                            ProstyRender
                        </span>
                    </div>
                    <ul className="links">
                        <a href="#">Usługa</a>
                        <a href="#">Cennik</a>
                        <a href="#">Społeczność</a>
                        <a href="#">Firmy</a>
                    </ul>
                </div>

                <div className="actions">
                    {isSignedIn ? (
                        <>
                        <span className="greeting">
                    {userName ? `Hi, ${userName}` : 'Signed in'}
                        </span>
                            <Button size="sm" onClick={handleAuthClick} className="btn">
                                Wyloguj się
                            </Button>
                        </>
                        ) : (
                            <>
                                <button onClick={handleAuthClick} className="login">
                        Zaloguj się
                        </button>
                        
                        <a href="#upload" className="cta">Zacznij</a>
                        </>
                        ) }
                </div>
            </nav>
        </header>
    )
}

export default Navbar

