import Link from "next/link"

function Navbar() {
  return (
    <div className="py-4 fixed w-full z-50 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <Link href="/">Next Blog</Link>
      </div>
    </div>
  )
}

export default Navbar