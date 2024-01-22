"use client";

import { BeatLoader } from "react-spinners";

import { CardWrapper } from "./card-wrapper";
import { use, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { useRouter } from "next/navigation";

export const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (error || success) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch((error) => {
        setError("Something went wrong!");
      });
  }, [token, error, success]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center justify-center w-full">
        {!error && !success && <BeatLoader color="#808080" />}
        {!success && <FormError message={error} />}
        <FormSuccess message={success} />
      </div>
    </CardWrapper>
  );
};
