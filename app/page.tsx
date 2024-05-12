import AirResulr from "@/components/AirResulr";

export default async function Home() {
  const url =
    "https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2025-01-12&checkout=2025-01-13&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RapidAPI_Key!,
      "X-RapidAPI-Host": process.env.RapidAPI_Host!,
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  return (
    <div>
      <AirResulr results={result} />
    </div>
  );
}
