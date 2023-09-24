function MainHeader() {
  return (
    <header className="flex flex-col items-center text-center mt-10">
      <h1 className="text-4xl font-bold">Most Popular Tours</h1>
      <p className="text-gray-400 font-bold mt-4 relative flex items-center pb-10 mb-10">
        Please select Your Destination
        <span className="border-b-2 border-dotted w-1/2 absolute bottom-0 left-1/4 border-gray-300" />
      </p>
    </header>
  );
}

export default MainHeader;
