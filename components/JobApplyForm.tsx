"use client";
import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import { TailSpin } from "react-loader-spinner";
import clsx from "clsx";
import type { ReactNode } from "react";

interface Job {
  title?: string;
  slug?: string;
}

interface FormValues {
  position?: string;
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  message: string;
  [key: string]: string | undefined;
}

interface ErrorState {
  error: boolean;
  message: string;
}

interface SectionProps {
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="container px-6 py-12 mx-auto max-w-7xl sm:px-12 lg:px-16 md:mb-16">
      {children}
    </div>
  );
};

interface FieldProps {
  label: string;
  id: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  values: FormValues;
  setValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

const Field: React.FC<FieldProps> = ({ label, id, required, type, placeholder, values, setValues }) => {
  return (
    <div className="flex flex-col space-y-1">
      {required ? (
        <label htmlFor={id}>
          {label} <span className="text-covey-500">*</span>
        </label>
      ) : (
        <label htmlFor={id}>{label}</label>
      )}
      <input
        type={type || "text"}
        name={id}
        id={id}
        placeholder={placeholder || "Type here..."}
        className="p-2 border border-gray-300 rounded-sm"
        value={values[id] || ""}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValues({ ...values, [id]: e.target.value });
        }}
      />
    </div>
  );
};

interface ApplyFormProps {
  job?: Job;
}

export default function ApplyForm({ job }: ApplyFormProps): React.ReactElement {
  const [processing, setProcessing] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState | null>(null);

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [requiredMessage, setRequiredMessage] = useState<boolean>(false);
  const [values, setValues] = useState<FormValues>({
    position: job?.title,
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    message: "",
  });

  const handleClick = async (params: FormValues): Promise<unknown> => {
    if (!values.name || !values.email || !values.message) {
      setRequiredMessage(true);
      setTimeout(() => {
        setRequiredMessage(false);
      }, 5000);
      return false;
    }

    setProcessing(true);

    const u = new URLSearchParams(params as Record<string, string>).toString();

    try {
      const response = await fetch(`/api/apply?${u}`);
      if (!response.ok) {
        setError({
          error: true,
          message: "Something went wrong...",
        });
        throw new Error(response.statusText);
      }
      const result = await response.json();
      setSubmitted(true);
      setProcessing(false);
      return result;
    } catch (err) {
      setProcessing(false);
      setSubmitted(false);
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError({
        error: true,
        message: errorMessage,
      });
    }
  };

  if (error !== null) {
    return (
      <div className="grid h-screen screen place-items-center">
        <div className="flex flex-col space-y-3">
          <div className="text-4xl">Error</div>
          <div className="text-xl font-semibold">It looks like something went wrong...</div>
          <div className="text-red-500">Message: {error?.message || "Empty"}</div>
          <div>
            <Link
              href="/jobs"
              className="font-semibold text-blue-500 hover:underline hover:text-blue-700"
            >
              Could you please try again?
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="grid h-screen screen place-items-center">
        <div className="flex flex-col space-y-3">
          <div className="text-4xl">Success</div>
          <div className="text-xl font-semibold">Successfully submitted!</div>
          <div>Thanks for your time, we will be in touch.</div>
          <div>
            <Link
              href="/jobs"
              className="font-semibold hover:underline text-covey-500 hover:text-covey-700"
            >
              Back to jobs.
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Section>
      <h1 className="pb-2 text-xl">
        Apply for <span className="font-medium">{job?.title}</span>
      </h1>

      <div className="my-6 border-b">
        <div className="uppercase">Tell us about you</div>
      </div>

      <form className="flex flex-col space-y-4">
        <Field label="Full Name" id="name" required values={values} setValues={setValues} />
        <Field
          label="Email"
          id="email"
          type="email"
          required
          placeholder="hello@example.com"
          values={values}
          setValues={setValues}
        />
        <Field
          label="Phone"
          id="phone"
          placeholder="1-415-555-1234"
          values={values}
          setValues={setValues}
        />
        <Field label="Linkedin" id="linkedin" type="url" values={values} setValues={setValues} />
        <Field label="Github" id="github" type="url" values={values} setValues={setValues} />

        <div className="flex flex-col space-y-1">
          <label htmlFor="message">
            Message <span className="text-covey-500">*</span>
          </label>
          <textarea
            rows={4}
            name="message"
            id="message"
            placeholder="Type here..."
            className="p-2 border border-gray-300 rounded-sm"
            value={values.message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setValues({ ...values, message: e.target.value });
            }}
          />
        </div>
        {requiredMessage ? (
          <div className="w-full text-center text-red-500">
            Please fill out all required fields (name, email, message).
          </div>
        ) : (
          <></>
        )}
        <div className="w-full pb-6 mx-auto text-center md:w-2/3 md:pb-0">
          <button
            type="button"
            className={clsx(
              "text-white px-4 py-2 font-bold rounded-md bg-purpleish-700 hover:bg-purpleish-500 whitespace-nowrap max-w-min",
              {
                "cursor-not-allowed": processing,
                "cursor-pointer": !processing,
              }
            )}
            onClick={() => {
              handleClick(values);
            }}
            disabled={processing}
          >
            <TailSpin
              height="20"
              width="20"
              color="#fff"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass={clsx("px-4", { "!inline-block": processing })}
              visible={processing}
            />
            {processing ? <>Submitting...</> : <>Submit Application</>}
          </button>
        </div>
      </form>
    </Section>
  );
}
