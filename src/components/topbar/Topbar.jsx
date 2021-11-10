import "./topbar.scss"
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><HomeIcon className="icon" /></a>
                    <div className="itemContainer">
                        <PersonIcon className="icon" />
                        <span>+1 706 247 2866</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon" />
                        <span>pooserben@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <span>
                            <a href="https://www.linkedin.com/in/ben-pooser/">
                                <LinkedInIcon className="icon" />
                            </a>
                        </span>
                    </div>
                    <div className="itemContainer">
                        <span>
                            <a href="https://github.com/benpooser">
                                <GitHubIcon className="icon" />
                            </a>
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
