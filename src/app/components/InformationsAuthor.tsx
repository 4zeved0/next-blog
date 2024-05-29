import Image from "next/image";

export default function InformationsAuthor() {
  return (
    <div className="text-center mb-16">
      <div className="flex item-center justify-center">
        <svg
          fill="#1e293b"
          viewBox="0 0 16 16"
          height="5em"
          width="5em"
          className=" border-slate-800 border-4 rounded-full p-2 mb-3"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold mb-3 text-slate-800">Lorem Ipsun</h1>
      <p className="text-center text-slate-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ad nihil vel dolorum doloribus non, vero sequi nam debitis inventore rerum, esse eius ipsam libero nostrum ab, commodi minima pariatur.</p>
    </div>
  )
}