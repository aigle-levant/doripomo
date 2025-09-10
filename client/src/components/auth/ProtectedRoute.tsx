import { withAuthenticationRequired } from "@auth0/auth0-react";
import { type ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const Component = withAuthenticationRequired(() => <>{children}</>, {
    onRedirecting: () => (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    ),
  });

  return <Component />;
}
