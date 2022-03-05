import Drawer from "@mui/material/Drawer";

export default function Cart() {
  return (
    <Drawer anchor="right" open={true}>
      <div>
        <span className="">3</span>
        <span className="">items</span>
      </div>
      <div className="w-96">helloworld</div>
    </Drawer>
  );
}
