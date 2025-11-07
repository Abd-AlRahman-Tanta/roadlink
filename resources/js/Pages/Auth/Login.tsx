import Button from "@/Components/Button";
import Headline from "@/Components/Common/Headline";
import Input from "@/Components/Input";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

const loginFields = [
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
];

export default function Login() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post("/login", {
      onFinish: () => reset("password"),
    });
  };

  return (
    <AuthLayout>
      <Head title="Log in" />
      <Headline className="mx-auto mb-4" headline="Login" />
      <form onSubmit={submit} className="flex flex-col gap-5">
        {loginFields.map((field, i) => {
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
    </AuthLayout>
  );
}
