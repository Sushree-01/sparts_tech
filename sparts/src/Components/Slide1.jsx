import { useEffect, useState } from "react";

export const Slide1 = () => {
  const [start_Index, setStartIndex] = useState(0);
  const [cards, setCards] = useState(getCards());
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function fetchData() {
    setLoading(true);
    fetch("https://mock-jsonserver.onrender.com/academies")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setCards(getCards());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        if (start_Index < data.length - cards) {
          setStartIndex(start_Index + 1);
        } else {
          setStartIndex(0);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [start_Index, data.length, cards, isHovered]);

  const handlePrevClick = () => {
    if (start_Index > 0) {
      setStartIndex(start_Index - 1);
    }
  };

  const handleNextClick = () => {
    if (start_Index < data.length - cards) {
      setStartIndex(start_Index + 1);
    }
  };

  function getCards() {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    return 1;
  }

  return (
    <div className="mx-auto my-auto">
      {loading ? (
        <div className=" text-2xl font-mono text-white ">please wait...</div>
      ) : (
        <div
          className="flex items-center justify-center md:ml-16  w-[95%] h-full   "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute md:left-[72px] left-4  z-10">
            <button
              onClick={handlePrevClick}
              disabled={start_Index === 0}
              className={`bg-yellow-300 w-10 h-10  rounded-full ${
                start_Index === 0 ? "opacity-50" : ""
              }`}
              style={{ cursor: start_Index === 0 ? "not-allowed" : "pointer" }}
            >
              &lt;
            </button>
          </div>

          <div className="flex overflow-hidden w-[410px] md:w-full m-auto  ">
            <div
              className="flex md:py-3 md:pr-8  w-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${start_Index * (100 / cards)}%)`,
              }}
            >
              {data.map((card) => (
                <div
                  key={card.id}
                  className={`flex-none p-1 bg-blue-200 md:m-1 rounded-lg transform transition duration-300 hover:-translate-y-4 ${
                    cards === 4
                      ? "w-1/4"
                      : cards === 3
                      ? "w-1/3"
                      : "w-full"
                  }`}
                >
                  <img src={card.image} alt="" className="w-full rounded-lg " />
                  <p className="font-bold">{card.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-5">
            <button
              onClick={handleNextClick}
              disabled={start_Index >= data.length - cards}
              className={`bg-yellow-300 w-10 h-10 p-2 rounded-full ${
                start_Index >= data.length - cards ? "opacity-50" : ""
              }`}
              style={{
                cursor:
                start_Index >= data.length - cards
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
