import { useEffect, useState } from "react";

export interface Data_Object {
  count: number;
  next: any;
  previous: any;
  results: Results[];
}

export interface Results {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export const useFilms = () => {
  const [query, setQuery] = useState<{
    data: Data_Object;
    error: string | unknown;
    loading: boolean;
  }>({
    data: { count: 0, next: null, previous: null, results: [] },
    error: "",
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/films`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result: Data_Object = await response.json();

        setQuery({
          data: result,
          error: null,
          loading: false,
        });
      } catch (error) {
        setQuery((prevState) => ({ ...prevState, error }));
      }
    };

    fetchData();
  }, []);

  return query;
};
