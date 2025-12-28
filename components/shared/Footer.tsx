export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kasparro. All rights reserved.
        </p>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
}
