import { useAuth0 } from "@auth0/auth0-react";

export function AuthFetch(url: string) {
  const { getAccessTokenSilently } = useAuth0();
  async function fetcher(options: RequestInit = {}) {
    const token = await getAccessTokenSilently({
      authorizationParams: {
        audience: "https://doripomo-api.com",
      },
    });

    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  return fetcher;
}
