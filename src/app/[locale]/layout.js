import "swiper/css";
import "../globals.css";
import "swiper/css/navigation";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import getStaticMetaData from "@/utils/seo/getStaticMetaData";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = getStaticMetaData({
  title: "SAND & FUN || Home Page",
  description: "19-23 Novembar 2024 ,Al Thumamah airport Saudi Arabia",
  isRobotFollow: false
});

export default async function LocaleLayout({ children, params: { locale } }) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
