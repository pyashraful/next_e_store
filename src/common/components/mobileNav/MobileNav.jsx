import { useContext } from "react";
import { Store } from "@utils/store";
import { useRouter } from "next/router";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { styled } from "@mui/system";
import { useUser } from "src/common/hook/useUser";

const FixDiv = styled("div")({
  position: "fixed",
  justifyContent: "space-around",
  alignItems: "center",
  height: "64px",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1500,
  boxShadow: "0px 1px 4px 3px rgb(0 0 0 / 10%)",
  width: "100vw",
  backgroundColor: "white",
});

const NavLink = styled("a")({
  position: "relative",
  flex: "1 1 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  cursor: "pointer",
  height: "100%",
  "&:hover": {
    color: "rgb(210, 63, 87)",
  },
  color: "rgb(0 0 0 )",
});

export default function MobileNav({ showModal, setShowModal }) {
  const { user } = useUser();
  const { state, dispatch } = useContext(Store);
  console.log("🚀 ~ file: MobileNav.jsx ~ line 44 ~ MobileNav ~ state", state);
  const router = useRouter();

  function showLoingForm() {
    if (user) {
      router.push("/profile");
    } else {
      dispatch({ type: "TOGGLE_SIGNIN_DIALOG" });
    }
  }

  return (
    <FixDiv sx={{ display: { xs: "flex", md: "none" } }}>
      <Link href="/" passHref>
        <NavLink>
          <HomeIcon size="large" />
          Home
        </NavLink>
      </Link>
      <Link href="/cart" passHref>
        <NavLink>
          <LocalMallOutlinedIcon size="large" />
          Cart
        </NavLink>
      </Link>

      <NavLink onClick={showLoingForm}>
        <PermIdentityOutlinedIcon size="large" />
        Profile
      </NavLink>
    </FixDiv>
  );
}
