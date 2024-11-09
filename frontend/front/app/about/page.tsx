"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface HomeInfo {
  name: string;
  email: string;
  site: string;
}

export default function Home() {
  const [homeInfo, setHomeInfo] = useState<HomeInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHomeInfo = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:3001/homeinfos");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setHomeInfo(data);
    } catch (err) {
      setError("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeInfo();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Home Info
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading && <p className="text-center">Loading...</p>}
          {error && (
            <div className="text-center">
              <p className="text-red-500 mb-4">{error}</p>
              <Button onClick={fetchHomeInfo}>Retry</Button>
            </div>
          )}
          {homeInfo && (
            <div className="space-y-4">
              <p>
                <strong>Name:</strong> {homeInfo.name}
              </p>
              <p>
                <strong>Email:</strong> {homeInfo.email}
              </p>
              <p>
                <strong>Site:</strong>{" "}
                <a
                  href={homeInfo.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {homeInfo.site}
                </a>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
