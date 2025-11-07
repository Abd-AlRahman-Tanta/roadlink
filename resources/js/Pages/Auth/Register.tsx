import Button from "@/Components/Button";
import Headline from "@/Components/Common/Headline";
import Input from "@/Components/Input";
import StatusPopup from "@/Components/Popups/StatusPopup";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

const registrationFields = [
  {
    name: "name",
    label: "Name",
    type: "string",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "password_confirmation",
    label: "Password Confirmation",
    type: "password",
  },
];

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const submit = (e) => {
    e.preventDefault();

    post("/register", {
      onFinish: () => reset("password", "password_confirmation"),
    });
  };

  return (
    <AuthLayout>
      <Head title="Register" />
      <Headline className="mx-auto mb-4" headline={"Register"} />
      <form onSubmit={submit} className="flex flex-col gap-5">
        {registrationFields.map((field, i) => {
          return (
            <div>
              <Input
                label={field.label}
                onChange={(e) => setData(field.name, e.currentTarget.value)}
                type={field.type}
              />
              {errors[field.name] && (
                <span className="text-red-700 text-sm">
                  {errors[field.name]}
                </span>
              )}
            </div>
          );
        })}
        <Button>Register</Button>
      </form>
      <StatusPopup
        status="success"
        headline="Registered Successfully!"
        text="We will send you an email containing your QR code"
      />
    </AuthLayout>
  );
}
