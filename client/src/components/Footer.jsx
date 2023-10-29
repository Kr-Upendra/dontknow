import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__text">
        &copy; 2023 | Design & Develop by team
        <Link className="footer__text--team">Pixel Sangam</Link>
      </span>
    </footer>
  );
}
