import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div className="p-4">
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button variant="outline" type="submit">
          Sign out
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;
