import Header from "./components/header/Header";
import Layout from "./components/Layout";
import WeatherBoard from "./components/weather/WeatherBoard";

function Page() {
  return (
    <Layout>
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </Layout>
  );
}
export default Page;