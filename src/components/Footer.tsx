import { personal } from "../data";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner" data-dust="panel" data-dust-step="11">
        <a href="#home" aria-label="Back to top"><Brand /></a>
        <p>Crafted by {personal.name} · {personal.brand}</p>
        <a className="text-link" href={personal.portfolioRepository} target="_blank" rel="noopener noreferrer">
          Portfolio Repository
        </a>
      </div>
    </footer>
  );
}
