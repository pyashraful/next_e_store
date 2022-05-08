import Icon from "@mui/material/Icon";
const WrappedIcon = ({ color, size, ...props }) => {
  console.log({ color, size }, props);
  return <Icon color="red" {...props} />;
};
WrappedIcon.muiName = "Icon";

export default WrappedIcon;
