"use client";
import { BRAND_NAME } from "@store/shared";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";
import Lottie from "lottie-react";
import loadingLottie from "@/components/cart/loading-lottie.json";
export function CartMinimalHeader() {
    const [isRedirecting, setIsRedirecting] = useState(false);
    useEffect(() => {
        function handleCheckoutStarted() {
            setIsRedirecting(true);
        }
        function handlePageShow(event: PageTransitionEvent) {
            if (event.persisted) {
                setIsRedirecting(false);
            }
        }
        window.addEventListener("store:started-checkout", handleCheckoutStarted);
        window.addEventListener("pageshow", handlePageShow);
        return () => {
            window.removeEventListener("store:started-checkout", handleCheckoutStarted);
            window.removeEventListener("pageshow", handlePageShow);
        };
    }, []);
    return (<header className="sticky top-0 z-50 border-b border-[rgba(58,31,61,.14)] bg-[rgba(247,241,232,.96)]">
      <div className="store-wrap grid min-h-[68px] grid-cols-[1fr_auto_1fr] items-center gap-3 py-3">
        <span aria-hidden="true"/>
        <Link aria-label={`${BRAND_NAME} home`} className="inline-flex shrink-0 items-center justify-self-center" href="/">
          <span className="store-display flex h-[50px] w-[132px] items-center justify-center whitespace-nowrap text-base font-bold tracking-[-0.03em] text-[var(--plum)] sm:w-[160px] sm:text-lg">{BRAND_NAME}</span>
        </Link>

        <div className="hidden justify-self-end sm:block">
          <CartCheckoutButton isRedirecting={isRedirecting}/>
        </div>
      </div>

      <div className="fixed inset-x-3 z-50 rounded-full border border-[var(--border)] bg-[var(--card)] p-1 shadow-[0_18px_42px_-20px_rgba(58,31,61,.68)] sm:hidden" style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <CartCheckoutButton className="min-h-12 w-full" isRedirecting={isRedirecting}/>
      </div>
    </header>);
}
function CartCheckoutButton({ className = "", isRedirecting, }: {
    className?: string;
    isRedirecting: boolean;
}) {
    return (<button className={`store-cart-wipe store-display relative inline-flex h-11 items-center justify-center overflow-hidden rounded-[30px] border border-[var(--plum)] bg-[var(--plum)] px-6 py-3 text-xs font-bold uppercase leading-none tracking-wide text-[var(--cream)] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-[var(--gold)] active:scale-[0.98] sm:text-sm ${!isRedirecting ? "proxy-bundle-btn" : ""} ${className}`} type="button" disabled={isRedirecting} onClick={() => {
            const button = document.getElementById("main-checkout-btn") as HTMLButtonElement;
            button?.click();
        }}>
      {isRedirecting ? (<>
          <span className="inline-flex items-center gap-2" style={{ visibility: "hidden" }}>
            <Lock size={16} strokeWidth={1.8}/>
            <span>Buy Now</span>
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            <Lottie animationData={loadingLottie} className="h-14 w-20 scale-[1.35]" loop/>
          </span>
        </>) : (<span className="relative z-10 inline-flex items-center justify-center gap-2">
          <Lock size={16} strokeWidth={1.8}/>
          <span>Buy Now</span>
        </span>)}
    </button>);
}

