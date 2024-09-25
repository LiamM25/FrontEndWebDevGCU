function CurrentModule(props) {
  return (
    <div>
      <p> {props.name} </p>
    </div>
  );
}
function Modules() {
  return (
    <div>
      <CurrentModule name="Module, Leader, Credits ...."></CurrentModule>
      <CurrentModule name="Module, Leader, Credits ...."></CurrentModule>
      <CurrentModule name="Module, Leader, Credits ...."></CurrentModule>
    </div>
  );
}

const domContainer = document.querySelector("#moduleContainer");
const root = ReactDOM.createRoot(domContainer);
root.render(<Modules />);
