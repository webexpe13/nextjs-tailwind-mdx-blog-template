import Link from "next/link";
import Container from "./container";
import { CURRENT_YEAR } from "../lib/utils";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-10">
          <Link
            href="/"
            className="text-4xl font-bold hover:underline text-center block"
          >
            Blog
          </Link>
          <p className="text-center text-[14px] text-black mt-4">
            Copyright © {CURRENT_YEAR} |{" "}
            <Link href="/privacy-policy"><span className="hover:text-blue-500">Privacy Policy</span></Link> |{" "}
            <Link href="/terms-and-condition"><span className="hover:text-blue-500">Terms and Conditions</span></Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
