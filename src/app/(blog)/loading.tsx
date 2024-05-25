import SkeletonLoading from "../components/SkeletonLoading";

export default function Loading() {
  return (
    <div className="flex justify-center items-center mt-20 mx-8 md:mx-auto">
      <SkeletonLoading />
    </div>
  )
}