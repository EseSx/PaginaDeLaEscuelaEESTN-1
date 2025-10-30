export default function Telon() {
  return (
    <div className="flex justify-center items-start h-screen bg-[#1a1a1a]">
      <div className="relative w-[100%] h-[120px] mt-10">
        {/* Telón izquierdo */}
        <div className="absolute top-0 left-[-50px] w-[53.5%] h-full bg-red-700 rounded-b-[50%] shadow-lg"></div>
        {/* Telón derecho */}
        <div className="absolute top-0 right-[-50px] w-[53.5%] h-full bg-red-700 rounded-b-[50%] shadow-lg"></div>
      </div>
    </div>
  );
}
