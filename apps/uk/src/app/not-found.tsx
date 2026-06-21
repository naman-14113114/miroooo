import { BRAND_NAME } from "@store/shared";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
export default function NotFound() {
    return (<section className="store-section bg-[var(--cream)] py-28">
      <div className="store-wrap max-w-2xl text-center">
        <p className="store-eyebrow">Page not found</p>
        <h1 className="store-heading mt-4">This glow is still loading.</h1>
        <p className="store-copy mx-auto mt-5 max-w-xl">{`
          The page you opened is not available yet. The ${BRAND_NAME} Electric Toothbrush X2 product
          page is ready for you.
        `}</p>
        <Button asChild className="mt-8">
          <Link href="/products/miroooo-electric-toothbrush-x2">{`Shop ${BRAND_NAME} Electric Toothbrush`}</Link>
        </Button>
      </div>
    </section>);
}

