"use client";

import { ResultsSkeleton, Results } from "./_components/results";
import React, { Suspense } from "react";

export default function Home() {
  return (
    <div className=" h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<ResultsSkeleton/>}>
        <Results />
      </Suspense>
    </div>
  );
};