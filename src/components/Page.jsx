import Header from "./header/Header";
import Layout from "./Layout";
import WeatherBoard from "./weather/WeatherBoard";

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
};
export default Page;