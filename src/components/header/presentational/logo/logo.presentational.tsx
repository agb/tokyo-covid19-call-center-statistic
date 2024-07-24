const LogoPresentational = () => {
  return (
    <div className="p-2 bg-gray-900 rounded">
      <a href="https://portal.data.metro.tokyo.lg.jp/">
        <img
          className="w-44 "
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="logo"
        />
      </a>
    </div>
  );
};

export default LogoPresentational;
