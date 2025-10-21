import Link from "next/link";
import "@/styles/links.css";

export const metadata = {
  title: "Events for our Community",
  description:
    "Information about past and future events related to the Runme open source project, both virtually and in person.",
  keywords: [
    "runme",
    "events",
    "learning",
    "teaching",
    "community",
    "runbooks",
    "collaboration",
    "presentation",
    "discord",
    "meetups",
    "onboarding",
    "support",
    "personal development",
    "workflows",
    "schedule",
    "planning",
    "calendar",
  ],
};

export default async function EventsHome() {
  return (
    <div className="max-w-screen-lg px-4 mx-auto content">
      <div className="my-20">
        <h2 className="py-2 text-4xl font-semibold">Runme Events</h2>

        <div className="my-4">
          <h3 className="py-1 text-2xl font-semibold">Upcoming Events</h3>
          <ul className="ml-6 list-disc">
            <li>
              Runme Community Hour (August 1, 2023){" "}
              <Link href="https://discord.gg/runme">on Discord</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="py-4">
          <h3 className="py-1 text-2xl font-semibold">Previous Events</h3>
          <ul className="ml-6 list-disc">
            <li>
              <Link href="https://www.youtube.com/watch?v=KeV9GxbL2R4">Runme Community Hour</Link>{" "}
              (May 9, 2023)
            </li>
            <li>
              <Link href="https://www.youtube.com/watch?v=IHA0W0N-Ego">Runme Community Hour</Link>{" "}
              (April 25, 2023)
            </li>
            <li>
              <Link href="https://www.youtube.com/watch?v=nU7ZA61PQPA">Runme Community Hour</Link>{" "}
              (April 11, 2023)
            </li>
            <li>
              <Link href="https://www.youtube.com/watch?v=LKEM03BTxZo&t=463s">
                Runme 1.0 Launch
              </Link>{" "}
              (April 11, 2023)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
