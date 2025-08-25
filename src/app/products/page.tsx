// app/page.tsx (or app/somepage/page.tsx)
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/auth"; // make sure this points to your auth config
import React from "react";

export default async function Page() {
  // const session = await getServerSession(authOptions);

  // console.log("SESSION:", session); // This runs only on the server (never in browser)

  return (
    <div>
      products
    </div>
  );
}

