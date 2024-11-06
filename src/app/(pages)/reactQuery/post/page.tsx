"use client";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Quote from "@/app/types/quote";

const Page = () => {
  console.log("vjkl");

  const { data, error, isLoading } = useQuery({
    queryKey: ["quotes"],
    queryFn: async () => {
      console.log("Query function is running");
      const response = await axios.get("https://dummyjson.com/quotes");
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading quotes</p>;
  if (!data || !data.quotes) return <p>No quotes available</p>;

  return (
    <ul>
      {data.quotes.map((quote: Quote) => (
        <li key={quote.id}>{quote.quote}</li>
      ))}
    </ul>
  );
};

export default Page;
