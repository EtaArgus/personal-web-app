import { Link } from "react-router-dom";
import "./experimentsMenu.css";

const ExperimentsMenu = () => (
  <div className="experimentsmenu-links gradient__bg">
    <p>
      <Link to="/experiments">Weather</Link>
    </p>
    <p>
      <Link to="/experiments/fruits">Fruits</Link>
    </p>
  </div>
);

export default ExperimentsMenu;
