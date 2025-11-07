import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useForm, Head, createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
function Button({
  className = "",
  disabled = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `rounded-md font-sans bg-none text-black bg-white border-2 border-white border-opacity-30 px-4 py-2 text-sm font-bold uppercase tracking-widest transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 active:bg-gray-900 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
const Headline = ({
  headline,
  className
}) => {
  return /* @__PURE__ */ jsx("h2", { className: `text-2xl text-white font-semibold ` + className, children: headline });
};
function Input({
  type = "text",
  className = "",
  isFocused = false,
  label,
  ...props
}) {
  if (type == "password") {
    const [isVisible, setIsVisible] = useState(false);
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "text-white mb-1 text-sm block", htmlFor: props.name, children: label }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center rounded-md border-white border-opacity-10 border-2 pe-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            ...props,
            type: isVisible ? "text" : "password",
            className: "block px-2 py-1 bg-none text-white w-full shadow-sm" + className
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-lightGray",
            type: "button",
            onClick: () => setIsVisible((curr) => !curr),
            children: isVisible ? "Show" : "Hide"
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "text-white mb-1 text-sm block", htmlFor: props.name, children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        ...props,
        type,
        className: "block px-2 py-1 rounded-md bg-none border-2 border-white border-opacity-10 text-white w-full shadow-sm" + className
      }
    )
  ] });
}
const AuthLayout = ({ children }) => {
  return /* @__PURE__ */ jsx("div", { className: "w-screen h-screen flexCenter bg-black", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-lg shadow-normal rounded-2xl p-[2rem] flex flex-col items-stretch border-2 border-white border-opacity-10", children }) });
};
const loginFields = [
  {
    name: "email",
    label: "Email Address",
    type: "email"
  },
  {
    name: "password",
    label: "Password",
    type: "password"
  }
];
function Login() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post("/login", {
      onFinish: () => reset("password")
    });
  };
  return /* @__PURE__ */ jsxs(AuthLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    /* @__PURE__ */ jsx(Headline, { className: "mx-auto mb-4", headline: "Login" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex flex-col gap-5", children: [
      loginFields.map((field, i) => {
        return /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              label: field.label,
              onChange: (e) => setData(field.name, e.currentTarget.value),
              type: field.type
            }
          ),
          errors[field.name] && /* @__PURE__ */ jsx("span", { className: "text-red-700 text-sm", children: errors[field.name] })
        ] });
      }),
      /* @__PURE__ */ jsx(Button, { children: "Register" })
    ] })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
const StatusPopup = ({
  status,
  headline,
  text
}) => {
  return /* @__PURE__ */ jsx("div", { className: "fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 backdrop-blur-sm flexCenter", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-lg bg-black p-10 rounded-xl border-2 border-white border-opacity-10 text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsx("div", { className: "px-4 py-2 rounded-full border-2 border-white", children: status == "success" ? "Success!" : "Failed" }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold ", children: headline })
    ] }),
    /* @__PURE__ */ jsx("p", { children: text })
  ] }) });
};
const registrationFields = [
  {
    name: "name",
    label: "Name",
    type: "string"
  },
  {
    name: "email",
    label: "Email Address",
    type: "email"
  },
  {
    name: "password",
    label: "Password",
    type: "password"
  },
  {
    name: "password_confirmation",
    label: "Password Confirmation",
    type: "password"
  }
];
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post("/register", {
      onFinish: () => reset("password", "password_confirmation")
    });
  };
  return /* @__PURE__ */ jsxs(AuthLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsx(Headline, { className: "mx-auto mb-4", headline: "Register" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex flex-col gap-5", children: [
      registrationFields.map((field, i) => {
        return /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              label: field.label,
              onChange: (e) => setData(field.name, e.currentTarget.value),
              type: field.type
            }
          ),
          errors[field.name] && /* @__PURE__ */ jsx("span", { className: "text-red-700 text-sm", children: errors[field.name] })
        ] });
      }),
      /* @__PURE__ */ jsx(Button, { children: "Register" })
    ] }),
    /* @__PURE__ */ jsx(
      StatusPopup,
      {
        status: "success",
        headline: "Registered Successfully!",
        text: "We will send you an email containing your QR code"
      }
    )
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
const DashboardLayout = ({ children }) => {
  return /* @__PURE__ */ jsx("div", { className: "w-screen h-screen flexCenter", children });
};
const Dashboard = () => {
  return /* @__PURE__ */ jsx(DashboardLayout, { children: /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Dashboard" }) }) });
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
const NotFound = () => {
  return /* @__PURE__ */ jsx("div", { className: "w-screen h-screen bg-darkGray flexCenter", children: /* @__PURE__ */ jsx(Headline, { headline: `This page doesn't exist!` }) });
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NotFound
}, Symbol.toStringTag, { value: "Module" }));
const Welcome = () => {
  return /* @__PURE__ */ jsx("div", { className: "text-xl", children: /* @__PURE__ */ jsx(StatusPopup, { headline: "test", status: "success", text: "This is a test" }) });
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Welcome
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/Login.tsx": __vite_glob_0_0, "./Pages/Auth/Register.tsx": __vite_glob_0_1, "./Pages/Dashboard.tsx": __vite_glob_0_2, "./Pages/NotFound.tsx": __vite_glob_0_3, "./Pages/Welcome.tsx": __vite_glob_0_4 });
      return pages[`./Pages/${name}.tsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  }),
  13720
);
