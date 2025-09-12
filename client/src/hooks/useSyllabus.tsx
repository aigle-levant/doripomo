import { useAuth0, type GetTokenSilentlyOptions } from "@auth0/auth0-react";
import { useState, useEffect, useCallback } from "react";
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

  const stableLoginWithRedirect = useCallback(
    () => loginWithRedirect(),
    [loginWithRedirect]
  );
  const stableGetAccessTokenSilently = useCallback(
    (options?: GetTokenSilentlyOptions) => getAccessTokenSilently(options),
    [getAccessTokenSilently]
  );

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) {
      stableLoginWithRedirect();
      return;
    }
    const fetchSyllabus = async () => {
      try {
        const token = await stableGetAccessTokenSilently({
          authorizationParams: {
            audience: "https://doripomo-api.com",
          },
        });
        const res = await fetch("http://localhost:4000/api/syllabus", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data: Syllabus[] = await res.json();
        const formattedData = data.map((item) => ({
          id: item._id,
          title: item.title,
          type: getType(item.title) || "default",
          icon: getIcon(getType(item.title) || "default"),
        }));
        setSyllabus(formattedData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch syllabus"
        );
      }
    };
    fetchSyllabus();
  }, [
    isAuthenticated,
    isLoading,
    stableLoginWithRedirect,
    stableGetAccessTokenSilently,
  ]);

  return { syllabus, error, isLoading };
}
