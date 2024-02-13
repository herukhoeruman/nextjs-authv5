"use client";

// import { auth, signOut } from "@/auth"; // server
import { useSession } from "next-auth/react"; // client

import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";
import { useCurrentSession } from "@/hooks/use-current-session";

const SettingsPage = () => {
  // const session = await auth(); // server
  // const session = useSession(); // client

  const user = useCurrentSession(); // hook current user

  const onClick = () => {
    logout();
  };

  return (
    <div className="p-4">
      {JSON.stringify(user)}
      <form>
        <Button variant="outline" onClick={onClick}>
          Sign out
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;
