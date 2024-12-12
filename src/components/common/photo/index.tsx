import Image from "next/image";

const Photo = () => {
  const snowflakes = Array.from({ length: 50 });
  return (
    <div className="relative w-[350] md:w-[400px] h-64 md:h-[300px] bg-blue-500 rounded-xl overflow-hidden mt-4">
      <Image
        src="/assets/images/me.jpg"
        className="w-full h-full object-cover rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
        alt="Home LP Modal"
        width={300}
        height={300}
        unoptimized={true}
        priority
      />

      <div className="absolute inset-0 pointer-events-none">
        {snowflakes.map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-xl opacity-75 animate-snow"
            style={{
              top: `${Math.random() * -20}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <Image
          width={400}
          height={300}
          src="/assets/images/christmas.png"
          className="absolute rotate-180 translate-y-[-25px]"
          alt="decoration"
        />
      </div>
    </div>
  );
};

export default Photo;
