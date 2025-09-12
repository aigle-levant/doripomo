import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { getIcon, getType } from "../utils/getIcon";
import { type Syllabus, type SyllabusData } from "../types/syllabusTypes";

export function useSyllabus() {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0();
  const [syllabus, setSyllabus] = useState<SyllabusData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }

    const fetchSyllabus = async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: "https://doripomo-api.com",
            scope: "read:syllabus",
          },
        });

        console.log("Access Token:", token);

        const res = await fetch("http://localhost:4000/api/syllabus", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data: Syllabus[] = await res.json();

        if (!Array.isArray(data)) throw new Error("Invalid response format");

        const formattedData = data.map((item) => ({
          id: item._id,
          title: item.title,
          type: getType(item.title) || "default",
          icon: getIcon(getType(item.title) || "default"),
        }));

        setSyllabus(formattedData);
      } catch (err) {
        console.error("Fetch syllabus error:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch syllabus"
        );
      }
    };

    fetchSyllabus();
  }, [isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently]);

  return { syllabus, error, isLoading };
}
