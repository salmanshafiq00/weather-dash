import ClearSkyImage from '../assets/backgrounds/clear-sky.jpg';

function Layout({ children }) {
  return (
    <div
      style={{ backgroundImage: `url(${ClearSkyImage})` }}
      className="grid place-items-center h-screen bg-no-repeat bg-cover">
      {children}
    </div>
  );
};
export default Layout;