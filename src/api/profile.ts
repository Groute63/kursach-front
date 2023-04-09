import useSWR from "swr";

import { fetcher } from "./fetcher";

interface User {
  name: string;
}

export const useProfile = () =>
  useSWR<User>("/profile/me", fetcher, { refreshInterval: 0 });
