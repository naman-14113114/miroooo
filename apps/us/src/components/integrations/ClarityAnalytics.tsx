"use client";

import { useEffect } from "react";
import { runAfterEngagement } from "@/lib/loadOnEngagement";

const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim();

function clarityScript(projectId: string) {
  return `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${projectId}");`;
}

export function ClarityAnalytics() {
  useEffect(
    () =>
      runAfterEngagement(() => {
        if (!clarityProjectId) return;
        if (document.querySelector("script[data-store-clarity='true']")) {
          return;
        }

        const script = document.createElement("script");
        script.dataset.storeClarity = "true";
        script.textContent = clarityScript(clarityProjectId);
        document.head.appendChild(script);
      }),
    [],
  );

  return null;
}
