import "./logOut.scss";

const LogOut = () => {
  return (
    <div>
      <button className="logOutBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#B9C1C2"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
        Cerrar sesión
      </button>
    </div>
  );
};

export default LogOut;
