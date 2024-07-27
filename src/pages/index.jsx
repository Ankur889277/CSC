import { useRouter } from "next/router";
import Meta from "@layout/Meta";

import MerchantPage from "@components/LandingPage";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Meta title="LIMS" description="Lab sample test" keywords="" />
      <main>
        <MerchantPage />
      </main>
    </>
  );
}
