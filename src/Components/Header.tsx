import { createStyles, Group } from "@mantine/core";
import IMG from "./../img/download.png";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
interface Props {
  className?: string;
}
const useStyle = createStyles(() => ({
  sign__in__register: {
    display: "flex",
  },
  btn__a : {
    textDecoration: "none",
    marginRight: "20px",
    fontWeight: "bold",
    color: "#9e9e9e",
    marginLeft: "10px",
    [`&:hover`]: {
      textDecoration: "none",
      color: "#fb4226",
    },
  },
  link__a: {
    textDecoration: "none",
    marginRight: "20px",
    fontWeight: "bold",
    color: "black",
    marginLeft: "10px",

    [`&:hover`]: {
      textDecoration: "none",
      color: "#fb4226",
    },
  },
  disconnexion: {
    height: "auto",
    alignSelf: "stretch",
    width: "2px",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    margin: 0,
    flexShrink: 0,
  },
  div__link: {
    justifyContent: "center",
  },
  header: {},
}));
const Header = ({ className }: Props) => {
  const { classes, cx } = useStyle();
  return (
    <Group
      className={className}
      style={{
        boxShadow:
          "0 8px 8px 0 #1415191c, 0 12px 18px 0 rgba(103, 151, 255, .11)",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        display: "block",
        zIndex: "999999",
        backgroundColor: "rgba(255,255,255,.95)",
      }}
    >
      <nav className="navbar navbar-expand-xl navbar-light ">
        <a className="navbar-brand" href="/#">
         <img src={IMG} width={"50px"} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mr-auto"
            style={{ transform: "translateX(50vh)" }}
          >
            <li className="nav-item active">
         <a className={cx(classes.link__a, className)} href="/#lichchieu">
                Lịch chiếu
              </a>   
            </li>
            <li className="nav-item">
            <a className={cx(classes.link__a, className)} href="/#cumrap">
                Cụm rạp
              </a>      
            </li>
            <li className="nav-item">
            <a className={cx(classes.link__a, className)} href="/#ungdung">
                Ứng dụng
              </a>     
            </li>
            <li className="nav-item ">
            <a className={cx(classes.link__a, className)} href="/#tintuc">
                Tin tức
              </a>     
            </li>

          </ul>
          <div className={classes.sign__in__register}>
            <div className="sign__in">
              <Link to="/sign__in" className={classes.btn__a} >
                <FaUserCircle style={{fontSize:"25px", marginRight:"10px"}}  />
                Đăng nhập
              </Link>
            </div>
            <hr className={classes.disconnexion} />
            <div className="resgister">
              <Link to="/register" className={classes.btn__a} >
                <FaUserCircle style={{fontSize:"25px", marginRight:"10px"}}  />
                Đăng kí
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Group>
  );
};

export default Header;
