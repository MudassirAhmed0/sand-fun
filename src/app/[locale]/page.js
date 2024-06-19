import HomePage from "@/components/home/Index";
import Layout from "@/components/layout/Index";

export default async function page({ params: { locale } }) {
  const isAr = locale == "ar";
  return (
    <Layout arabic={isAr}>
      <HomePage arabic={isAr} />
    </Layout>
  );
}
