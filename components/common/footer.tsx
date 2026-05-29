import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Brand & Copy */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              LionCode
            </span>
            <p className="text-center text-xs text-muted-foreground md:text-left">
              &copy; {currentYear} LionCode Inc. All rights reserved. High-performance software engineering.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
