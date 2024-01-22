import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "./card-wrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong."
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex items-center justify-center">
        <ExclamationTriangleIcon className="text-destructive w-10 h-10" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
