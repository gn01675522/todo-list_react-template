import "./backdrop.styles.scss";

const Backdrop = ({ children }) => {
  return (
    <div className="backdrop">
      <div className="modal">{children}</div>
    </div>
  );
};

export default Backdrop;
