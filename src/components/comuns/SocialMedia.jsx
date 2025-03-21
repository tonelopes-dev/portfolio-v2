const SocialMedia = () => {
  return (
    <div className=" font mb-5 flex justify-center gap-8 rounded-md border-2 border-blue-200 bg-white  bg-opacity-90 text-lg hover:shadow-sm  hover:shadow-teal-400	">
      <a
        href="https://www.linkedin.com/in/tonelopes-dev/"
        target="_blank"
        className="p-3 text-blue-900 hover:scale-125 hover:text-blue-700"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin "></i>
      </a>

      <a
        href="https://github.com/tonelopes-dev"
        target="_blank"
        className="p-3 text-blue-900 hover:scale-125 hover:text-blue-700"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default SocialMedia;
