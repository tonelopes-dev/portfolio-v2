const ButtonDownloadCV = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1_ZjWS4ZWq9hAu39LUyHGwFVRd6rKWvLv/view?usp=sharing"
      target="_blank"
      rel="noreferrer"
    >
      <button
        type="button"
        className="mb-2 me-2 inline-flex   items-center  rounded-lg  bg-teal-700 px-5  py-2.5   text-center text-sm  font-bold  text-amber-100  hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:bg-teal-600  dark:hover:bg-teal-700 dark:focus:ring-teal-800 "
      >
        <i className="fa-solid fa-download "></i>
        <span className="ml-3">Download CV</span>
      </button>
    </a>
  );
};

export default ButtonDownloadCV;
